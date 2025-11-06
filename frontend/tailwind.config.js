/** Tailwind config for Hoverla Plzeň redesign (non-destructive example)
 * If you already have tailwind.config.js, merge `theme.extend` parts.
 */
import { type Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          green: "#22c55e",
          yellow: "#eab308",
        }
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)"
      }
    },
  },
  plugins: [],
} satisfies Config
