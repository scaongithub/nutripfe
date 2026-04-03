from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.database import SessionLocal
from app.routers import bookings, payments, contact, diets, admin
from app.services.auth_service import seed_admin

app = FastAPI(
    title="TODOenBALANCE API",
    description="Backend API for the TODOenBALANCE nutrition consultancy website.",
    version="1.0.0",
    docs_url="/docs" if settings.environment != "production" else None,
    redoc_url=None,
)

# ── CORS ──────────────────────────────────────────────────────────────────────
origins = [
    settings.frontend_url,
    "http://localhost:3000",
    "https://todoenbalance.vercel.app",
    "https://www.todoenbalance.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

# ── Routers ───────────────────────────────────────────────────────────────────
app.include_router(bookings.router)
app.include_router(payments.router)
app.include_router(contact.router)
app.include_router(diets.router)
app.include_router(admin.router)


# ── Startup ───────────────────────────────────────────────────────────────────
@app.on_event("startup")
def on_startup():
    db = SessionLocal()
    try:
        seed_admin(db)
    finally:
        db.close()


@app.get("/health")
def health_check():
    return {"status": "ok", "environment": settings.environment}
