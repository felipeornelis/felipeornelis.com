/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,svelte}'],
  theme: {
    extend: {
      backgroundImage: {
        'labs-preview': 'linear-gradient(180deg, transparent 0%, rgba(16,21,27,1) 95%);',
      },
      colors: {
        'light-gray': 'rgba(217, 217, 217, 0.22)',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'Inter', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
