import { Router } from 'express';
import nodemailer from 'nodemailer';

const router = Router();

function isSpam(body: any) {
  return body.company && String(body.company).trim().length > 0;
}

router.post('/', async (req, res) => {
  try {
    if (isSpam(req.body)) return res.status(200).json({ ok: true });

    const { name, email, message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });

    const safe = {
      name: String(name).slice(0, 100),
      email: String(email).slice(0, 160),
      message: String(message).slice(0, 5000),
    };

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: `Hoverla Site <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `Нове повідомлення від ${safe.name}`,
      replyTo: safe.email,
      text: safe.message,
    });

    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
