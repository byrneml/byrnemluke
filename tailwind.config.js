const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alice: ["Alice", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      ...colors,
      white: "#FAFAFA",
      black: "#000000",
      gray: colors.neutral,
      green: "#5BC4B4",
      primary: "#193933",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
