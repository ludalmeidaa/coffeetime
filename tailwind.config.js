/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {

      fontFamily: {
        aleppo: ['Chau Philomene One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'], 
      },

      colors: {
        'marrom-principal': '#361005',
        'amarelo-destaque': '#F7CB60',
        'fundo-carrossel': '#fffaf3', 
      },
    },
  },
  plugins: [],
}

