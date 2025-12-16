/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,}",
    "./pages/**/*.{js,ts,jsx,tsx,}",
    "./components/**/*.{js,ts,jsx,tsx,}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgba(2,12,27,0.7)",
      },
      colors: {
        bodyColor2: "#2A1B3D",
        bodyColor: "#0B1120",
        textCyan: "#00FFFF",
        textDark2: '#080808',
        textLight: "#ccd6f6",
        textDark: "#ffffff",
        textDark1: "#8892b0",
        textBlack: "#000",
        textWhite: "#ffffff",
        textMblack: "#353935",
        textSpace: "#000",
        hoverColor: "rgba(100,255,218,0.1)",
      },
      backgroundImage: {
        bodyGradient: "linear-gradient(to bottom, #0B1120, #2A1B3D)",  // Lighter Space Blue/Purple
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

