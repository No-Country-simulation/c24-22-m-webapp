/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Incluye todos los archivos JSX/JS en src
    "./src/pages/css/*.css", // Incluye los archivos CSS en src/pages/css
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};