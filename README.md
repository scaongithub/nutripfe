# TODOenBALANCE

Nutrition consultancy website for **Paola Michelle** — full-stack monorepo.

| Layer | Tech | Hosting |
|---|---|---|
| Frontend | React 18 + TailwindCSS | Vercel (free) |
| Backend | FastAPI (Python 3.11) | Render.com (free) |
| Database | PostgreSQL | Neon (free) |
| Payments | Stripe Checkout | — |
| Email | Resend | — |

## Monorepo Structure

```
nutripfe/
├── frontend/    ← React SPA
└── backend/     ← FastAPI API
```

## Quick Start

### Backend
```bash
cd backend
python -m venv venv && source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env   # fill in your values
alembic upgrade head
uvicorn app.main:app --reload
# API at http://localhost:8000
# Docs at http://localhost:8000/docs
```

### Frontend
```bash
cd frontend
cp .env.example .env   # set REACT_APP_API_URL=http://localhost:8000
npm install
npm start
# App at http://localhost:3000
```

### Stripe webhook (local dev)
```bash
stripe listen --forward-to localhost:8000/api/webhook
```

## Admin Dashboard
Visit `/admin` and log in with Paola's credentials (set via `ADMIN_EMAIL` + `ADMIN_PASSWORD` env vars).  
Password is seeded automatically on first startup.

## Deployment

### Backend → Render.com
1. Connect GitHub repo on [render.com](https://render.com)
2. Set root directory to `backend/`
3. Add all env vars from `backend/.env.example` in the Render dashboard
4. Build command: `pip install -r requirements.txt && alembic upgrade head`
5. Start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

### Frontend → Vercel
1. Connect GitHub repo on [vercel.com](https://vercel.com)
2. Set root directory to `frontend/`
3. Add `REACT_APP_API_URL` (your Render URL) in Vercel environment settings
4. Deploy — auto-deploys on every push to `main`.