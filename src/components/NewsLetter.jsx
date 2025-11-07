import React from 'react'

const NewsLetter = () => {
  return (
    <div className='h-[40vh] w-[65%] flex flex-col items-center justify-center m-auto pl-35 pr-35 mb-35 gap-7 bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22]/60 to-[#e1ffea22]'>
      <h1 className='text-[#454545] font-semibold text-5xl'>Get Exclusive Offers On Your Email</h1>
      <p className='text-[#454545] text-xl'>Subscribe to our news letter and stay updated</p>
      <div className='flex items-center justify-between bg-white w-180 h-15 rounded-full border border-[#e3e3e3]'> 
        <input className='ml-7 w-120 border-none outline-none text-[#616161] Poppins text-lg' type="email" placeholder='Enter Email id' />
        <button className=' w-50 h-17 rounded-2xl bg-black text-white text-lg cursor-pointer'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
