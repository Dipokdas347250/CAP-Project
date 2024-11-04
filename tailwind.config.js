/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner' : "url('./assets/Banner.png')",
        'footer' : "url('./assets/Footer00.png')",
        'aboutt' : "url('./assets/Abou.png')",
        'how' : "url('./assets/How01.png')",
        'how02' : "url('./assets/How02.png')",
        'supp' : "url('./assets/Supp.png')",
         
      },
      
    },
    fontFamily: {
      'serif' : ["Nunito", 'sans-serif']
    }
  },

  plugins: [],
}