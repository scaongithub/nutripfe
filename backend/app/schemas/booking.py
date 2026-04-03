import uuid
from datetime import date
from typing import Optional
from pydantic import BaseModel, EmailStr


class BookingCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    concerns: Optional[str] = None
    date: date
    time: str           # "09:00"
    duration_minutes: int  # 30 or 60


class BookingOut(BaseModel):
    id: uuid.UUID
    name: str
    email: str
    phone: str
    concerns: Optional[str]
    date: date
    time: str
    duration_minutes: int
    status: str
    created_at: str

    class Config:
        from_attributes = True


class BookingCreateResponse(BaseModel):
    booking_id: uuid.UUID
    stripe_checkout_url: str


class AvailableSlot(BaseModel):
    date: date
    times: list[str]


class AdminNotesUpdate(BaseModel):
    admin_notes: str


class AdminStatusUpdate(BaseModel):
    status: str  # "confirmed" | "cancelled"
