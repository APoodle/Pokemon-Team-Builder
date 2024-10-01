import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Pokemonsearchbar from './Pokemonsearchbar.jsx'
import PokemonTeam from './PokemonTeam.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Pokemonsearchbar />
    <PokemonTeam />
  </StrictMode>,
)
