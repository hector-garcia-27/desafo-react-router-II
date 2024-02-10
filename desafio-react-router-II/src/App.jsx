import './App.css'
import { Routes, Route } from 'react-router-dom'
import Pokemones from './veiws/Pokemones'
import Home from './veiws/Home'
import Navbar from './components/Navbar'
import PokeProvider from './context/PokeContext'
import Detalle from './veiws/Detalle'

function App() {


  return (
    <>
      <Navbar />
      <PokeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pokemones' element={<Pokemones />} />
          <Route path='/pokemones/:name' element={<Detalle/>} />
        </Routes>
      </PokeProvider>
    </>
  )
}

export default App
