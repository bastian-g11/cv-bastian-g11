/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-yellow': '#FAF8EF',
        'light-violet': '#9F86C0',
        violet: '#6C4F85',
        'gradient-purple':
          'linear-gradient(90deg, rgba(109,106,188,1) 6D6ABC%, rgba(108,79,133,1) 100%)',
        'main-purple': '#575496',
        'light-gray': '#949495',
        'medium-gray': '#818997',
        'dark-gray': '#2F3237',
        'dark-purple': '#141323',
      },
    },
  },
  plugins: [],
};
