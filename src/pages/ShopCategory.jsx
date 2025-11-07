import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item'

const ShopCategory = (props) => {
 
  const { all_product } = useContext(ShopContext)
  return (
    <div>
      <img className='block mt-6 mb-6 m-auto w-[82%]' src={props.banner} alt="" />
      <div className='flex items-center justify-between ml-40 mr-40 '>
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className=' rounded-2xl pt-2.5 pb-2.5 pl-5 pr-5 border border-[#888888]'>Sort by <img src={dropdown_icon} alt="" /></div>
      </div>
      <div className='mt-5 mb-5 grid grid-cols-4 gap-10'>
        {all_product.map((item, idx) => {
          if (props.category === item.category) {
            return <Item key={idx} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }else{
            return null;
          }
        }  )}

      </div>
<div className='flex justify-center items-center mt-30 mb-30 m-auto w-50 h-12 bg-[#ededed] text-[#787878] text-xl font-medium  rounded-3xl'>
  Explore More
</div>
    </div>
  )
}

export default ShopCategory
