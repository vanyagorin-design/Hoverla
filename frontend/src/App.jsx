import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Translations
const translations = {
  cs: {
    home: "Domů",
    team: "Tým",
    schedule: "Rozpis a výsledky",
    news: "Novinky",
    gallery: "Galerie",
    contact: "Kontakt / Registrace",
    welcome: "Vítejte na oficiálních stránkách týmu Hoverla Plzeň!",
    captainCoach: "Kapitán a trenér",
    trainings: "Rozpis tréninků",
    until: "Tréninky probíhají až do konce dubna 2026.",
    tuesday: "Úterý",
    friday: "Pátek",
    time: "Čas",
    location: "Místo",
    results: "Výsledky zápasů",
    comingSoon: "Brzy přidáme výsledky sezóny 2025/26.",
    map: "Otevřít v Google Maps",
    latestNews: "Aktuální novinky",
    photoGallery: "Fotogalerie",
    contactUs: "Kontaktujte nás",
    email: "E-mail",
    register: "Registrace nových hráčů",
    name: "Jméno a příjmení",
    phone: "Telefon (nepovinné)",
    position: "Pozice",
    message: "Zpráva",
    send: "Odeslat",
    thankYou: "Děkujeme za registraci! Ozveme se vám co nejdříve.",
  },
  ua: {
    home: "Головна",
    team: "Команда",
    schedule: "Розклад і результати",
    news: "Новини",
    gallery: "Галерея",
    contact: "Контакти / Реєстрація",
    welcome: "Ласкаво просимо на офіційний сайт команди Hoverla Plzeň!",
    captainCoach: "Капітан і тренер",
    trainings: "Розклад тренувань",
    until: "Тренування проводяться до кінця квітня 2026 року.",
    tuesday: "Вівторок",
    friday: "П’ятниця",
    time: "Час",
    location: "Місце",
    results: "Результати матчів",
    comingSoon: "Незабаром додамо результати сезону 2025/26.",
    map: "Відкрити в Google Maps",
    latestNews: "Останні новини",
    photoGallery: "Фотогалерея",
    contactUs: "Зв'яжіться з нами",
    email: "Електронна пошта",
    register: "Реєстрація нових гравців",
    name: "Ім’я та прізвище",
    phone: "Телефон (необов’язково)",
    position: "Позиція",
    message: "Повідомлення",
    send: "Надіслати",
    thankYou: "Дякуємо за реєстрацію! Ми з вами зв’яжемося найближчим часом.",
  },
  en: {
    home: "Home",
    team: "Team",
    schedule: "Schedule & Results",
    news: "News",
    gallery: "Gallery",
    contact: "Contact / Registration",
    welcome: "Welcome to the official website of Hoverla Plzeň!",
    captainCoach: "Captain & Coach",
    trainings: "Training Schedule",
    until: "Trainings are held until the end of April 2026.",
    tuesday: "Tuesday",
    friday: "Friday",
    time: "Time",
    location: "Location",
    results: "Match Results",
    comingSoon: "We will soon add the results for the 2025/26 season.",
    map: "Open in Google Maps",
    latestNews: "Latest News",
    photoGallery: "Photo Gallery",
    contactUs: "Contact us",
    email: "E-mail",
    register: "New Player Registration",
    name: "Full Name",
    phone: "Phone (optional)",
    position: "Position",
    message: "Message",
    send: "Send",
    thankYou: "Thank you! We'll get back to you shortly.",
  },
}

function Navbar({ lang, setLang }) {
  const t = translations[lang]
  return (
    <nav className="flex flex-col md:flex-row md:items-center md:justify-between bg-green-800 px-6 py-4 text-yellow-400 shadow-lg">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Hoverla Logo" className="h-12" />
        <h1 className="font-extrabold text-2xl tracking-wide">Hoverla Plzeň</h1>
      </div>
      <ul className="flex flex-wrap justify-center md:justify-end space-x-4 mt-3 md:mt-0 font-semibold">
        <li><Link className="hover:text-white transition" to="/">{t.home}</Link></li>
        <li><Link className="hover:text-white transition" to="/team">{t.team}</Link></li>
        <li><Link className="hover:text-white transition" to="/schedule">{t.schedule}</Link></li>
        <li><Link className="hover:text-white transition" to="/news">{t.news}</Link></li>
        <li><Link className="hover:text-white transition" to="/gallery">{t.gallery}</Link></li>
        <li><Link className="hover:text-white transition" to="/contact">{t.contact}</Link></li>
      </ul>
      <select
        className="ml-0 md:ml-4 mt-3 md:mt-0 bg-black text-yellow-400 p-2 rounded-md border border-yellow-400 hover:bg-yellow-400 hover:text-black transition"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        <option value="cs">CZ</option>
        <option value="ua">UA</option>
        <option value="en">EN</option>
      </select>
    </nav>
  )
}

function Home({ lang }) {
  const t = translations[lang]
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6 drop-shadow-md">
        {t.welcome}
      </h2>
      <p className="text-lg text-gray-700 mb-6">🏐 Hoverla Plzeň Volleyball Club</p>
      <Link to="/team" className="px-6 py-3 bg-green-700 text-yellow-300 rounded-xl font-bold shadow-lg hover:bg-green-900 hover:text-white transition">
        {t.team}
      </Link>
    </div>
  )
}

