import React, { useState } from 'react'
import assets from '../../assets/Assets.jsx'
import Menu from './Menu.jsx';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar.jsx';
const { images } = assets;
const Navbar = () => {

  const [open, setOpen] = useState('false');
  console.log(open);

  return (
    <> <Sidebar open={open} setOpen={setOpen} />
      <div className='border-b-2 border-cyan-200 py-3 overflow-x-hidden'>
        <nav className="flex justify-between md:w-8/12 w-11/12 mx-auto  items-center">
          <div className='flex gap-3'>
            <button className='sm:hidden' onClick={() => setOpen(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="pink">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
</svg>

            </button>

            <Link to="/"><img src={images.logo} alt="logo" className='w-12' /></Link>
          </div>
          <div className='hidden sm:w-1/2  sm:block'>
            <Menu />
          </div>

          <div className='flex gap-3 '>
            <Link to="/login"><h1>Login</h1></Link>
            <Link to="/cart"> <h1>Cart</h1></Link>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
