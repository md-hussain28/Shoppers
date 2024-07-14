import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular.jsx'
import Offers from '../components/offers/Offers.jsx'
import NewCollections from '../components/newcollections/NewCollections.jsx'
import NewsLetter from '../components/newsletter/NewsLetter.jsx'

const Shop = () => {
  return (
    <div className='bg-gradient-to-b from-pink-300 to-lime-50'>
       
       <Hero/>
       <Popular/>
       <Offers/>
       <NewCollections/>
       <NewsLetter/>
    </div>
  )
}

export default Shop
