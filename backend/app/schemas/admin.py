from pydantic import BaseModel, EmailStr


class AdminLogin(BaseModel):
    email: EmailStr
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class AdminStats(BaseModel):
    total_bookings: int
    confirmed_bookings: int
    cancelled_bookings: int
    pending_bookings: int
    total_revenue_cents: int
    upcoming_today: int
