import uuid
import enum
from datetime import date as date_type
from sqlalchemy import Column, String, Integer, Date, Text, Enum, ForeignKey, DateTime, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship

from app.database import Base


class BookingStatus(str, enum.Enum):
    pending = "pending"
    confirmed = "confirmed"
    cancelled = "cancelled"


class Booking(Base):
    __tablename__ = "bookings"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False)
    phone = Column(String(30), nullable=False)
    concerns = Column(Text, nullable=True)           # client's health notes
    admin_notes = Column(Text, nullable=True)        # Paola's private notes
    date = Column(Date, nullable=False)
    time = Column(String(10), nullable=False)        # e.g. "14:00"
    duration_minutes = Column(Integer, nullable=False, default=30)
    status = Column(Enum(BookingStatus), default=BookingStatus.pending, nullable=False)
    stripe_session_id = Column(String(255), nullable=True)

    payment_id = Column(UUID(as_uuid=True), ForeignKey("payments.id"), nullable=True)
    payment = relationship("Payment", back_populates="booking", foreign_keys=[payment_id])

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
