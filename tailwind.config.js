/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'Arial', 'Helvetica', '-apple-system', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'Arial', 'Helvetica', '-apple-system', 'system-ui', 'sans-serif'],
      },
      colors: {
        'dark': '#121116'
      }
    },
  },
  plugins: [],
}

