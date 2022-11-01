/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'Inter', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
