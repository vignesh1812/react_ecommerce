import React, { useState } from "react";
import { createContext } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let Iteminfo = all_product.find((product) => product.id === cartItems[item]);
                totalAmount += Iteminfo.new_price * cartItems[item];
            }

        }
        return totalAmount;
    }
    const getTotalCartItems = () => {
        let totalitem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalitem += cartItems[item];
            }

        }
        return totalitem
    }

    const placeOrder = () => {
        if (getTotalCartItems()===0) {
            alert("Your Cart is Empty");
        }
        else{
            alert("Your Order Placed Successfully !!!");

            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    setCartItems((prev) => ({ ...prev, [item]: prev[item]*0}));
    
                }
    
            }
        }
        
    }

    const ContextValue = { placeOrder, getTotalCartItems, getTotalAmount, all_product, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;