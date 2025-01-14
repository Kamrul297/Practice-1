/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#006D5B",
      },
      backgroundImage:{
        todayImg: "url('/today.png')",
      },
    },
  },
  plugins: [],
}

