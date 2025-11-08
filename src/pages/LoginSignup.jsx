import React from 'react'

const LoginSignup = () => {
  return (
    <div className='py-10 w-full bg-[#fcfcfc] pt-20'>
      <div className='w-138 h-145 bg-white m-auto py-7 px-12'>
        <h1 className='my-5 text-xl font-medium'>Sign Up</h1>
        <div className='flex flex-col gap-6 mt-6'>
          <input className='h-15 w-full pl-5 border border-[#c9c9c9] outline-0 text-[#5c5c5c] text-xl ' type="text" placeholder='Your Name' />
          <input className='h-15 w-full pl-5 border border-[#c9c9c9] outline-0 text-[#5c5c5c] text-xl ' type="email" placeholder='Email Address' />
          <input className='h-15 w-full pl-5 border border-[#c9c9c9] outline-0 text-[#5c5c5c] text-xl ' type="password" placeholder='Password' />
        </div>
        <button className='w-110 h-15 text-white bg-[#ff4141] mt-6 m-auto border-0 text-xl font-semibold cursor-pointer active:scale-105 '>Continue</button>
        <p className='mt-5 text-xl text-[#5c5c5c] font-semibold'>Already have an account? <span className='text-[#ff4141] font-semibold '>Login Here</span></p>
        <div>
          <input type="checkbox" name='' id='' />
          <p className='flex itme mt-5 gap-4 text-[#5c5c5c] text-lg font-semibold'>by continuing, i agree to the term of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
