import React from 'react'

const Items = ({props}) => {
  return (
    <div className='bg-pink-100 items-center p-4 flex flex-col w-fit rounded-3xl'>
      <div className='relative w-[290px] h-[400px] overflow-hidden border-2 border-pink-400 rounded-lg'>
        <img 
          className='absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300' 
          src={props.image} 
          alt="itemsimage" 
        />
      </div>
      <h1 className='font-poppins text-black mt-4'>{props.name}</h1>
      <div className='flex justify-between text-pink-900 mt-2'>
        <p>Price Old: {props.old_price}</p>
        <p>Price New: {props.new_price}</p>
      </div>
    </div>
  )
}

export default Items;
