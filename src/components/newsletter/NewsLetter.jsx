import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full text-center '>
    <div className='md:w-9/12 px-7 py-7 w-full mt-9 bg-gradient-to-b from-pink-200 flex mx-auto flex-col items-center '>
       <h1 className='text-4xl mt-10 md:text-5xl  text-pink-800'>Get exclusive Offers on your email</h1>
       <p className='text-2xl mt-6 md:text-3xl  text-pink-700'>Subscribe to our newsletter and stay updated</p>
       <div className='my-6 rounded-full border-2 px-4 py-3 w-fit md:w-1/2 flex justify-between '>
        <input className='bg-white text-black rounded-full border-2 px-4 py-1' type="email" placeholder='your email id' />
        <button className=' bg-black px-2 py-1 rounded-full'>Subscribe</button>
       </div>
    </div>
    </div>
  )
}

export default NewsLetter
