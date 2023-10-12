import React from 'react'
import './BannerCard.css'
import hand from '../Assets/hand_icon.png'
import girl  from '../Assets/hero_image.png'
import arrow_icon from '../Assets/arrow.png'
import { NavLink } from 'react-router-dom'

const BannerCard = () => {
  return (
    <div className='Banner-card'>
        <div className="Banner-left">
          <div className='ban'><h2 className='m-0 fs-5 p-0'>NEW ARRIVALS ONLY!!!
           </h2>
           <p className='m-0 p-0'>new <span><img  src={hand} height={30} width={30} alt="" /></span></p>
           <p className='m-0 p-0'>collection</p>
           <p>for everyone</p>
           </div>

            <div className="banner-btn">
               <NavLink to='/'><button className='rounded-pill px-4 py-2'>Latest Collection <i className='ms-4'><img src={arrow_icon} alt="" /></i></button></NavLink>
            </div>
        </div>
        <div className="Banner-right">
            <img src={girl} className='img-fluid' alt="girl-shopclick" />
        </div>
    </div>
  )
}

export default BannerCard