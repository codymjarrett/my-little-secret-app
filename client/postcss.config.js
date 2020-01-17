const tailwind = require('tailwindcss')

module.exports = {
    plugins: [
      require('postcss-easy-import'),
      tailwind('./tailwind.config.js'),
      require('autoprefixer')
    ]
  };