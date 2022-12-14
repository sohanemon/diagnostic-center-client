/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        berkShire: ["Berkshire Swash", "cursive"],
        bebas: ["Bebas Neue", "cursive"],
        cursive: ["Cedarville Cursive", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
});
