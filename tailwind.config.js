/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      colors: {
        "suit-red": "#ea7c6f",
        "suit-green": "#6a996f",
        "suit-blue": "#5696c2",
      }
    },
  },
  plugins: [],
}
