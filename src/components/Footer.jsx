import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'


const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-12'>
            <div className='flex item gap-5 '>
                <img src={footer_logo} alt="" />
                <p className='text-[#383838] font-bold text-4xl'>ClickNShop</p>
            </div>
            <ul className='flex list-none gap-12 text-[#252525] text-xl'>
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Product</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className='flex gap-5'>
                <div className='p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb] '>
                    <img src={instagram_icon} alt="" />
                </div>
                <div className='p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]'>
                    <img src={pintester_icon} alt="" />
                </div>
                <div className='p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]'>
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center gap-6 w-full text-2xl mb-6 text-[#1a1a1a]'>
                <hr className='w-[80% ] border-0 rounded-xl h-1 bg-[#c7c7c7]' />
                <p>Copyright @ 2025 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
