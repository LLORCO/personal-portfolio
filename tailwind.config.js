/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /** Fondos y superficies (verde predominante) */
        mint: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
        },
        /** Texto y contraste */
        moss: {
          600: "#3f6212",
          700: "#365314",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        /** Acentos interactivos */
        accent: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          /** 700+ son los únicos tonos válidos para texto blanco (>= 4.5:1) */
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        /** Acentos extra vibrantes (bloques / highlights) */
        vibe: {
          300: "#d9f99d",
          400: "#bef264",
          500: "#a3e635",
          600: "#84cc16",
        },
      },
      fontFamily: {
        heading: ["Archivo", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      transitionDuration: {
        resize: "var(--resize-dur)",
        reveal: "var(--stagger-dur)",
      },
      transitionTimingFunction: {
        "out-quart": "var(--resize-ease)",
      },
      transitionDelay: {
        stagger: "var(--stagger-stagger)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
