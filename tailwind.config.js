/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        giaza: ["Giaza"],
        roboto: ["Roboto"],
        glacial: ["Glacial"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
