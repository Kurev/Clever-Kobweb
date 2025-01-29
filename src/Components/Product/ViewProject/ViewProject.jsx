import React from 'react'
import sample from '../../../assets/sampleProject.png'
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";

const ViewProject = () => {
  return (
    <div className='bg-[#F7F7F7] w-full h-[50%] flex flex-col justify-self-end mt-[4rem] px-[10%] border-b border-[#00000026]'>
                <div className='w-full text-center py-[3rem] flex flex-col items-center'>
                    <h1 className='text-[#57411e] text-[3rem] font-[400] uppercase'>Sample Project</h1>
                    <h1 className='text-[#57411e] text-[1,5rem] font-[400] uppercase'>Project Selling</h1>
                    <p className='text-[#00000055] text-[1rem] font-semibold'>Description</p>
                </div>

                
                <div>
                    <div className='w-full flex justify-end mb-4'>
                        <p>Filter View Type</p>
                    </div>
                    <div className='w-full flex justify-end'>
                        <div className='flex'> 
                            <button className='bg-[#75593a] py-3 px-5 text-[#ffff] hover:bg-[#755a3ab9]'>Listing View</button>
                            <button className='bg-[#312517] py-3 px-5 text-[#ffff] hover:bg-[#312517d6]' >Map View</button>
                        </div>
                            
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6 mt-9 p-4 bg-white shadow-md rounded-lg">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-lg font-semi mb-2">Search Location</h1>
                        <input
                        type="text"
                        placeholder="Enter location..."
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full md:w-1/3">
                        <h1 className="text-lg font-semi mb-2">Filter Property Data Type</h1>
                        <input
                        type="text"
                        placeholder="Enter property type..."
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="w-full md:w-1/3">
                        <h1 className="text-lg font-semi mb-2">Filter Price Range</h1>
                        <select
                            className="w-full p-2 text-[#A9A3AF] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option>Select A Price Range</option>
                            <option>Below 1m</option>
                            <option>1m to 2.9m</option>
                            <option>3m to 4.9m</option>
                            <option>5m to 6.9m</option>
                            <option>7m above</option>
                        </select>
                    </div>
                </div>
                

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
    
                    <div className='flex justify-center gap-3 mb-4 items-center'>
                        <BsArrowLeftSquare size={25} className='cursor-pointer'/>
                        <button className='bg-[#423114] text-[#ffff] py-2 px-5 rounded-md'>1</button>
                        <BsArrowRightSquare size={25} className='cursor-pointer'/>
                    </div>
            </div>
  )
}

export default ViewProject