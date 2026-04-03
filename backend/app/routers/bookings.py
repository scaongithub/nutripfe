from datetime import date, timedelta
from typing import List
import uuid

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.booking import Booking, BookingStatus
from app.models.payment import Payment, ProductType
from app.schemas.booking import BookingCreate, BookingOut, BookingCreateResponse, AvailableSlot
from app.services import stripe_service

router = APIRouter(prefix="/api/bookings", tags=["bookings"])

ALL_TIMES = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"]


@router.get("/available-slots", response_model=List[AvailableSlot])
def get_available_slots(db: Session = Depends(get_db)):
    """Return available date+time slots for the next 28 days (Mon–Sat)."""
    slots = []
    today = date.today()

    for i in range(1, 29):
        d = today + timedelta(days=i)
        if d.weekday() == 6:  # skip Sunday
            continue

        # Find times already booked on this day
        booked_times = {
            b.time for b in db.query(Booking).filter(
                Booking.date == d,
                Booking.status != BookingStatus.cancelled,
            ).all()
        }
        available = [t for t in ALL_TIMES if t not in booked_times]
        if available:
            slots.append(AvailableSlot(date=d, times=available))

    return slots


@router.post("", response_model=BookingCreateResponse, status_code=status.HTTP_201_CREATED)
def create_booking(body: BookingCreate, db: Session = Depends(get_db)):
    """Create a pending booking and return a Stripe Checkout URL."""
    # Check the slot is still free
    conflict = db.query(Booking).filter(
        Booking.date == body.date,
        Booking.time == body.time,
        Booking.status != BookingStatus.cancelled,
    ).first()
    if conflict:
        raise HTTPException(status_code=409, detail="This time slot is no longer available.")

    product_type = f"consultation_{body.duration_minutes}"

    # Create Stripe checkout
    try:
        checkout_url, session_id = stripe_service.create_booking_checkout_session(
            booking_id="placeholder",   # will update after saving
            product_type=product_type,
            customer_email=body.email,
        )
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Stripe error: {str(e)}")

    # Save booking
    booking = Booking(
        name=body.name,
        email=body.email,
        phone=body.phone,
        concerns=body.concerns,
        date=body.date,
        time=body.time,
        duration_minutes=body.duration_minutes,
        status=BookingStatus.pending,
        stripe_session_id=session_id,
    )
    db.add(booking)
    db.commit()
    db.refresh(booking)

    # Re-create session with real booking_id in success URL
    checkout_url, session_id = stripe_service.create_booking_checkout_session(
        booking_id=str(booking.id),
        product_type=product_type,
        customer_email=body.email,
    )
    booking.stripe_session_id = session_id
    db.commit()

    return BookingCreateResponse(
        booking_id=booking.id,
        stripe_checkout_url=checkout_url,
    )


@router.get("/{booking_id}", response_model=BookingOut)
def get_booking(booking_id: uuid.UUID, db: Session = Depends(get_db)):
    booking = db.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    return booking


@router.patch("/{booking_id}/cancel")
def cancel_booking(booking_id: uuid.UUID, db: Session = Depends(get_db)):
    booking = db.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    booking.status = BookingStatus.cancelled
    db.commit()
    return {"message": "Booking cancelled"}
