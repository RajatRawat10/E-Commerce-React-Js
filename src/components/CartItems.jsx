import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import cart_cross_icon from '../assets/cart_cross_icon.png'



const CartItems = () => {
    const { all_product, CartItem, removeFromCart,GetTotalCartAmount } = useContext(ShopContext)
    return (
        <div className='mx-35 my-22'>
            <div className='grid grid-cols-6 items-center gap-15 py-5 text-[#454545] text-xl font-bold'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className='h-0.5 bg-[#e2e2e2] border-0' />
            {all_product.map((e, idx) => {
                if (CartItem[e.id] > 0) {
                    return <div key={idx}>
                        <div className='grid grid-cols-6 items-center gap-15 py-5 text-[#454545] text-lg font-semibold'>
                            <img className='h-40' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='w-14 h-10 border-2 border-[#ebebeb] bg-white'>{CartItem[e.id]}</button>
                            <p>${e.new_price * CartItem[e.id]}</p>
                            <img className='w-5.5 cursor-pointer ml-6 h-6' src={cart_cross_icon} onClick={() => {
                                removeFromCart(e.id)
                            }
                            } alt="" />
                        </div>
                        <hr className='h-0.5 bg-[#e2e2e2] border-0' />
                    </div>

                }
                return null;

            })}
            <div className='flex my-23 '>
                <div className='flex-1 flex gap-8 flex-col mr-45 '>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='flex justify-between px-3 '>
                            <p>Subtotal</p>
                            <p>${GetTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='flex justify-between px-3 '>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='flex justify-between px-3 '><h3>Total</h3>
                            <h3>${GetTotalCartAmount()}</h3></div>
                    </div>
                    <button className='uppercase w-60 h-12 outline-0 border-0 bg-[#ff5a5a] text-sm text-white font-semibold cursor-pointer'>  Proceed To Checkout </button>
                </div>
                <div className='flex flex-1 items-center flex-col font-medium'>
                    <p className='text-[#555]'>If you have a promo code, Enter it here</p>
                    <div className='w-105 mt-3 pl-5 h-11 bg-[#eaeaea]  '>
                        <input className='border-0 outline-0 bg-transparent text-lg w-70 h-11 ' type="text" placeholder='Promo Code' />
                        <button className='w-30 h-11 text-lg bg-black text-white cursor-pointer '>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
