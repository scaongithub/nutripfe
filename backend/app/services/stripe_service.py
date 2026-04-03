import stripe
from app.config import settings

stripe.api_key = settings.stripe_secret_key

PRICES = {
    "consultation_30": settings.stripe_price_consultation_30,
    "consultation_60": settings.stripe_price_consultation_60,
    "diet_mediterranean": settings.stripe_price_diet_mediterranean,
    "diet_lowcarb": settings.stripe_price_diet_lowcarb,
    "diet_plantbased": settings.stripe_price_diet_plantbased,
}

AMOUNTS = {
    "consultation_30": 5000,     # €50.00
    "consultation_60": 10000,    # €100.00
    "diet_mediterranean": 999,   # €9.99
    "diet_lowcarb": 999,
    "diet_plantbased": 999,
}


def create_booking_checkout_session(
    booking_id: str,
    product_type: str,       # "consultation_30" or "consultation_60"
    customer_email: str,
) -> str:
    """Create a Stripe Checkout session and return the URL."""
    price_id = PRICES.get(product_type)

    # If no Stripe Price ID configured yet, use ad-hoc price
    line_items = []
    if price_id:
        line_items = [{"price": price_id, "quantity": 1}]
    else:
        amount = AMOUNTS[product_type]
        duration = "30-minute" if product_type == "consultation_30" else "60-minute"
        line_items = [{
            "price_data": {
                "currency": "eur",
                "unit_amount": amount,
                "product_data": {"name": f"Nutrition Consultation ({duration})"},
            },
            "quantity": 1,
        }]

    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        line_items=line_items,
        mode="payment",
        customer_email=customer_email,
        success_url=f"{settings.frontend_url}/booking/success?booking_id={booking_id}&session_id={{CHECKOUT_SESSION_ID}}",
        cancel_url=f"{settings.frontend_url}/booking/cancel?booking_id={booking_id}",
        metadata={"booking_id": booking_id, "product_type": product_type},
    )
    return session.url, session.id


def create_diet_checkout_session(
    diet_id: str,       # "diet_mediterranean" | "diet_lowcarb" | "diet_plantbased"
    customer_email: str,
) -> tuple[str, str]:
    price_id = PRICES.get(diet_id)
    diet_names = {
        "diet_mediterranean": "1-Week Mediterranean Diet Plan",
        "diet_lowcarb": "1-Week Low-Carb Diet Plan",
        "diet_plantbased": "1-Week Plant-Based Diet Plan",
    }

    line_items = []
    if price_id:
        line_items = [{"price": price_id, "quantity": 1}]
    else:
        line_items = [{
            "price_data": {
                "currency": "eur",
                "unit_amount": AMOUNTS[diet_id],
                "product_data": {"name": diet_names.get(diet_id, "Diet Plan eBook")},
            },
            "quantity": 1,
        }]

    session = stripe.checkout.Session.create(
        payment_method_types=["card"],
        line_items=line_items,
        mode="payment",
        customer_email=customer_email,
        success_url=f"{settings.frontend_url}/diets/download?session_id={{CHECKOUT_SESSION_ID}}",
        cancel_url=f"{settings.frontend_url}/diets",
        metadata={"product_type": diet_id},
    )
    return session.url, session.id


def construct_webhook_event(payload: bytes, sig_header: str) -> stripe.Event:
    return stripe.Webhook.construct_event(payload, sig_header, settings.stripe_webhook_secret)
