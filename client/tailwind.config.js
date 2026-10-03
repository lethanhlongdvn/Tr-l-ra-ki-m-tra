/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        level1: '#10b981', // Mức 1 - Emerald
        level2: '#f59e0b', // Mức 2 - Amber
        level3: '#8b5cf6', // Mức 3 - Violet
      }
    },
  },
  plugins: [],
}
