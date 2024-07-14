import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Footer from './components/footer/Footer'
function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shop category="mens" />} />
        <Route path='/womens' element={<Shop category="womens" />} />
        <Route path='/kids' element={<Shop category="kids" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
