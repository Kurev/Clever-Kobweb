import React from 'react'

const Amenities = () => {
  return (
    <>
      <div className="flex flex-col w-full px-[10%] py-10 gap-10 list-none">
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <div className='flex items-center justify-center mb-4'>
              <li className="bg-[#DFB145] cursor-pointer w-[10rem] h-[3rem] flex items-center justify-center rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
                INTERIOR
              </li>
            </div>
              
            {/* <div className="w-[95%] flex justify-between items-center bg-gray-100 px-6 py-4 rounded-md shadow-md">
              <h1 className="text-xl font-400 text-[#45350e]">LOT AREA</h1>
              <h1 className="text-xl font-400 text-[#45350e]">500 sqm</h1>
            </div> */}
          </div>
          
          <div className='w-1/2'>
            <div className='flex items-center justify-center mb-4'>
              <li className="bg-[#DFB145] cursor-pointer w-[10rem] h-[3rem] flex items-center justify-center rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
                EXTERIOR
              </li>
            </div>
            {/* <div className='flex justify-end'>
              <div className="w-[95%] flex justify-between items-center bg-gray-100 px-6 py-4 rounded-md shadow-md ml-5">
                <h1 className="text-xl font-400 text-[#45350e]">LOT AREA</h1>
                <h1 className="text-xl font-400 text-[#45350e]">500 sqm</h1>
              </div>
            </div> */}
           
            
          </div>
          
          
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2'>
            <div className='flex items-center justify-center mb-4'>
              <li className="bg-[#DFB145] cursor-pointer w-[10rem] h-[3rem] flex items-center justify-center rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
                AREA & LOT
              </li>
            </div>
              
            <div className="w-[95%] flex justify-between items-center bg-gray-100 px-6 py-4 rounded-md shadow-md">
              <h1 className="text-xl font-400 text-[#45350e]">LOT AREA</h1>
              <h1 className="text-xl font-400 text-[#45350e]">500 sqm</h1>
            </div>
          </div>
          
          <div className='w-1/2'>
            <div className='flex items-center justify-center mb-4'>
              <li className="bg-[#DFB145] cursor-pointer w-[10rem] h-[3rem] flex items-center justify-center rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
                FINANCE
              </li>
            </div>
            {/* <div className='flex justify-end'>
              <div className="w-[95%] flex justify-between items-center bg-gray-100 px-6 py-4 rounded-md shadow-md ml-5">
                <h1 className="text-xl font-400 text-[#45350e]">LOT AREA</h1>
                <h1 className="text-xl font-400 text-[#45350e]">500 sqm</h1>
              </div>
            </div> */}
           
            
          </div>
          
          
        </div>














      {/* <div className="flex flex-wrap justify-between gap-10">
        <ul className="flex flex-col gap-4 text-center bg-red-500">
          <li className="bg-[#DFB145] cursor-pointer px-10 py-3 rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
            INTERIOR
          </li>
          <li className="bg-[#DFB145] cursor-pointer px-10 py-3 rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
            AREA & LOT
          </li>

          <div className="w-full flex justify-between items-center bg-gray-100 px-6 py-4 rounded-md shadow-md">
            <h1 className="text-xl font-400 text-[#45350e]">LOT AREA</h1>
            <h1 className="text-xl font-400 text-[#45350e]">500 sqm</h1>
          </div>
        </ul>

        <ul className="flex flex-col gap-4 text-center">
          <li className="bg-[#DFB145] cursor-pointer px-10 py-3 rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
            EXTERIOR 
          </li>
          <li className="bg-[#DFB145] cursor-pointer px-10 py-3 rounded-sm text-white font-400 shadow-md hover:bg-[#d88c42] transition">
            FINANCE
          </li>
          
        </ul>
      </div> */}

      

      
      
    </div>
      <div className=''>
        <div className='px-[10%] leading-[4rem]'>
          <div className='border-b border-[#1b191964]'>
            <h1 className='text-[2.5rem] font-[400] text-[#462d08]'>Location</h1>
            <p>Aundanao</p>
          </div>

          <div className='border-b border-[#1b191964] leading-[7rem]'>
            <h1 className='text-[2.5rem] font-[400] text-[#462d08]'>Available Lots</h1>
          </div>
        </div>
      </div>
        
    </>
      

  )
}

export default Amenities