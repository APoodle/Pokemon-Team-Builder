import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='border-bottom nav-shadow'> 
      <div className='flex align-center'>
        <img src='./src/assets/pokefan_m.png' className='logo'/> 
        <h1 className='fs-3'>Pokémon Team Builder</h1>
        <div className='flex ml-auto'> 
          <h3 className='p-1'>Profile</h3>
          <h3 className='p-1'>More</h3>
        </div>
      </div>
    </nav>
  )
}
