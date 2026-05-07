import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import './App.css'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App