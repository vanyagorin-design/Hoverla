import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'

const app = express()

app.use(express.json())
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))

// Rate limiter
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })
app.use(limiter)

// Health check
app.get('/api/health', (_req, res) => res.json({ ok: true }))

// Nodemailer transport (Gmail SMTP)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body || {}
    if (!name || !email || !position) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' })
    }

    const html = `
      <h2>Nová registrace hráče</h2>
      <p><strong>Jméno:</strong> ${name}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefon:</strong> ${phone || '-'}</p>
      <p><strong>Pozice:</strong> ${position}</p>
      <p><strong>Zpráva:</strong><br/>${(message || '-').replace(/\n/g, '<br/>')}</p>
    `

    await transporter.sendMail({
      from: `Hoverla Plzeň Web <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `Nová registrace hráče: ${name}`,
      replyTo: email,
      text: `Jméno: ${name}\nE-mail: ${email}\nTelefon: ${phone || '-'}\nPozice: ${position}\nZpráva: ${message || '-'}`,
      html,
    })

    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: 'Email send failed' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))
