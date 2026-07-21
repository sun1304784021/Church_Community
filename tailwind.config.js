/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        showcase: '#5A4C41',
        dark: 'rgb(29, 25, 26)',
        cream: '#F1E5C6',
        'off-white': '#F5F0E8',
        'frame-border': '#2a2a2a',
      },
      screens: {
        showcase: '900px',
      },
    },
  },
  plugins: [],
}
