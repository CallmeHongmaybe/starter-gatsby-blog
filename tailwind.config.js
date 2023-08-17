/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': 'rgb(255, 127.6, 73)',
        'custom-orange-fade': 'rgb(255, 163, 117)',
        'custom-navy': '#364053',
        'custom-gray': '#585C65'
      },
      borderColor: {
        'custom-orange': 'rgb(255, 127.59, 72.99, 0.69)',
      }
    },
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
