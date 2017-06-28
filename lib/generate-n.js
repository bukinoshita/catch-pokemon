'use strict'

const randomNumber = require('./random-number')

module.exports = ball => {
  switch (ball) {
    case 'poke ball':
      return randomNumber(0, 255)

    case 'great ball':
      return randomNumber(0, 200)

    default:
      return randomNumber(0, 150)
  }
}
