import React, { useContext, useState } from 'react'
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';


const Navbar = () => {
  const [menu, setMenu] = useState("Shop")
  const { getTotalcartItem } = useContext(ShopContext)
  
  return (
    <div className='flex items-center p-4  justify-between'>
      <div className='flex gap-2.5 items-center'>
        <img src={logo} alt="" />
        <p className='text-2xl font-medium text-[#171717]'>ClickNShop</p>
      </div>
      <div>
        <ul className='flex list-none items-center row gap-6 text-[#626262] font-medium text-xl'>
          <li
            onClick={() => setMenu("shop")}
            className="cursor-pointer"
          >
            <Link to='/'>Shop</Link>
            {menu === "shop" ? <hr className="border-none w-[80%] h-1 rounded bg-[#ff4141]" /> : <></>
            }
          </li>

          <li onClick={() => {
            setMenu("Mens")
          }
          } className='cursor-pointer'>
            <Link to='/mens'>Mens</Link>

            {menu === "Mens" ? <hr className="border-none w-[80%] h-1 rounded bg-[#ff4141]" /> : <></>
            }
          </li>


          <li onClick={() => {
            setMenu("Womens")
          }
          } className='cursor-pointer'>
            <Link to='/womens'>Womens</Link>

            {menu === "Womens" ? <hr className="border-none w-[80%] h-1 rounded bg-[#ff4141]" /> : <></>
            }
          </li>


          <li onClick={() => {
            setMenu("Kids")
          }
          } className='cursor-pointer'>
            <Link to='/kids'>Kids</Link>

            {menu === "Kids" ? <hr className="border-none w-[80%] h-1 rounded bg-[#ff4141]" /> : <></>
            }
          </li>
        </ul>
      </div>
      <div className='flex row gap-6'>
        <Link to='/login'>  <button className='w-18 h-11  rounded outline-none font-light bg-white cursor-pointer active:scale-95 border text-xl border-[#7a7a7a]'>login</button></Link>
        <Link to='/cart'> <img src={cart_icon} alt="" /> </Link>
        <div className='w-5 h-5 flex items-center justify-center rounded-full -ml-10 bg-red-500 text-white'>{getTotalcartItem()}</div>

      </div>
    </div>
  )
}

export default Navbar
