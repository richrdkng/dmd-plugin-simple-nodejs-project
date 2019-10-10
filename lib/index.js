const path = require('path')

module.exports = function () {
  return {
    partial: path.join(__dirname, './partials/**/*.hbs'),
    helper: path.join(__dirname, './helpers/**/*.js')
  }
}
