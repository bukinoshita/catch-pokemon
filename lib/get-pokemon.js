const pokemons = [{ name: 'pikachu', catchRate: 190, type: 'eletrict', hp: 35 }]

module.exports = name => {
  return pokemons.filter(pokemon => {
    if (pokemon.name === name) {
      return pokemon
    }

    return false
  })[0]
}
