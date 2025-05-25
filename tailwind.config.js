/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BD8B9C', // rose gold
        secondary: '#D4AF37', // gold accent
        dark: '#2A1A1A', // dark background
        light: '#F5F0F0', // light background
      },
    },
  },
  plugins: [],
};