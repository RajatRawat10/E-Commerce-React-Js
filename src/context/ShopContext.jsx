import React from 'react'
import { createContext } from 'react'
import all_product from '../assets/all_product.js'
import { useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [CartItem, setCartItem] = useState(getDefaultCart())
    // cart item add
    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    } //cart item remove
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    // for cart total amount
    const GetTotalCartAmount = () => {
        let TotalAmount = 0;

        for (const item in CartItem) {
            if (CartItem[item] > 0) {
                let itemInfo = all_product.find(
                    (product) => product.id === Number(item)
                );
                TotalAmount += itemInfo.new_price * CartItem[item];
            }
        }
        return TotalAmount;
    };
    // narbar cart icon count
    const getTotalcartItem = () => {
        let totalitem = 0;
        for (const item in CartItem) {
            if (CartItem[item] > 0) {
                totalitem += CartItem[item];
            }
        }
        return totalitem
    }


    const contextValue = { all_product, CartItem, addToCart, removeFromCart, GetTotalCartAmount,getTotalcartItem }

    return (

        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider