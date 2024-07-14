import React from 'react'
import assets from '../../assets/Assets'

const images=assets.images;

const Offers = () => {
  return (
    <div className='flex flex-col px-5  sm:flex-row bg-gradient-to-b from-pink-200 my-20 mx-auto items-center justify-between sm:w-9/12 text-slate-800 '>
        <div className='flex flex-col justify-center gap-6'>
            <h1 className='text-4xl md:text-6xl '>Exclusive</h1>
            <h1 className='text-4xl md:text-6xl'>Offers For you</h1>
            <p className='text-2xl md:text-4xl'>Only best Seller Products</p>
            <div className='flex'>
                <p className='bg-pink-400 rounded-full font-bold px-4 py-3' >Check Now</p>
            </div>
        </div>
        <div>
            <img src={images.exclusive_image} alt="" />
        </div>
      
    </div>
  )
}

export default Offers
