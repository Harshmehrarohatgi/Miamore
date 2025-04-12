/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'wine': '#722F37',
        'cream': '#FAF3E0',
        'olive': '#3A4D39'
      }
    },
  },
  plugins: [],
}
