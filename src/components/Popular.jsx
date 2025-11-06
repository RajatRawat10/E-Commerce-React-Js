import React from 'react'
import data_product from '../assets/data'
import Item from './Item'
const Popular = () => {
    return (
        <div className='flex flex-col items-center gap-2 h-[90vh]'>
            <h1 className='  font-semibold text-[#171717] text-5xl'>Popular in women</h1>
            <hr className='w-50 h-1.5 rounded bg-[#252525] ' />
            <div className='flex mt-12 gap-6'> 
                {data_product.map((item, idx) => {
                    return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                }
                )}
            </div>
        </div>
    )
}

export default Popular
