/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        br:'#1E1E1E',
        pur:'#7E74F1',
        cin: 'cinder'
      },
      backgroundImage:{
        'img1':'url()'
      }
    },
  },
  plugins: [],
}