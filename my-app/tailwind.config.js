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
        primary: '#1b1b1b',
        secondary: '#f2e8d5',
        accent: '#f05e34',
        dark: '#121212'
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-playfair)',
      }
    }
  },
  plugins: []
};
