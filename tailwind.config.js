/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        main: "Barlow",
      },
      colors: {
        primary: "#2067cd",
        secondary: {
          100: "#cddaeb",
          200: "#f5f8fb",
        },
      },
    },
  },
  plugins: [],
};
