/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#EF4F5F',
        secondaryHover: '#E03546',
        lightWhite: '#FFFBF7',
        lightGray: '#F8F8F8',
        primaryText: '#1D1D1D',
        secondaryText: '#000000',
        ternaryText: '#888888',
      },
    },
  },
  plugins: [],
};
