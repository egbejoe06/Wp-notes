/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Damion']
      },
      colors:{
        primary:"#EC7160",
        background:"#F6F6F6",
        textcolor:"#898989",
        title:"#303030",
        border:"#E7E7E9;"
      },
      screens:{
        sd:"320px"
      }
    },
  },
  plugins: [],
}

