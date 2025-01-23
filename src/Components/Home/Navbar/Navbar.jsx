import React from 'react'
import logo from '../../../assets/logo1.png'

const Navbar = () => {
  return (
    <div className='flex w-full z-10 bg-[#1A1A1A] text-white justify-between items-center px-[10%] py-[8px] fixed top-0 left-0 '>
        <div className='flex items-center'>
            <img className='w-[6rem] h-[3.3rem] cursor-pointer object-cover' src={logo} alt="Clever Kobweb" />
            <div>
                <h1 className='text-[1rem] font-bold'>Clever Kobweb</h1>
                <p className='text-[0.6rem] text-[#ffffff72]'>Weaving Intelligent Web Solutions</p>
            </div>
        </div>
        <ul className='flex gap-20 cursor-pointer font-[300] '>
            <li className='hover:outline hover:outline-1 hover:outline-white p-2 rounded-sm'>Home</li>
            <li className='hover:outline hover:outline-1 hover:outline-white p-2 rounded-sm'>Projects</li>
            <li className='hover:outline hover:outline-1 hover:outline-white p-2 rounded-sm'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar