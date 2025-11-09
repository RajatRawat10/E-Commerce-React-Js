import React from 'react'
import data_product from '../assets/data.js'
import Item from './Item'

const RelatedProduct = () => {
    return (
        <div className='flex items-center flex-col gap-2 h-[90vh] mb-10 '>
            <h1 className='text-[#171717] text-5xl font-semibold '>Related Product</h1>
            <hr className='w-40 h-1 rounded bg-[#252525]' />
            <div className='mt-11 flex gap-6 '>
                {data_product.map((item, idx) => {
                    return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default RelatedProduct
