/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '1028px',
    xl: '1440px'
  }
}
