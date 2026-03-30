/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891b2',
          50: '#e6fbfd',
          100: '#ccf7fb',
          200: '#99eef7',
          300: '#66e5f3',
          400: '#33dcf0',
          500: '#0891b2'
        }
      }
    },
  },
  plugins: [],
}
