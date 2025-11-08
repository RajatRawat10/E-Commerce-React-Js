import React from 'react'
import breadcrum_arrow from '../assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  
  return (
    <div className='flex items-center gap-2 text-[#5e5e5e] text-lg font-semibold my-12 mx-40 capitalize'>
      HOME <img src={breadcrum_arrow} alt="" /> SHOP <img src={breadcrum_arrow} alt="" /> {product.category} <img src={breadcrum_arrow} alt="" /> {product.name} 
    </div>
  )
}

export default Breadcrum
