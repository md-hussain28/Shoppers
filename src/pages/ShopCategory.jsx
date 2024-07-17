import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const ShopCategory = (props) => {
  const all_product =useContext(ShopContext)
  return (
    <div className=''>
        <img src={props.banner} alt="" />
        
    </div>
  )
}

export default ShopCategory
