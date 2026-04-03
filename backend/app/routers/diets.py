from fastapi import APIRouter, Depends
from pydantic import BaseModel


router = APIRouter(prefix="/api/diets", tags=["diets"])

DIET_CATALOG = [
    {
        "id": "diet_mediterranean",
        "title": "1-Week Mediterranean Diet Plan",
        "description": "A heart-healthy 7-day meal plan focusing on whole grains, healthy fats, and lean proteins.",
        "price_eur": 9.99,
        "features": ["7 daily meal plans with recipes", "Complete grocery list", "Meal prep guide"],
    },
    {
        "id": "diet_lowcarb",
        "title": "1-Week Low-Carb Diet Plan",
        "description": "Kickstart your metabolism with this delicious, easy-to-follow low-carbohydrate meal plan.",
        "price_eur": 9.99,
        "features": ["7 daily meal plans with recipes", "Complete grocery list", "Macronutrient breakdown included"],
    },
    {
        "id": "diet_plantbased",
        "title": "1-Week Plant-Based Diet Plan",
        "description": "A fully vegan 7-day meal plan designed to provide optimal nutrition and energy.",
        "price_eur": 9.99,
        "features": ["7 daily meal plans with recipes", "Complete grocery list", "100% Vegan & cruelty-free"],
    },
]


@router.get("")
def list_diets():
    return DIET_CATALOG


@router.get("/download/{token}")
def download_diet(token: str):
    """Placeholder — returns coming-soon message until PDF files are ready."""
    return {
        "status": "coming_soon",
        "message": "Your diet plan PDF is being prepared and will be available soon. "
                   "Paola will send it to your email within 24 hours.",
    }
