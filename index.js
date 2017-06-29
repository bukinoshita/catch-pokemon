'use strict'

const pokemonF = require('pokemon-f')
const pokeballShake = require('pokeball-shake')
const pokemonCaptureQuote = require('pokemon-capture-quote')
const getPokemon = require('get-pokemon')
const getPokeball = require('get-pokeball')

const generateN = require('./lib/generate-n')
const randomNumber = require('./lib/random-number')

module.exports = async (
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
  if (!pokemon || typeof pokemon !== 'string') {
    throw new TypeError('Pokemon is required')
  }

  if (!pokeball || typeof pokeball !== 'string') {
    throw new TypeError('Pokeball is required')
  }

  const { name, catchRate, hp } = getPokemon(pokemon.toLowerCase())

  if (pokeball.toLowerCase() === 'masterball') {
    return pokemonCaptureQuote(name, 'caught')
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
    return pokemonCaptureQuote(name, 'caught')
  }

  if (n > catchRate) {
    return pokemonCaptureQuote(name, 0)
  }

  const ball = await getPokeball(pokeball.toLowerCase())
  const m = randomNumber(0, 255)
  const f = await pokemonF(hp, ball.value.f, hp)

  if (f >= m) {
    return pokemonCaptureQuote(name, 'caught')
  }

  const shakes = pokeballShake(catchRate, ball.value.d, f)
  return pokemonCaptureQuote(name, shakes)
}
