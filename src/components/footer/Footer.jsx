import React from 'react'
import assets from '../../assets/Assets'

 const images=assets.images;
const Footer = () => {
  return (
    <div className='flex flex-col items-center bg-lime-50'>
        <hr className='bg-black  h-[1px] w-full mb-4' />
       <div>
         <img src={images.logo} alt="" />
         <p>SHOPPERS</p>
       </div>
       <ul className='sm:w-2/4 gap-3 text-black text-xl my-5 flex justify-evenly'>
        <li>Comany</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
       </ul>
       <div className='sm:w-2/4 my-3 justify-center flex gap-3'>
         <div>
            <img src={images.instagram_icon} alt="" />
         </div>
         <div>
            <img src={images.whatsapp_icon} alt="" />
         </div>
         <div>
            <img src={images.pintester_icon} alt="" />
         </div>
        
       </div>
       <div className=' flex flex-col items-center'>
            <hr className='bg-black w-11/12 h-[1px]' />
            <p className='text-black py-4 '>All Rights Reserved @ Md Saquib Hussain</p>
         </div>
    </div>
  )
}

export default Footer
