/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Google:["Roboto","sans-serif"]
      },
      screens:{
        xs:"350px"
      }
    },
  },
  plugins: [],
}

