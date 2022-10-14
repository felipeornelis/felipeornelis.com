/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-blue': 'linear-gradient(rgb(94, 162, 239) 25%, rgb(0, 114, 245) 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}