/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./mainpage/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'newsletter': ['Hedvig Letters Serif', 'serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}