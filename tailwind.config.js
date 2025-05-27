/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: "#111827", // dark neutral
        secondary: "#6B7280", // muted gray
        accent: "#facc15", // soft yellow
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.5rem",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};
