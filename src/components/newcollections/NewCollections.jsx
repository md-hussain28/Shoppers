import React from 'react'
import new_collections from '../../assets/images/new_collections'
import Items from '../items/Items'
const NewCollections = () => {
  return (
    <div  className='flex flex-col text-center items-center'>
         <h1 className='text-5xl text-pink-700 pt-6 py-2'>New Collections</h1>
         <hr className='bg-black  h-[2px] w-40 mb-4' />
         <div className='grid grid-cols-1 px-4  justify-items-center  md:grid-cols-2 lg:grid-cols-3 gap-3' >
            {new_collections.map((item,i)=>{
                return(
                    <Items key={i} props={item} />
                )
               
            })

            }
         </div>
      
    </div>
  )
}

export default NewCollections
