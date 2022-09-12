/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'myfont' : ['"Playfair Display"'],
    },
    extend: {
      colors: {
        'main': {
          100: '#761300',
          200: '#CC4516',
          300: '#F89C1D',
          400: '#FFF2E1',
          500: '#751300',
          600: '#3F0A00',
          700: '#FFA485',
          800: '#FFF3E1',
          900: '#BDBDBD'
        },
        
        'info' : '#2F80ED',
        'success' : '#27AE60',
        'warning' : '#E2B93B',
        'error' : '#EB5757',

        'black' : {
          100: '#000000',
          200: '#1D1D1D',
          300: '#282828',
        },

        'white' : '#FFFFFF',

        'grey' : {
          100 :  '#E0E0E0',
          200 : '#BDBDBD',
          300 : '#828282',
          400 :  '#4F4F4F',
          500 : '#333333'
        }
      },

      backgroundImage: {
        'hero-pattern' : "url('../src/assets/images/9ICE-AND-BEAUTY-KOKOTV5-1 1.jpg')",
        'footer' : "url('../src/assets/images/Group 11310.png')"
      }
    },
  },
  plugins: [],
}
