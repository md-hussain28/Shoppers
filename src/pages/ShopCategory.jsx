import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import assets from '../assets/Assets';
import Items from '../components/items/Items';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  if (!Array.isArray(all_product)) {
    console.error('Expected all_product to be an array but got:', all_product);
    return <div>Error: Products data is not available.</div>;
  }

  return (
    <div className='flex flex-col text-center items-center bg-gradient-to-b from-pink-300 to-lime-50'>
      <img src={props.banner} alt="Banner" className='w-full object-cover' />
      <div className='my-4'>
        <p className='text-lg'>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className='mt-2'>
          Sort by <img src={assets.images.dropdown_icon} alt="Sort" className='inline-block ml-2' />
        </div>
      </div>
      <div className='grid grid-cols-1 justify-items-center px-4 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {all_product
          .filter(item => props.category === item.category)
          .map((item) => (
            <Items key={item.id} props={item} />
          ))
        }
        {all_product.every(item => props.category !== item.category) && (
          <h1 className='text-xl'>No Products</h1>
        )}
      </div>
    </div>
  );
};

export default ShopCategory;
