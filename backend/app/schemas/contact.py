import uuid
from typing import Optional
from pydantic import BaseModel, EmailStr


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactOut(BaseModel):
    id: uuid.UUID
    name: str
    email: str

    class Config:
        from_attributes = True
