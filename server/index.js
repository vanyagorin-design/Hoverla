import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { Resend } from 'resend'

const app = express()

app.use(express.json())
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }))

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 })
app.use(limiter)

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// === Resend setup ===
const resend = new Resend(process.env.RESEND_API_KEY)

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

    const { error } = await resend.emails.send({
      from: 'Hoverla Plzeň <onboarding@resend.dev>', // тимчасово працює без верифікації домену
      to: process.env.TO_EMAIL,
      reply_to: email,
      subject: `Nová registrace hráče: ${name}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ ok: false, error: 'Email send failed' })
    }

    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: 'Server error' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`))
