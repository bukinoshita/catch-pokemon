'use strict'

const pokemonF = require('pokemon-f')
const pokeballShake = require('pokeball-shake')
const pokemonCaptureQuote = require('pokemon-capture-quote')

const getPokemon = require('./lib/get-pokemon')
const generateN = require('./lib/generate-n')
const randomNumber = require('./lib/random-number')

module.exports = async (
  pokemon,
  pokeball,
  {
    hp,
    catchRate,
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

  let pkm

  if (hp && catchRate) {
    pkm = { name: pokemon, hp, catchRate }
  } else {
    pkm = await getPokemon(pokemon.toLowerCase())
  }

  if (pokeball.toLowerCase() === 'masterball') {
    return pokemonCaptureQuote(pkm.name, 'caught')
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
    return pokemonCaptureQuote(pkm.name, 'caught')
  }

  if (n > pkm.catchRate) {
    return pokemonCaptureQuote(pkm.name, '0')
  }

  const m = randomNumber(0, 255)
  const f = await pokemonF(pkm.hp, pokeball.toLowerCase(), pkm.hp)

  if (f >= m) {
    return pokemonCaptureQuote(pkm.name, 'caught')
  }

  const shakes = await pokeballShake(pkm.catchRate, pokeball.toLowerCase(), f)
  return pokemonCaptureQuote(pkm.name, shakes.toString())
}
