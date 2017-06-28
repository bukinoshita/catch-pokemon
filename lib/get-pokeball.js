'use strict'

module.exports = name => {
  switch (name) {
    case 'pokeball':
      return {
        valueF: 12,
        valueD: 255
      }

    case 'greatball':
      return {
        valueF: 8,
        valueD: 200
      }

    default:
      return {
        valueF: 12,
        valueD: 150
      }
  }
}
