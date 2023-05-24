/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('assets/logo.svg')",
        logoDark: "url('assets/logoDarkMode.svg')",
      },
      colors: {
        secondary: "rgba(0,0,0,0.55)",
        hovercolor: "#00852a",
        secondaryDark: "rgba(255, 255, 255, 0.55)",
        textDark: "#919191",
      },
    },
  },
  plugins: [],
};
