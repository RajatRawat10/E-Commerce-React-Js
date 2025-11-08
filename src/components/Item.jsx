import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div  className=' w-85 hover:scale-95 transition-all duration-600'>
         
        <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /> </Link>
            <p className='mt-1.5 mb-1.5 '>{props.name}</p>
            <div className='flex gap-5'>
                <div className='text-[#374151] font-semibold text-xl'>${props.new_price}</div>
                <div className=' text-[#8c8c8c] text-xl font-medium line-through'>${props.old_price}</div>
            </div>
        </div>
    )
}

export default Item
