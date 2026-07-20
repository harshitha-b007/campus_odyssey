/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#064E3B",
        midnight: "#0F172A",
        gold: "#FBBF24",
        warmWhite: "#FAF8F5",
        glass: "rgba(255,255,255,0.7)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "sans-serif",
        ],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      boxShadow: {
        apple: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
        glass: "0 8px 32px 0 rgba(31,38,135,0.07)",
      },
    },
  },
  plugins: [],
}