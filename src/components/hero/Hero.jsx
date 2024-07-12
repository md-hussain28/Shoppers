import React from 'react'
import assets from '../../assets/Assets'
const images=assets.images
const Hero = () => {
  return (
    <div className='h-screen min-h-fit flex flex-col  sm:flex-row justify-around items-center bg-gradient-to-b from-pink-300 to-lime-50 '>
       <div className='flex flex-col px-4 justify-center items-start gap-8'>
         <h2 className='font-semibold text-black text-3xl'>New Arrivals only</h2>
         <div>
             <div className='flex gap-3'>
                <p className='text-6xl text-pink-800'>New</p>
                <img className='w-16' src={images.hand_icon} alt="hand_icon" />
             </div>
             <p className='text-6xl text-pink-800'>Collections</p>
             <p className='text-6xl text-pink-800'>For everyone</p>
         </div>
         <div className='bg-black rounded-full px-4 py-3 gap-3 flex items-center'>
            <p className='text-xl font-extralight'>Latest Collection</p>
            <img className='h-4 animate-pulse' src={images.arrow} alt="arrow_icon" />
         </div>
       </div>
       <div className='flex flex-col justify-center'>
         <img className='w-[400px] sm:w-fit' src={images.hero_image} alt="hero_image" />
       </div>
    </div>
  )
}

export default Hero
