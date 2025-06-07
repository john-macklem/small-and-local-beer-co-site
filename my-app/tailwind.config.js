/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3824',
        secondary: '#D4A017',
        accent: '#C45A11',
        dark: '#2C3E50'
      }
    }
  },
  plugins: []
};
