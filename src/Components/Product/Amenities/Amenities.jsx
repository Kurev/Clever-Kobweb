import React from 'react'

const Amenities = () => {
  return (
    <>
      <div className="flex flex-col w-full px-[20%] py-10 gap-10">
      <div className="flex flex-wrap justify-between gap-10">
        <ul className="flex flex-col gap-4 text-center">
          <li className="bg-[#DFB145] cursor-pointer px-10 py-3 rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
            INTERIOR
          </li>
          <li className="bg-[#DFB145] cursor-pointer px-10 py-3 rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
            EXTERIOR
          </li>
        </ul>

        <ul className="flex flex-col gap-4 text-center">
          <li className="bg-[#DFB145] cursor-pointer px-10 py-3 rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
            AREA & LOT
          </li>
          <li className="bg-[#DFB145] cursor-pointer px-10 py-3 rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
            FINANCE
          </li>
        </ul>
      </div>

      <div className="flex justify-between items-center bg-gray-100 px-6 py-4 rounded-md shadow-md">
        <h1 className="text-xl font-400 text-[#45350e]">LOT AREA</h1>
        <h1 className="text-xl font-400 text-[#45350e]">500 sqm</h1>
      </div>

      
      
    </div>

        <div className='px-[10%]'>
          <div className='border-b border-[#1b1919]'>
            <h1 className='text-[2.5rem] font-[600] text-[#462d08]'>Location</h1>
            <p>Aundanao</p>
          </div>

          <div>
            <h1 className='text-[2.5rem] font-[600] text-[#462d08]'>Available Lots</h1>
          </div>
        </div>
    </>
      

  )
}

export default Amenities