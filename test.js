'use strict'

import test from 'ava'
import m from './'

test(async t => {
  const notPokemon = await t.throws(m('aaa', 'pokeball'))
  const pokemonError = await t.throws(m())
  const pokeballError = await t.throws(m('Pikachu'))

  t.is(await m('Pikachu', 'masterball'), 'All right! pikachu was caught!')
  t.is(typeof await m('Pikachu', 'ultraball'), 'string')
  t.is(typeof await m('Pikachu', 'pokeball'), 'string')
  t.is(typeof await m('Pikachu', 'greatball'), 'string')
  t.is(typeof await m('Pikachu', 'safariball'), 'string')
  t.is(notPokemon.message, `Cannot match against \'undefined\' or \'null\'.`)
  t.is(pokemonError.message, 'Pokemon is required')
  t.is(pokeballError.message, 'Pokeball is required')
})
