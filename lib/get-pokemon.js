'use strict'

const got = require('got')

module.exports = name => {
  return got(`https://pokedex-api.now.sh/pokemons/${name}`)
    .then(pokemon => JSON.parse(pokemon.body))
    .catch(err => err.statusMessage)
}
