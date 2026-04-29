import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Productspage from "./pages/Productspage"
import Productdetail from './pages/Productdetail'
import Billing from './pages/Billing'
const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/productspage' element={<Productspage/>}/>
    <Route path='/productdetail/:id' element={<Productdetail/>}/>
    <Route path='/billing/:id' element={<Billing/>}/>
  </Routes>
    </>
  )
}

export default App