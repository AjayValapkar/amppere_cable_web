/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#15283A',
        'icon-color':'#AE1B19',
        
      },
      backgroundImage: {
        'wire': "url('/src/assets/wire.svg')", // SVG background
      },
      boxShadow: {
        'border': '0 0 0 4px rgba(255, 255, 255, 1)', // Custom shadow mimicking a border
      },
      backgroundSize: {
        "200%": "200%", // Needed for gradient animation to cover more space
      },
      keyframes: {
        'borderColorChange': {
          '0%': { borderColor: '#0000ff' }, /* Blue */
          '100%': { borderColor: '#AE1B1B' }, /* Red */
        },
        'borderRun': {
          // '0%': {
          //   height: '0%',
          //   width: '0%',
          // },
          // '50%': {
          //   height: '100%',
          //   width: '0%',
          // },
          // '100%': {
          //   height: '100%',
          //   width: '100%',
          // },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        // borderRun: { borderRun: 'borderRun 2s ease-in-out infinite', },
      },
      animation: {
        'borderRun': 'borderColorChange 2s linear',
        'fade-in-down': 'fade-in-down 2.2s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
        'gradient-animation': 'gradient 5s ease infinite', // Gradient animation
      },
    },
  },
  plugins: [],
}
