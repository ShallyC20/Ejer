import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Botones from './Componentes/Botones'
import Card from './Componentes/Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Ejer/" element={<Card/>}/>
          <Route path ="/Boton" element={<Botones/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
