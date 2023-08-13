/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      height:{
        'header':'calc(100vh - 80px)'
      }
    },
  },
  plugins: [
  ],
}

