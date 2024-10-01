import React, { useState, useEffect } from 'react';
import './Pokemonsearchbar.css';
import SelectedPokemon from './SelectedPokemon.jsx'

export default function Pokemonsearch() {
  /* 
   * We use the pattern [value, setter] is used to have value as the current
   * state and have setter be the function that updates the this.state.
   *
   * We pass different data types to useState depending on what is best.
   * So pokemon list is an array and searchTerm is a string
   * */
  const [pokemonList, setPokemonList] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  /*
   * useEffect is a function to synchronize a component to an external system
   * This lets us use the browser api effectively
   * fetch then gets the data, we use then to then turn the promise
   * into a json file and then again to map pokemon names
   * */
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=251')
      .then(response => response.json())
      .then(data => {
        const fetchPokemonDetails = data.results.map(pokemon => fetch(pokemon.url)
          .then(response => response.json())
          .then(details => ({
            name: pokemon.name,
            sprite: details.sprites.front_default
          }))
        );

        Promise.all(fetchPokemonDetails).then(pokemonDetails => {
          setPokemonList(pokemonDetails);
        });
      });
  }, []);

  /*
   * (e) is short for event. It is a synthetic event object in React
   * that represents the event triggered by the user interaction
   * */
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value) {
      const filtered = pokemonList.filter(pokemon =>
         pokemon.name.toLowerCase().includes(value)
      );
      setFilteredPokemon(filtered);
      setDropdownVisible(true);
    } else {
      setDropdownVisible(false);
    }
  };

  const handleSelectPokemon = (pokemon) => {
    setSearchTerm(pokemon.name);
    setDropdownVisible(false);
    setSelectedPokemon(pokemon);
  };

  return (
    <div> 
      <input 
        type='text' 
        placeholder='Search Pokemon...'
        className= 'searchbar'
        value={searchTerm}
        onChange={handleInputChange}
        onClick={() => searchTerm && setDropdownVisible(true)}
        />

      {dropdownVisible && (
        <ul className='pokemonlist' >
          {filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon, index) => (
              <li key={index} 
                onClick={() => handleSelectPokemon(pokemon)}>
                <img src={pokemon.sprite} alt={pokemon.name} style={{ 
                  width: `50px`, marginRight: `10px`, position: `relative`,
                  top: `15px`}} />
                {pokemon.name}
              </li>
            ))
          ) : (
            <li className='pokemonlist'>No Pokemon Found</li>
          )}
        </ul>
      )}
      <SelectedPokemon pokemon={selectedPokemon} />
    </div>
  )
}
