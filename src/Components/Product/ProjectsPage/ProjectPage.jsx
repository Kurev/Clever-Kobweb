import React from 'react'
import sample from '../../../assets/sampleProject.png'
import { BsArrowLeftSquare } from "react-icons/bs";
import { BsArrowRightSquare } from "react-icons/bs";
import { Link } from 'react-router-dom';


const ProjectPage = () => {
  return (
    
        <div className='bg-[#F7F7F7] w-full h-[50%] flex flex-col justify-self-end mt-[4rem] px-[10%] border-b border-[#00000026]'>
            <div className='w-full text-center py-[3rem] flex flex-col items-center'>
                <h1 className='text-[#57411e] text-[3rem] font-[400] uppercase'>Projects</h1>
                <p className='text-[#00000055] text-[1rem] font-semibold'>Description</p>
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
                        <Link to='/view'>
                            <button className="mt-4 w-full bg-[#dfb145] text-white py-2 rounded hover:bg-[#dfb145ab]">
                            View
                            </button>
                        </Link>
                        
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

export default ProjectPage