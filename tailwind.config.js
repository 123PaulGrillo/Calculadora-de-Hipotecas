/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#203b53", // Color azul oscuro
        danger: "#ff1515",  
      },
    },
  },
  plugins: [],
}

