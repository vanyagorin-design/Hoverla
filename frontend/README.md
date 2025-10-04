# Hoverla Plzeň — Frontend (Vite + React + Tailwind)

## Development
```bash
npm install
npm run dev
```

Vite dev server proxies API calls to `http://localhost:3001` for `/api/*` (see `vite.config.js`).

## Build
```bash
npm run build
npm run preview
```

## Deploy
- Recommended: Vercel (connect this folder as a project)
- Set `Build Command`: `npm run build`
- `Output Directory`: `dist`
- Add rewrite/proxy for `/api` to your backend if backend is on a different host.
