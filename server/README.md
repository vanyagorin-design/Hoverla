# Hoverla Plzeň — Backend (Node.js + Express + Nodemailer)

## Requirements
- Node.js 18+
- Gmail App Password (see Google Account -> Security -> App passwords)

## Setup
```bash
cp .env.example .env
# edit .env and set SMTP_PASS to your Gmail App Password
npm install
npm start
```

The API runs on `http://localhost:3001` by default.

### Endpoints
- `POST /api/contact` — accepts JSON:
```json
{
  "name": "Full Name",
  "email": "someone@example.com",
  "phone": "optional",
  "position": "Nahrávač|Smečař|Blokař|Libero",
  "message": "optional text"
}
```
Returns `{ ok: true }` on success.
