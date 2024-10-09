import React, { useEffect, useState } from 'react'
import './WeaknessTable.css'

export default function WeaknessTable({ pokemonTeam }) {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=493')
    .then(response => response.json())
    .then(data => {
      const fetchPokemonDetails = data.results.map(pokemon => fetch(pokemon.url)
        .then(response => response.json())
        .then(data => ({
          name: pokemon.name,
          id: data.id,
          type: data.types[0].type.name
          }))
        );
        Promise.all(fetchPokemonDetails).then(pokemonData => {setPokemonDetails(pokemonData)});
      });
  }, []);
  


  return (
    <div className='pt-5'>
      <table>
        <tr>
          <th>Type</th>
          <td>{pokemonTeam[0]}</td>
          <td>{pokemonTeam[1]}</td>
          <td>2x</td>
          <td>2x</td>
          <td>2x</td>
          <td>2x</td>
        </tr>
      </table>
    </div>
  )
}
