import uuid
from datetime import date, timedelta
from typing import List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.admin import AdminUser
from app.models.booking import Booking, BookingStatus
from app.models.payment import Payment, PaymentStatus
from app.schemas.admin import AdminLogin, TokenResponse, AdminStats
from app.schemas.booking import BookingOut, AdminNotesUpdate, AdminStatusUpdate
from app.services.auth_service import verify_password, create_access_token, get_current_admin

router = APIRouter(prefix="/api/admin", tags=["admin"])


@router.post("/login", response_model=TokenResponse)
def admin_login(body: AdminLogin, db: Session = Depends(get_db)):
    admin = db.query(AdminUser).filter(AdminUser.email == body.email).first()
    if not admin or not verify_password(body.password, admin.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": admin.email})
    return TokenResponse(access_token=token)


@router.get("/bookings", response_model=List[BookingOut])
def list_bookings(
    status: str = None,
    db: Session = Depends(get_db),
    _: AdminUser = Depends(get_current_admin),
):
    query = db.query(Booking)
    if status:
        try:
            query = query.filter(Booking.status == BookingStatus(status))
        except ValueError:
            raise HTTPException(status_code=400, detail=f"Invalid status: {status}")
    return query.order_by(Booking.date, Booking.time).all()


@router.get("/bookings/upcoming", response_model=List[BookingOut])
def upcoming_bookings(
    db: Session = Depends(get_db),
    _: AdminUser = Depends(get_current_admin),
):
    today = date.today()
    next_week = today + timedelta(days=7)
    return (
        db.query(Booking)
        .filter(
            Booking.date >= today,
            Booking.date <= next_week,
            Booking.status == BookingStatus.confirmed,
        )
        .order_by(Booking.date, Booking.time)
        .all()
    )


@router.patch("/bookings/{booking_id}/notes")
def update_notes(
    booking_id: uuid.UUID,
    body: AdminNotesUpdate,
    db: Session = Depends(get_db),
    _: AdminUser = Depends(get_current_admin),
):
    booking = db.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    booking.admin_notes = body.admin_notes
    db.commit()
    return {"message": "Notes updated"}


@router.patch("/bookings/{booking_id}/status")
def update_status(
    booking_id: uuid.UUID,
    body: AdminStatusUpdate,
    db: Session = Depends(get_db),
    _: AdminUser = Depends(get_current_admin),
):
    booking = db.query(Booking).filter(Booking.id == booking_id).first()
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    try:
        booking.status = BookingStatus(body.status)
    except ValueError:
        raise HTTPException(status_code=400, detail=f"Invalid status: {body.status}")
    db.commit()
    return {"message": f"Status updated to {body.status}"}


@router.get("/stats", response_model=AdminStats)
def get_stats(
    db: Session = Depends(get_db),
    _: AdminUser = Depends(get_current_admin),
):
    today = date.today()
    start_of_month = today.replace(day=1)

    total = db.query(func.count(Booking.id)).scalar()
    confirmed = db.query(func.count(Booking.id)).filter(Booking.status == BookingStatus.confirmed).scalar()
    cancelled = db.query(func.count(Booking.id)).filter(Booking.status == BookingStatus.cancelled).scalar()
    pending = db.query(func.count(Booking.id)).filter(Booking.status == BookingStatus.pending).scalar()

    # Revenue: sum of completed payments this month
    revenue = (
        db.query(func.coalesce(func.sum(Payment.amount_cents), 0))
        .filter(
            Payment.status == PaymentStatus.completed,
            Payment.created_at >= start_of_month,
        )
        .scalar()
    )

    upcoming_today = (
        db.query(func.count(Booking.id))
        .filter(Booking.date == today, Booking.status == BookingStatus.confirmed)
        .scalar()
    )

    return AdminStats(
        total_bookings=total,
        confirmed_bookings=confirmed,
        cancelled_bookings=cancelled,
        pending_bookings=pending,
        total_revenue_cents=revenue,
        upcoming_today=upcoming_today,
    )
