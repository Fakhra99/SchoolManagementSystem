/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-greysh": "rgb(35,52,69)",
        "light-white": "rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}