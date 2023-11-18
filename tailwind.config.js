const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1520px",
      contentContainer: "1280px",
    },

    extend: {
      colors: {
        primary:'#333',
        transparent: "#18181b",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        bubbleGum: "#ff77e9",
        bermuda: "#78dcca",
        hoverBg: "#004f9a",
        lightText: "#d8e2dc",
        blue: "#0284c7",
        green: "#008000",
        bgTransparent: "rgba(0, 0, 0, 0.6)",
        Black: "#000000",
        Red: "#900000",
        gYellow: "#FFEA00",
      },

      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1480px",
        // => @media (min-width: 1280px) { ... }

        xxl: "2000px",
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        sans: ["var(--font-open_sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
