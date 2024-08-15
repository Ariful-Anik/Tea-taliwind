/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'primary': 'rgb(119, 119, 119)'
      },
      fontFamily:{
        'display': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

