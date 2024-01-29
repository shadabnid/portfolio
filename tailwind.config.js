/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'mobile':{'max': '324px'},
     },
    extend: {
      
    },
  },
  plugins: [],
}

