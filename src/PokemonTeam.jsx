import React from 'react'
import { useRef, useState } from 'react'
import './PokemonTeam.css'

export default function PokemonTeam() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [currentId, setCurrentId] = useState(NaN)
  const searchRef = useRef(null);

  const handleClick = (event) => {
    searchRef.current.focus();
    setCurrentId(Number(event.currentTarget.id));
  };

  const handleInputChange = (event) => {
    const updatedPokemon = [...selectedPokemon];
    updatedPokemon[currentId] = event.target.value
    setSelectedPokemon(updatedPokemon);
  };

  return (
    <>
      <div>
        <input 
          type='text' 
          placeholder='Search Pokemon'
          onChange={handleInputChange}
          ref={searchRef}
        />
      </div>
      
      <div className='p-2 team-container'>
        <div className='pt-border'>
          <img 
            onClick={handleClick} 
            id='0'
            className='contain' 
            src={
              selectedPokemon[0] ? (`https://projectpokemon.org/images/sprites-models/bdsp-sprites/${selectedPokemon[0]}.png`)
              : ('https://projectpokemon.org/images/sprites-models/bdsp-sprites/465.png')} 
          />
          <p>{currentId}</p>
        </div>
        <div className='pt-border'>
          <img 
            onClick={handleClick} 
            id='1'
            className='contain' 
            src={
              selectedPokemon[1] ? (`https://projectpokemon.org/images/sprites-models/bdsp-sprites/${selectedPokemon[1]}.png`)
              : ('https://projectpokemon.org/images/sprites-models/bdsp-sprites/465.png')} 
          />
          <p>Add Pokemon</p>
        </div>
        <div className='pt-border'>
          <img 
            onClick={handleClick} 
            id='2'
            className='contain' 
            src={
              selectedPokemon[2] ? (`https://projectpokemon.org/images/sprites-models/bdsp-sprites/${selectedPokemon[2]}.png`)
              : ('https://projectpokemon.org/images/sprites-models/bdsp-sprites/465.png')} 
          />
          <p>Add Pokemon</p>
        </div>
        <div className='pt-border'>
          <img 
            onClick={handleClick} 
            id='3'
            className='contain' 
            src={
              selectedPokemon[3] ? (`https://projectpokemon.org/images/sprites-models/bdsp-sprites/${selectedPokemon[3]}.png`)
              : ('https://projectpokemon.org/images/sprites-models/bdsp-sprites/465.png')} 
          />
          <p>Add Pokemon</p>
        </div>
        <div className='pt-border'>
          <img 
            onClick={handleClick} 
            id='4'
            className='contain' 
            src={
              selectedPokemon[4] ? (`https://projectpokemon.org/images/sprites-models/bdsp-sprites/${selectedPokemon[4]}.png`)
              : ('https://projectpokemon.org/images/sprites-models/bdsp-sprites/465.png')} 
          />
          <p>Add Pokemon</p>
        </div>
        <div className='pt-border'>
          <img 
            onClick={handleClick} 
            id='5'
            className='contain' 
            src={
              selectedPokemon[5] ? (`https://projectpokemon.org/images/sprites-models/bdsp-sprites/${selectedPokemon[5]}.png`)
              : ('https://projectpokemon.org/images/sprites-models/bdsp-sprites/465.png')} 
          />
          <p>Add Pokemon</p>
        </div>
      </div>
    </>
  )
}
