module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      spacing: {
        '8xl': '88rem',
        '9xl': '96rem'
      },
      fontFamily: {
        'dark-wide-super': 'Druk Wide Super',
        'dark-wide-wed': 'Druk Wide Web'
      },
      fontSize: {
        '10xl': '9rem',
        '11xl': '10rem'
      },
      transformStyle: {
        'transform-flat': 'flat',
        'transform-p-3d': 'preserve-3d'
      }
    }
  },
  plugins: []
}
