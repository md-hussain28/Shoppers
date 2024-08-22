import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId} =useParams();
  const product=all_product.find((e)=> e.id===Number(productId))
  return (
    <div className='bg-slate-600 w-60 h-60'>
       <h1>This is Product</h1>
    </div>
  )
}

export default Product
