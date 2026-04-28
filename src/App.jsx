import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Productspage from "./pages/Productspage"
const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/productspage' element={<Productspage/>}/>
  </Routes>
    </>
  )
}

export default App