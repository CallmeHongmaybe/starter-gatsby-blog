/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': { 'min': '280px', 'max': '500px' },
      'tablet': { 'min': '500px', 'max': '1100px' },
      'laptop': { 'min': '1100px' }
    },
  }, 
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}
