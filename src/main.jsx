import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Pokemonsearchbar from './Pokemonsearchbar.jsx'
import PokemonTeam from './PokemonTeam.jsx'
import TypeChart from './TypeChart.jsx'
import WeaknessTable from './WeaknessTable.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <PokemonTeam />
    <WeaknessTable />
  </StrictMode>,
)
