import React from 'react'
import building from '../../../assets/building1.png'
import sample from '../../../assets/sampleProject.png'
import { IoIosArrowRoundForward } from "react-icons/io";

const LatestProject = () => {
  return (
    <>
    <div>
      <div className='w-full flex flex-col px-[10%] py-[2.5rem] bg-[#e4c14496]'>
        <div className='flex '>
          <div className='max-w-[50rem]'>
            <h1 className='text-[1.3rem] font-semibold text-[#403612] uppercase'>
                The latest real estate web project offers a user-friendly and responsive platform.
            </h1>
            <p className='text-[#00000090] text-[0.9rem] mt-4 '>
                Our portfolio showcases a diverse range of projects, each meticulously designed to meet the evolving needs of Davao City residents. From elegant condominiums to thoughtfully planned subdivisions, we strive to create spaces that not only provide comfort and functionality but also foster a sense of belonging and well-being..
            </p>
            <div className='flex flex-col items-left mt-1 w-full '>
            <div className='flex mt-6 gap-6'>
              <button className='px-3 py-[0.5rem] bg-[#393212] font-[400] rounded-sm text-white'>Property</button>
              <button className='px-3 py-[0.5rem] bg-[#393212] font-[400] rounded-sm text-white' >Invesment</button>
              <button className='px-3 py-[0.5rem] bg-[#393212] font-[400] rounded-sm text-white' >Housing</button>
            </div>
          </div>
          </div>
          <div className='flex place-items-center justify-end pl-[6rem] w-full'>
            <img className='w-[20rem] h-[13rem] object-cover rounded-md cursor-pointer' src={building} alt="" />
          </div>
        </div>
      
      </div>

      <div className='bg-[#F7F7F7] w-full flex justify-self-end px-[10%] border-b border-[#00000026]'>
        <div className='py-[3rem] w-full'>
          <div className=" max-w-[25rem] bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={sample}
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h1 className="text-xl font-bold text-gray-800">Sample Project</h1>
                <h2 className="text-lg text-gray-600 mt-1">Project Selling</h2>
                <p className="text-gray-600 mt-2">
                  Sample
                </p>
                <button className="mt-4 w-full bg-[#dfb145] text-white py-2 rounded hover:bg-[#dfb145ab]">
                  View
                </button>
              </div>
            </div>
        </div>

        <div className='w-full flex justify-center h-full mt-[3rem]'>
          <button className='bg-[#483c32] px-[2rem] py-[1rem] text-white rounded-[0.3rem] flex items-center gap-2 hover:bg-[#483c32cf]'>View Projects <IoIosArrowRoundForward size={24} /></button>
        </div>
      </div>
    </div>
      
    </>
    
  )
}

export default LatestProject