
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:"#FFFFFF",
        aboutbg:"#DBBCA1",
        secondaryColor:"#220404",
        sponsorbg:"#655546",
        contactbg:"#291600",
        navbarbg:"#6F4436",
        logo:"url('/src/assets/logo.png')"
      },
      backgroundImage:{
        herobg:"url('./src/assets/hero.png')"
      },
      fontFamily:{
        pomFam:[ "Pompiere", "sans-serif"],
        galFam:["Galada"," cursive"],
        PopFam:["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

