/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nav-bg": "rgb(6, 11, 20, .8)",
        hero: "#0e1521",
        "hidden-text": '#999',
        "load-more":'rgba(253, 138, 29, 1)'
      },
      backgroundImage: {
        overlay: "linear-gradient(180deg, rgba(4, 21, 45, 0) 0%, #0e1622 89.17%)",
        button: "linear-gradient(to left top, rgba(163, 8, 134, 1) 0%, rgba(253, 138, 29, 1) 100%)",
      },
      screens: {
        "max-width": { max: "480px" },
      }
    },
  },
  plugins: [],
}
