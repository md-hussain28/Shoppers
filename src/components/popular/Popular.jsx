import React from 'react'
import data_product from '../../assets/images/data'
import Items from '../items/Items'


const Popular = () => {
  return (
    <div className='flex flex-col text-center items-center'>
        <h1 className=' mx-auto text-4xl md:text-5xl py-3 text-pink-700 '>Popular in Women</h1>
        <hr className='bg-black  h-[2px] w-40 mb-4' />
        <div className='grid grid-cols-1 justify-items-center px-4  md:grid-cols-2 lg:grid-cols-3 gap-3'>
            { data_product.map((item,i)=>{
                return <Items key={i} props={item}/>
            })
            }
        </div>
      
    </div>
  )
}

export default Popular
