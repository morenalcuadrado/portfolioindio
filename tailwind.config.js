/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        morado: {
          1500: '#550055',
          1600: '#440044',
          1700: '#330033'
        }
      }
    },
    fontFamily: {
      signature: ("Great Vibes"),
    }
  },
  plugins: [],
}