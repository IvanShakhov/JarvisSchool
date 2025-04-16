/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E1EAFF',
          100: '#C3D5FF',
          200: '#A5C0FF',
          300: '#87ABFF',
          400: '#6996FF',
          500: '#2364FF',
          600: '#1D52DB',
          700: '#1841B7',
          800: '#123193',
          900: '#0D206F',
        },
        secondary: {
          50: '#FFF0E6',
          100: '#FFE1CC',
          200: '#FFD2B3',
          300: '#FFC399',
          400: '#FFB480',
          500: '#FF6B00',
          600: '#DB5C00',
          700: '#B74D00',
          800: '#933E00',
          900: '#6F2F00',
        },
        gray: {
          50: '#F7F9FC',
          100: '#E5E9F2',
          200: '#D3D8E6',
          300: '#C0C7DA',
          400: '#9AA4BC',
          500: '#7582A1',
          600: '#4F5D75',
          700: '#3A4354',
          800: '#252C36',
          900: '#101418',
        },
        success: {
          500: '#00B090',
        },
        error: {
          500: '#E53E3E',
        },
        warning: {
          500: '#F59E0B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(37, 44, 54, 0.05)',
        'card-hover': '0 10px 25px rgba(37, 44, 54, 0.1)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#252C36',
            h1: {
              fontWeight: 700,
              letterSpacing: '-0.03em',
            },
            h2: {
              fontWeight: 700,
              letterSpacing: '-0.02em',
            },
            h3: {
              fontWeight: 700,
              letterSpacing: '-0.01em',
            },
            a: {
              color: '#2364FF',
              '&:hover': {
                color: '#1D52DB',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
} 