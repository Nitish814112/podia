/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: { listStyleType: {
    none: 'none',
    disc: 'disc',
    decimal: 'decimal',
    circle:'circle',
    square: 'square',
    roman: 'upper-roman',
  },
    extend: {
      colors: {
        'custom-blue': '#0000FF', // Define custom color
      },
    },
  },
  plugins: [],
}

