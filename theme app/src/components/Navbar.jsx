import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className='navbar'>
      <h1>Theme Manager App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  )
}

export default Navbar