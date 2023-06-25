/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '80vw': '80vw',
        '70vw': '70vw',
      },
      colors: {
        themeColor: "#2A41E6"
      }
    },
  },
  plugins: [],
}
