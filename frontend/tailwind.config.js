/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'naranja': '#E14D23',
      },
      fontFamily: {
        'racing': ['"Racing Sans One"', 'cursive'],
        'lato': ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}