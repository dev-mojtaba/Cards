// tailwind.config.js
module.exports = {
  purge: ['index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Gold
        'primaryGold': '#F1A31D',
        
        // Gray
        'primaryGray': '#8E9291',
        'primaryDarkGray': '#58615E',
        'primaryLightGray': '#E6E6E6',

        // Indigo
        'primaryIndigo': '#51508A',

        // Purple
        'primaryPurple': '#B14F8A',
        
        // Red
        'primaryRed': '#F16161',
      },
      fontFamily: {
        'roboto': ['Roboto-Regular'],
      },
    },
  },
  variants: {},
  plugins: [],
}