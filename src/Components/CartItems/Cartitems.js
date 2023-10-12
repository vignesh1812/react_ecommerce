import React, { useContext } from 'react';
import "./Cartitems.css";
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const Cartitems = () => {
    const { placeOrder, getTotalAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="mobile-view">
                <div className="cartitems-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {all_product.map((e) => {

                    if (cartItems[e.id] > 0) {
                        return <div>
                            <div key={e.id} className="cartitems-format-main cartitems-format">
                                <img src={e.image} className='carticon-product-icon' alt="" />
                                <p>{e.name}</p>
                                <p>₹{e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>₹{e.new_price * cartItems[e.id]}</p>
                                <img src={remove_icon} className='remove_icon' onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    }
                    return null;

                })}
            </div>
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h3>Cart Total</h3>
                    <div>

                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>₹{getTotalAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>₹{getTotalAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={() => { placeOrder() }} className='cartitems-total-button'>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promocode, Enter it Here</p>
                    <div className="cartitems-promobox">
                        <input type="text" name="" id="" />
                        <button>submit</button>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Cartitems