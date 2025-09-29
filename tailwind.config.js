/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3B82F6', // Tailwind blue-500 for CTA focus
        'accent-cyan': '#06B6D4', // Tailwind cyan-500 for tech accents
        'dark-bg': '#111827',     // Tailwind gray-900 for dark background
        'light-text': '#F3F4F6',  // Tailwind gray-100 for main text
      },
      fontFamily: {
        sans: ['Poppins', 'Open Sans', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}