// postcss.config.js

/* eslint-disable-next-line */
const autoprefixer = require('autoprefixer');
/* eslint-disable-next-line */
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
};
