/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#000000",
          green: "#22c55e", // = tailwind green-500
          yellow: "#eab308" // = tailwind yellow-500
        },
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
    },
  },
  plugins: [],
}
