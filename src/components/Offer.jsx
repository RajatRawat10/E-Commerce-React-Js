import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'





const Offer = () => {
    return (
        <div className='w-[65%] h-[60vh] flex m-auto mt-[50px] pr-30 pl-30 mb-35 bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22]/60 to-[#e1ffea22]'>
            {/* offer right  */}
            <div className=' flex basis-<1> flex-col justify-center'>
                <h1 className='text-[#171717] text-7xl font-semibold'>Exclusive</h1>
                <h1 className='text-[#171717] text-7xl font-semibold'>Offers For You</h1>
                <p className='text-[#171717] text-2xl font-semibold'>ONLY ON BEST SELLER PRODUCT</p>
                <button className='w-70 h-17 rounded bg-[#ff4141] border-none text-white text-xl font-medium cursor-pointer mt-7'>Check Now </button>
            </div>
            {/* offer left */} 
            <div className='flex items-center pt-12  justify-end-safe'>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offer