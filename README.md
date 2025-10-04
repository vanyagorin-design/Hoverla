# Hoverla Plzeň — Full Project

This repository contains:
- `frontend/` — Vite + React + Tailwind website
- `server/` — Node.js + Express + Nodemailer backend for contact form

## Quick Start

### 1) Frontend (local)
```bash
cd frontend
npm install
npm run dev
```
Open http://localhost:5173

### 2) Backend (local)
```bash
cd server
cp .env.example .env    # fill SMTP_PASS with your Gmail App Password
npm install
npm start
```
API: http://localhost:3001

Vite dev server already proxies `/api` to the backend in dev mode.

## Deploy (recommended)
- Frontend: Vercel (connect `frontend/`)
- Backend: Render.com / Wedos VPS
- Domain: point `hoverlaplzen.cz` to Vercel (A/ALIAS/CAA per Vercel docs) and configure a rewrite for `/api` to backend URL.

