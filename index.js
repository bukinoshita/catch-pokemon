'use strict'

const pokemonF = require('pokemon-f')
const pokeballShake = require('pokeball-shake')
const pokemonCaptureQuote = require('pokemon-capture-quote')
const getPokemon = require('get-pokemon')

const getPokeball = require('./lib/get-pokeball')
const generateN = require('./lib/generate-n')
const randomNumber = require('./lib/random-number')

module.exports = (
  pokemon,
  pokeball,
  {
    asleep = false,
    frozen = false,
    paralyzed = false,
    burned = false,
    poisoned = false
  } = {}
) => {
  return new Promise((resolve, reject) => {
    if (!pokemon || typeof pokemon !== 'string') {
      reject(new TypeError('Pokemon is required'))
    }

    if (!pokeball || typeof pokeball !== 'string') {
      reject(new TypeError('Pokeball is required'))
    }

    const { name, catchRate, hp } = getPokemon(pokemon.toLowerCase())
    const { valueF, valueD } = getPokeball(pokeball.toLowerCase())

    if (pokeball.toLowerCase() === 'masterball') {
      reject(pokemonCaptureQuote(name, 'caught'))
    }

    let n

    if (pokeball.toLowerCase() === 'pokeball') {
      n = generateN(pokeball)
    } else if (pokeball.toLowerCase() === 'greatball') {
      n = generateN(pokeball)
    } else {
      n = generateN(pokeball)
    }

    if (
      ((asleep || frozen) && n < 25) ||
      ((paralyzed || burned || poisoned) && n < 12)
    ) {
      resolve(pokemonCaptureQuote(name, 'caught'))
    }

    if (n > catchRate) {
      reject(pokemonCaptureQuote(name, 0))
    }

    const m = randomNumber(0, 255)
    const f = pokemonF(hp, valueF, hp)

    if (f >= m) {
      resolve(pokemonCaptureQuote(name, 'caught'))
    }

    const shakes = pokeballShake(catchRate, valueD, f)
    reject(pokemonCaptureQuote(name, shakes))
  })
}
