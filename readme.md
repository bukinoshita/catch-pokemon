# catch-pokemon [![Build Status](https://travis-ci.org/bukinoshita/catch-pokemon.svg?branch=master)](https://travis-ci.org/bukinoshita/catch-pokemon)

> Algorithm to catch a pokemon


## Install

```
$ npm install --save catch-pokemon
```


## Usage
```js
const catchPokemon = require('catch-pokemon')

catchPokemon('Pikachu', 'masterball')
// => All right! Pikachu was caught!
```


## API

### catchPokemon(pokemon, pokeball, [options])

returns a `promise`

#### pokemon

Type: `string`<br/>
Required

Pokemon's name

#### pokeball

Type: `string`<br/>
Options: `pokeball`, `masterball`, `greatball`, `ultraball` and `safariball`<br/>
Required

Pokeball's name

#### options

Type: `object`

##### name

Type: `string`

Pokemon's name

##### hp

Type: `integer`

Pokemon's hp

##### catchRate

Type: `integer`

Pokemon's catch rate

##### asleep

Type: `boolean`<br/>
Default: false

Determine if pokemon is asleep

##### frozen

Type: `boolean`<br/>
Default: false

Determine if pokemon is frozen

##### paralyzed

Type: `boolean`<br/>
Default: false

Determine if pokemon is paralyzed

##### burned

Type: `boolean`<br/>
Default: false

Determine if pokemon is burned

##### poisoned

Type: `boolean`<br/>
Default: false

Determine if pokemon is poisoned


If `name`, `hp` and `catchRate` are passed it won't look up for these information on API (faster). Otherwise, it will try to find the Pokemon on the API.


## Related

- [pokemon-game](https://github.com/bukinoshita/pokemon-game) — Pokemon game — Get 'em all
- [pokedex-api](https://github.com/bukinoshita/pokedex-api) — Pokedex API
- [pokemon-catch-probability](https://github.com/bukinoshita/pokemon-catch-probability) — Check probabilty to catch a pokemon
- [get-pokeball](https://github.com/bukinoshita/get-pokeball) — Get pokeball information
- [pokeball-shake](https://github.com/bukinoshita/pokeball-shake) — Algorithm to determine how many times pokeball shakes
- [pokemon-capture-quote](https://github.com/bukinoshita/pokemon-capture-quote) — Pokemon capture quote
- [pokemon-f](https://github.com/bukinoshita/pokemon-f) — Algorithm to calculate `f` on capture pokemon method


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
