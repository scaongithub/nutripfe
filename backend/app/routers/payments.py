import uuid
from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.booking import Booking, BookingStatus
from app.models.payment import Payment, PaymentStatus, ProductType
from app.services import stripe_service, email_service

router = APIRouter(tags=["payments"])


@router.post("/api/payments/create-diet-checkout")
def create_diet_checkout(
    diet_id: str,
    customer_email: str,
    db: Session = Depends(get_db),
):
    """Create a Stripe Checkout session for a diet plan ebook."""
    valid_diets = ["diet_mediterranean", "diet_lowcarb", "diet_plantbased"]
    if diet_id not in valid_diets:
        raise HTTPException(status_code=400, detail="Invalid diet ID")

    try:
        checkout_url, session_id = stripe_service.create_diet_checkout_session(
            diet_id=diet_id,
            customer_email=customer_email,
        )
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Stripe error: {str(e)}")

    # Create a pending payment record
    payment = Payment(
        stripe_session_id=session_id,
        amount_cents=999,
        product_type=ProductType(diet_id),
        customer_email=customer_email,
    )
    db.add(payment)
    db.commit()

    return {"checkout_url": checkout_url}


@router.post("/api/webhook")
async def stripe_webhook(request: Request, db: Session = Depends(get_db)):
    """Handle Stripe webhook events."""
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature", "")

    try:
        event = stripe_service.construct_webhook_event(payload, sig_header)
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid webhook signature")

    if event.type == "checkout.session.completed":
        session = event.data.object
        session_id = session.id
        metadata = session.get("metadata", {})
        product_type = metadata.get("product_type", "")
        booking_id = metadata.get("booking_id")

        # Mark payment completed
        payment = db.query(Payment).filter(Payment.stripe_session_id == session_id).first()
        if payment:
            payment.status = PaymentStatus.completed
            payment.stripe_payment_intent_id = session.get("payment_intent")
            db.commit()

        # If this was a consultation booking
        if booking_id:
            booking = db.query(Booking).filter(Booking.id == booking_id).first()
            if booking:
                booking.status = BookingStatus.confirmed
                if payment:
                    booking.payment_id = payment.id
                db.commit()
                db.refresh(booking)

                try:
                    email_service.send_booking_confirmation(booking)
                    email_service.send_booking_notification_to_paola(booking)
                except Exception:
                    pass  # Don't fail the webhook on email errors

        # If this was a diet purchase, send download email
        elif "diet" in product_type:
            diet_names = {
                "diet_mediterranean": "1-Week Mediterranean Diet Plan",
                "diet_lowcarb": "1-Week Low-Carb Diet Plan",
                "diet_plantbased": "1-Week Plant-Based Diet Plan",
            }
            customer_email = session.get("customer_email", "")
            if customer_email and payment:
                download_url = f"{_get_frontend_url()}/diets/download?token={payment.download_token}"
                try:
                    email_service.send_diet_download(
                        customer_email,
                        diet_names.get(product_type, "Diet Plan"),
                        download_url,
                    )
                except Exception:
                    pass

    elif event.type == "payment_intent.payment_failed":
        pi_id = event.data.object.id
        payment = db.query(Payment).filter(Payment.stripe_payment_intent_id == pi_id).first()
        if payment:
            payment.status = PaymentStatus.failed
            db.commit()

    return {"status": "ok"}


def _get_frontend_url() -> str:
    from app.config import settings
    return settings.frontend_url
