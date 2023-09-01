/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'degrade':"url('./src/assets/degrade.png')",
        'fundo':"url('./src/assets/fundo.png')",
        'color': "url('/src/assets/fundoColor.png)",
        'capovila': "url('./src/assets/capo.jpg')",
        'naely': "url('./src/assets/naely.jpg')",
        'michael': "url('./src/assets/michael.jpg')",
        'luiza': "url('./src/assets/luiza.jpg')",

      }
    },
  },
  plugins: [],
}