function Team({ lang }) {
  const t = translations[lang]
  const players = [
    {
      name: "Ivan Horin",
      number: 8,
      position: "Nahrávač",
      role: t.captainCoach,
      photo: "https://via.placeholder.com/600x400?text=Ivan+Horin",
    },
  ]
  return (
    <div className="min-h-[calc(100vh-80px)] p-8">
      <h2 className="text-3xl font-extrabold text-green-800 text-center mb-8">{t.team}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {players.map((p) => (
          <div key={p.number} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={p.photo} alt={p.name} className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-2xl font-bold text-green-800">{p.name}</h3>
              <p className="text-gray-600 text-lg">#{p.number} — {p.position}</p>
              <p className="text-sm text-yellow-600 font-semibold mt-2">{p.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Schedule({ lang }) {
  const t = translations[lang]
  const trainings = [
    {
      day: t.tuesday,
      time: "19:30 – 21:30",
      location: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x470aef4ab3df7a79:0x4f5980eb6ddaec22?sa=X&ved=1t:8290&ictx=111",
    },
    {
      day: t.friday,
      time: "17:30 – 19:30",
      location: "https://maps.google.com/maps?hl=uk&gl=cz&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x470aee02c5e35d53:0x261fcd66f4d94ee5",
    },
  ]
  return (
    <div className="min-h-[calc(100vh-80px)] p-8">
      <h2 className="text-3xl font-extrabold text-green-800 text-center mb-8">{t.schedule}</h2>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-green-200">
        <h3 className="text-2xl font-bold text-green-700 mb-4">{t.trainings}</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-green-400 text-green-800">
              <th className="py-2">Den</th>
              <th className="py-2">{t.time}</th>
              <th className="py-2">{t.location}</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((tr, idx) => (
              <tr key={idx} className="border-b border-yellow-100 hover:bg-yellow-50 transition">
                <td className="py-3 font-semibold text-green-800">{tr.day}</td>
                <td className="py-3">{tr.time}</td>
                <td className="py-3">
                  <a href={tr.location} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {t.map}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-6 text-yellow-700 font-semibold">{t.until}</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-6 mt-10 rounded-2xl shadow-lg border border-green-200">
        <h3 className="text-2xl font-bold text-green-700 mb-2">{t.results}</h3>
        <p className="text-gray-600">{t.comingSoon}</p>
      </div>
    </div>
  )
}

function News({ lang }) {
  const t = translations[lang]
  const newsList = [
    {
      title: "Začíná nová sezóna Hoverla Plzeň!",
      date: "19. října 2025",
      image: "https://via.placeholder.com/800x500?text=Nova+sezona",
      text: "Tým Hoverla Plzeň zahajuje novou sezónu plnou energie, tréninků a zápasů!",
    },
    {
      title: "Tréninky pokračují i v zimě",
      date: "10. listopadu 2025",
      image: "https://via.placeholder.com/800x500?text=Treninky+v+zime",
      text: "Ani zimní období nás nezastaví! Pokračujeme v pravidelných trénincích dvakrát týdně.",
    },
  ]
  return (
    <div className="min-h-[calc(100vh-80px)] p-8">
      <h2 className="text-3xl font-extrabold text-green-800 text-center mb-8">{t.latestNews}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {newsList.map((n, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={n.image} alt={n.title} className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-2">{n.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{n.date}</p>
              <p className="text-gray-700 mb-3">{n.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Gallery({ lang }) {
  const t = translations[lang]
  const photos = Array.from({ length: 12 }).map((_, i) => `https://via.placeholder.com/600x400?text=Foto+${i + 1}`)
  return (
    <div className="min-h-[calc(100vh-80px)] p-8">
      <h2 className="text-3xl font-extrabold text-green-800 text-center mb-8">{t.photoGallery}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {photos.map((src, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md bg-white">
            <img src={src} alt={`Foto ${idx + 1}`} className="w-full h-40 sm:h-44 lg:h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Contact() {
  const t = translations.cs
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.error || 'Request failed')
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', position: '', message: '' })
    } catch (err) {
      setError('Nepodařilo se odeslat formulář. Zkuste to prosím znovu.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] p-8">
      <h2 className="text-3xl font-extrabold text-green-800 text-center mb-8">{t.contact}</h2>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-green-200">
        <h3 className="text-2xl font-bold text-green-700 mb-4">{t.contactUs}</h3>
        <p className="text-gray-700 mb-6">📧 <a href="mailto:vanyagorin@gmail.com" className="text-blue-600 hover:underline">vanyagorin@gmail.com</a></p>
        <h3 className="text-2xl font-bold text-green-700 mb-4">{t.register}</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder={t.name} className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <input type="email" placeholder={t.email} className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
            <input type="text" placeholder={t.phone} className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            <select className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={formData.position} onChange={(e) => setFormData({ ...formData, position: e.target.value })} required>
              <option value="">{t.position}</option>
              <option value="Nahrávač">Nahrávač</option>
              <option value="Smečař">Smečař</option>
              <option value="Blokař">Blokař</option>
              <option value="Libero">Libero</option>
            </select>
            <textarea placeholder={t.message} rows="4" className="w-full p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
            {error && <p className="text-red-600">{error}</p>}
            <button type="submit" disabled={loading} className="px-6 py-3 bg-green-700 text-yellow-300 rounded-xl font-bold shadow-lg hover:bg-green-900 hover:text-white transition disabled:opacity-60">
              {loading ? "Odesílání…" : t.send}
            </button>
          </form>
        ) : (
          <p className="text-green-800 font-semibold text-center mt-4">{t.thankYou}</p>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('cs') // default language CZ
  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/team" element={<Team lang={lang} />} />
        <Route path="/schedule" element={<Schedule lang={lang} />} />
        <Route path="/news" element={<News lang={lang} />} />
        <Route path="/gallery" element={<Gallery lang={lang} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}
