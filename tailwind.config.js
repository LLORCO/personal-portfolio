/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mint: { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac" },
        moss: { 600: "#3f6212", 700: "#365314", 800: "#166534", 900: "#14532d", 950: "#052e16" },
        accent: {
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
        },
      },
      fontFamily: {
        heading: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ['"Atkinson Hyperlegible Next"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
