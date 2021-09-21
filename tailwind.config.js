const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'BodyFont': ['"Merriweather"', 'serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
      },
      colors: {
        orxe: colors.orange,
      },
      backgroundImage: theme => ({
        'monster': "url('img/monster.jpg')",
        })
    },
  },
  variants: {},
  plugins: [],
}
