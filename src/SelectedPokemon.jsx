import React from 'react'
import Pokemonsearchbar from './Pokemonsearchbar.jsx'

export default function SelectedPokemon({ pokemon }) {
  if (!pokemon) {
    return null
  }

  return (
    <div className='selected-pokemon'>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprite} />
    </div>
    );
  }
