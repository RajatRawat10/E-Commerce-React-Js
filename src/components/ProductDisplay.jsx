import React from 'react'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props
    return (
        <div className='flex mx-35'>
            {/* left  */}
            <div className='flex gap-3.5'>
                <div className='flex flex-col gap-3.5 '>
                    <img className='h-20 w-40' src={product.image} alt="" />
                    <img className='h-20 w-40' src={product.image} alt="" />
                    <img className='h-20 w-40' src={product.image} alt="" />
                    <img className='h-20 w-40' src={product.image} alt="" />
                </div>
                <div>
                    <img className='w-260 h-130' src={product.image} alt="" />
                </div>
            </div>
            {/* right */}
            <div className='flex flex-col mx-15'>
                <h1 className='text-[#3d3d3d] text-4xl font-bold '>{product.name}</h1>
                <div className='flex items-center mt-2.5 gap-1 text-[#1c1c1c] text-lg '>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(132)</p>
                </div>
                <div className=' flex my-10 gap-5 text-2xl font-bold '>
                    {/* old price */}
                    <div className='text-[#818181] line-through '>${product.old_price} </div>
                    {/* new price */}
                    <div className='text-[#ff4141] '> ${product.new_price}</div>
                </div>
                <div>this is the product desc  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum praesentium minus omnis illo possimus rerum dolores suscipit, sed numquam ratione cumque error amet vel.</div>
                <div className='mt-13 text-[#656565] text-2xl font-semibold '>
                    <h1>Select Size</h1>
                    <div className='flex gap-5 my-6'>
                        <div className='px-5 py-3 bg-[#fbfbfb] border-[#ebebeb] cursor-pointer border rounded '>S</div>
                        <div className='px-5 py-3 bg-[#fbfbfb] border-[#ebebeb] cursor-pointer border rounded '>M</div>
                        <div className='px-5 py-3 bg-[#fbfbfb] border-[#ebebeb] cursor-pointer border rounded '>L</div>
                        <div className='px-5 py-3 bg-[#fbfbfb] border-[#ebebeb] cursor-pointer border rounded '>XL</div>
                        <div className='px-5 py-3 bg-[#fbfbfb] border-[#ebebeb] cursor-pointer border rounded '>XXL</div>
                    </div>
                </div>
                <button className='pl-3 pr-3 py-3 w-45 font-semibold text-white bg-[#ff4141] mt-10 border-none outline-0 cursor-pointer '>ADD TO CART</button>
                <p className=' mt-2'><span className='font-semibold'>Category : </span>Women , T-Shirt,Crop Top</p>
                <p><span>Tags : </span>Modern ,Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
