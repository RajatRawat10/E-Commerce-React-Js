import React from 'react'
import new_collections from '../assets/new_collections.js'
import Item from './Item'



const NewCollection = () => {

    return (

        <div className='flex flex-col items-center gap-4.5 mb-25'>
            <h1 className='  font-semibold text-[#171717] text-3xl'>NEW COLLECTIONS</h1>
            <hr className='w-50 h-1.5 rounded bg-[#252525] ' />
            <div className=' mt-12 grid grid-cols-4 gap-6'>
                {new_collections.map((item, idx) => {
                    return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

                })}
            </div>
        </div>

    )
}

export default NewCollection
