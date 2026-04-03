import uuid
import enum
from sqlalchemy import Column, String, Integer, Enum, DateTime, func, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.database import Base


class PaymentStatus(str, enum.Enum):
    pending = "pending"
    completed = "completed"
    failed = "failed"
    refunded = "refunded"


class ProductType(str, enum.Enum):
    consultation_30 = "consultation_30"
    consultation_60 = "consultation_60"
    diet_mediterranean = "diet_mediterranean"
    diet_lowcarb = "diet_lowcarb"
    diet_plantbased = "diet_plantbased"


class Payment(Base):
    __tablename__ = "payments"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    stripe_session_id = Column(String(255), unique=True, nullable=False)
    stripe_payment_intent_id = Column(String(255), nullable=True)
    amount_cents = Column(Integer, nullable=False)   # e.g. 5000 = €50.00
    currency = Column(String(3), default="eur")
    product_type = Column(Enum(ProductType), nullable=False)
    status = Column(Enum(PaymentStatus), default=PaymentStatus.pending, nullable=False)
    customer_email = Column(String(255), nullable=True)
    download_token = Column(UUID(as_uuid=True), nullable=True, default=uuid.uuid4)

    # Reverse relation to booking (booking.payment_id -> payments.id)
    booking = relationship("Booking", back_populates="payment", foreign_keys="Booking.payment_id")

    created_at = Column(DateTime(timezone=True), server_default=func.now())
