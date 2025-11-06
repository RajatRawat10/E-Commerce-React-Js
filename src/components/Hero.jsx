import React from 'react'
import hand_icon from "../assets/hand_icon.png";
import arrow from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";


const Hero = () => {
    return (
        // this is hero main
        <div className='h-screen flex bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22]/60 to-[#e1ffea22]  '>
            {/* hero left */}
            <div className='flex flex-col justify-center gap-5 pl-45 leading-1.1'>
                <h2 className='text-[#090909] uppercase text-2xl font-semibold'>New Arrivals Only</h2>
                <div>
                    <div className='flex justify-start gap-4'>
                        <p className='text-[#171717] text-7xl font-semibold'>new</p>
                        <img className='w-22' src={hand_icon} alt="" />
                    </div>
                    <p className='text-[#171717] text-7xl font-semibold'>collection </p>
                    <p className='text-[#171717] text-7xl font-semibold'>for everyone</p>
                </div>
                <div className='bg-[#ff4141] justify-center items-center flex rounded-full gap-3.5 w-70 h-13 mt-6  '>
                    <div className='text-white text-xl font-medium'> Latest Collection</div>
                    <img src={arrow} alt="" />
                </div>
            </div>
            {/* hero right */}
            <div className='flex-<1> ml-22 flex items-center justify-center'>
                <img className='w-[500px]' src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
