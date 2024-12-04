/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./pages/*.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-home': "url(./img/home.png)",
      },
      fontFamily : {
        'poppins' : ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}

