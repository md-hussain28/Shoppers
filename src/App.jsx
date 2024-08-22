import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import LoginSignup from './pages/LoginSignup'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Footer from './components/footer/Footer'
import banner_kids from './assets/images/banner_kids.png'
import banner_womens from './assets/images/banner_women.png'
import banner_mens from './assets/images/banner_mens.png'
import ShopCategory from './pages/ShopCategory'

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={banner_womens} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid" />} />
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
