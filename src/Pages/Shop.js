import React from 'react'
import BannerCard from '../Components/BannerCard/BannerCard'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import Newsletter from '../Components/Newsletter/Newsletter'

const Shop = () => {
  return (
    <div className=''>
        <BannerCard/>
        <Popular/>
       <Offers/>
       <NewCollection/>
       <Newsletter/>
   </div>
  )
}

export default Shop