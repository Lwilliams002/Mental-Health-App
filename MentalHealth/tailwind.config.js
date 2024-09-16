/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#CAE6F7'
      },
      fontFamily:{
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pitalic: ["Poppins-Italic", "sans-serif"],
      }
    },
  },
  plugins: [],
}

