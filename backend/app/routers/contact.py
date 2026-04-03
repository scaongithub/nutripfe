from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.contact import ContactSubmission
from app.schemas.contact import ContactCreate, ContactOut
from app.services import email_service

router = APIRouter(prefix="/api/contact", tags=["contact"])


@router.post("", response_model=ContactOut, status_code=201)
def submit_contact(body: ContactCreate, db: Session = Depends(get_db)):
    submission = ContactSubmission(
        name=body.name,
        email=body.email,
        message=body.message,
    )
    db.add(submission)
    db.commit()
    db.refresh(submission)

    try:
        email_service.send_contact_notification(submission)
    except Exception:
        pass  # Don't expose email errors to client

    return submission
