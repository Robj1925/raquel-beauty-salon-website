/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'club-dark': '#1C1C1C',
        'club-gold': '#D4AF37',
        'club-light': '#F8F9FA',
        'club-gray': '#2A2A2A',
      },
      fontFamily: {
        heading: ['Amiri', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        'touch': '44px',
      }
    },
  },
  plugins: [],
}
