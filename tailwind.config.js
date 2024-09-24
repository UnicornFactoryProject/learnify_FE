/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#ECECEC',
          200: '#444444',
          300: '#2D2D2D',
        },
        secondary: {
          100: '#0056D2',
        },
      },
    },
  },
  plugins: [],
}
