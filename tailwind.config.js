/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        clasico:['Qwitcher Grypen', defaultTheme.fontFamily.sans],
        whitcher:['Bangers', defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

