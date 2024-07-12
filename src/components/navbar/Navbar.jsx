import React from 'react'
import assets from '../../assets/Assets.jsx'
import Menu from './Menu.jsx';
import { Link } from 'react-router-dom';
const {images}=assets;
const Navbar = () => {
  return (
    <div className='border-b-2 border-cyan-200 py-3'>
    <nav className="flex justify-between md:w-8/12 w-11/12 mx-auto  items-center">
        <Link to="/"><img src={images.logo} alt="logo" className='w-12' /></Link>
        <Menu/>
       <div className='flex gap-3'>
          <Link to="/login"><h1>Login</h1></Link>
          <Link to="/cart"> <h1>Cart</h1></Link>
       </div>
    </nav>
    </div>
  )
}

export default Navbar
