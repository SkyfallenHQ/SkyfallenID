module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
        'spacing': 'padding,margin'
      },
    },
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"],
  },
  plugins: [],
}