/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce4ff',
          200: '#99c8ff',
          300: '#66acff',
          400: '#3390ff',
          500: '#0074ff', // основной синий
          600: '#005dcc',
          700: '#004699',
          800: '#002f66',
          900: '#001733',
        },
        secondary: {
          50: '#e6ffef',
          100: '#ccffdf',
          200: '#99ffbf',
          300: '#66ff9f',
          400: '#33ff7f',
          500: '#00ff5f', // основной светло-зеленый
          600: '#00cc4c',
          700: '#009939',
          800: '#006626',
          900: '#003313',
        },
      },
      borderRadius: {
        'xl': '1rem', // для закругленных углов
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 