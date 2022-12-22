/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    colors: {
      cyan: 'hsl(158, 36%, 37%)',
      cream: 'hsl(30, 38%, 92%)',
      blue: {
        dark: 'hsl(212, 21%, 14%)',
        'dark-gray': 'hsl(228, 12%, 48%)',
      },
    },
    fontFamily: {
      sans: 'Montserrat, sans-serif',
      serif: 'Fraunces',
    },
  },
  plugins: [],
};
