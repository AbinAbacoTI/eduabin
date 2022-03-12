module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      height: {
        600: '600px',
        650: '650px',
        700: '700px',
        400: '400px'
      },
      width: {
        306: '306px',
        73: '73%'
      },
      colors: {
        'orange-eduabin': '#E9581B',
        'white-ext': '#F2F4F6',
        'blue-transparent': 'rgba(21, 71, 210, 0.67)'
      }
    }
  },
  plugins: []
}
