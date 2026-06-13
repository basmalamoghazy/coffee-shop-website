/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#d2b48c',
          main: '#6f4e37',
          dark: '#3b2f2f'
        }
      }
    },
  },
  plugins: [],
}