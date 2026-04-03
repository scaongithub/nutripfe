from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    # Database
    database_url: str

    # Stripe
    stripe_secret_key: str
    stripe_webhook_secret: str
    stripe_price_consultation_30: str = ""
    stripe_price_consultation_60: str = ""
    stripe_price_diet_mediterranean: str = ""
    stripe_price_diet_lowcarb: str = ""
    stripe_price_diet_plantbased: str = ""

    # Email
    resend_api_key: str
    from_email: str = "bookings@todoenbalance.com"
    paola_email: str = "paola@todoenbalance.com"

    # App
    frontend_url: str = "http://localhost:3000"
    environment: str = "development"
    secret_key: str
    access_token_expire_minutes: int = 480

    # Admin seed
    admin_email: str = "paola@todoenbalance.com"
    admin_password: str = "changeme"


settings = Settings()
