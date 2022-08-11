/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        sm: '500px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
    colors: {
      'black-p': '#161513',
      'grey-p': '#f2f1ef',
      'red-p': '#e94d35',
      'red-s': '#e94d3570',

      
    },
    fontFamily: {
      'Quicksand': ['Quicksand', 'sans-serif'],
      // font-family: 'Quicksand', sans-serif;
      // 'MyFont': ['"My Font"', 'serif'] // Ensure fonts with spaces have " " surrounding it.
    },
  },
  plugins: [],
}
