import React, { useContext } from 'react'
import './Navbar.css';
import logo from "../Assets/logo.png"
import menubar from './menu.png';
import cart from "../Assets/cart_icon.png"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import close_cart from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';



const Navbar = () => {
    const [menu, setmenu] = (useState(false));
    const { getTotalCartItems } = useContext(ShopContext);
    console.log(menu);
    return (
        <div>
            <nav className='Navbar' id='Navbar'>
                <div className="menu-bar">
                    <img onClick={() => (setmenu(!menu))} src={menubar} alt="menu-logo" />
                </div>
                <NavLink to='/' className='logolink'>
                    <div className="Nav-brand">
                        <img className="logo" src={logo} alt="logo" />
                        <div className="logo-name">SHOP-CLICK</div>
                    </div>
                </NavLink>
                <div className="list-unstyled  nav-menus">
                    <NavLink to='/' className='link'><li className=''>Shop</li></NavLink>
                    <NavLink to='/mens' className='link'><li className=''>Mens</li></NavLink>
                    <NavLink to='/womens' className='link'><li className=''>Womens</li></NavLink>
                    <NavLink to='/kids' className='link'><li className=''>Kids</li></NavLink>
                </div>
                <div className="buttons">
                    <NavLink to='/login'><button className='login-btn'>login</button></NavLink>
                    <NavLink to='/cart'><div><img className="cart" src={cart} alt="" /></div></NavLink>
                    <div className="cart-count rounded-circle">{getTotalCartItems()}</div>
                </div>
            </nav>
            <div onClick={() => { setmenu(false) }} className={`backdrop ${menu}`}>
                <p>&nbsp;</p>
                <aside className={`sidebar ${menu}`}>
                    <div className="list-unstyled side-menu">
                        <div className="Nav-brand">
                            <img className="logo" src={logo} alt="logo" />
                            <div className="logo-name">SHOP-CLICK</div>
                        </div>
                        <NavLink to='/' className='link'><li className=''>Shop</li></NavLink>
                        <NavLink to='/mens' className='link'><li className=''>Mens</li></NavLink>
                        <NavLink to='/womens' className='link'><li className=''>Womens</li></NavLink>
                        <NavLink to='/kids' className='link'><li className=''>Kids</li></NavLink>
                    </div>
                    <div className="close_icon" onClick={() => { setmenu(false) }}><img src={close_cart} alt="" /></div>

                </aside>
            </div>

        </div>
    )
}

export default Navbar
