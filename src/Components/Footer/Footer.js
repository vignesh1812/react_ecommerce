import React from 'react'
import "./Footer.css";
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="shop-click logo" />
            <p>SHOP-CLICK</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-links">
            <div className="footer-icon">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icon">
                <img src={pintrest} alt="" />
            </div>
            <div className="footer-icon">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2023-All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer