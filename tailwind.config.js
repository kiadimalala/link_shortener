module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: "#f46262",
        cyan: '#2acfcf',
        'dark-violet': '#3b3054',
      },
      spacing: {
        "header": "44.5rem"
      },
      screens: {
        'mobile': '375px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
