const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          100: '#000',
          200: '#eee'
        }
      },
      fontFamily: {
        'roboto': ['Roboto'],
        'poppins': ["Poppins", "sans-serif"],
        'exo2': ["Exo 2", "sans-serif"],
        'rocksalt': ["Rock Salt", "cursive"]
      }
    },
  },
  plugins: [],
};
