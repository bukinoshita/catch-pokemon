'use strict'

import test from 'ava'
import m from './'

test(async t => {
  const notPokemon = await t.throws(m('aaa', 'pokeball'))
  const pokemonError = await t.throws(m())
  const pokeballError = await t.throws(m('Bulbasaur'))

  t.is(await m('Bulbasaur', 'masterball'), 'All right! Bulbasaur was caught!')
  t.is(typeof await m('Bulbasaur', 'ultraball'), 'string')
  t.is(typeof await m('Bulbasaur', 'pokeball'), 'string')
  t.is(typeof await m('Bulbasaur', 'greatball'), 'string')
  t.is(typeof await m('Bulbasaur', 'safariball'), 'string')
  t.is(notPokemon.message, 'hpMax should be a number')
  t.is(pokemonError.message, 'Pokemon is required')
  t.is(pokeballError.message, 'Pokeball is required')
})
