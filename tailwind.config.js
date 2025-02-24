/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      height: {
        '90vh': '90vh', // Define a custom height of 90vh
      },
      width: {
        '45': '45%', // Add custom width of 45%
        '37rem': '37rem',
        '98': '98%'
      },
      backgroundImage: {
        'banner-image': "url('/assets/home.jpg')", // Add your image path here
      },

      colors: {
        lightred: '#fee2e2a6', // Adding the custom light red color
        lightgreen: '#62d98126', // Adding the custom light red color
        footer: '#1a1829'
      },
    },
  },
  plugins: [],
}
