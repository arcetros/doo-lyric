/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Red Hat Mono', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
