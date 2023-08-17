/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'degrade': "url('/src/assets/degrade.png')"
      }
    },
  },
  plugins: [],
}