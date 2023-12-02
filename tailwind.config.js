/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "tomato": "hsl(4, 100%, 67%)",
        "lightTomato": "hsla(4, 100%, 67%, 0.3)",
        "darkSlateGrey": "hsl(234, 29%, 20%)",
        "charcoalGrey": "hsl(235, 18%, 26%)",
        "gery": "hsl(231, 7%, 60%)",
        "white": "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}