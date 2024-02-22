/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        apercu: ['Apercu Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        suisse: ["Suisse Int'l Book", 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        graphik: ['Graphik XXXXCond Sup Trial'],
      },
      fontSize: {
        '5xl': '3.3rem',
        '10xl': '9rem',
        '11xl': '11rem',
        '12xl': '13rem',
        '13xl': '15rem',
      },
      transitionDuration: {
        '2000': '2000ms', 
        '3000': '3000ms',
        'slow': '2s', 
      },
    },
  },
  plugins: [],
}
