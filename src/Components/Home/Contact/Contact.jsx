import React from 'react'
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import contact from '../../../assets/contact.png';
import { HiMiniShieldCheck } from "react-icons/hi2";

const Contact = () => {
  return (
    <div className='px-[10%] h-full w-full mt-[1rem] mb-7'>
        <div>
            <h1 className='text-center font-[300] text-gray-600'>
            At Demo Property Development Corporation, our commitment to excellence extends beyond our design and construction projects. Our dedicated team of real estate professionals is here to assist you in every aspect of your property journey, from land acquisition and project feasibility studies to property management and investment strategies. With a deep understanding of the Davao City real estate market, we provide personalized guidance and tailored solutions to meet your unique needs and aspirations.
            </h1>
        </div>

        <div className='flex gap-[5rem]'>
            <div 
            className='w-[50%] h-[30rem] my-[3rem] rounded-md flex flex-col justify-center px-10 text-[1.3rem] font-[400] text-[#ffffff]'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${contact})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            
            
            >
                <div className='leading-[3rem]' >
                    <h1 className='flex items-center gap-2'><FaAddressCard className='text-[#e1f9a9]'/>DEMO ADDRESS</h1>
                    <h1 className='flex items-center gap-2'><MdEmail className='text-[#e1f9a9]'/>SUPPORT@CLEVERKOBWEB.COM</h1>
                    <h1 className='flex items-center gap-2'><FaSquarePhone className='text-[#e1f9a9]' />0923 401 8579</h1>
                </div>
                

                <div >
                    <p className='text-[1rem] text-[#ffffff73] font-[300] mt-20 flex gap-2'>
                    <HiMiniShieldCheck size={20} className='text-blue-700'/> Your Trusted Partner in Property Solutions – Let's Connect and Make Your Real Estate Goals a Reality!
                    </p>
                </div>
            </div>

            <div className='w-[50%] h-[100%] my-[0.3rem] rounded-md mt-[2.9rem]'>
                <form action="">
                    <div className='flex flex-col gap-4'>
                        <label className='block font-[600] text-[#633808]' htmlFor="">Name</label>
                        <input 
                            className='w-[100%] placeholder-[#3c3737] p-3 bg-[#EBECFE] border-2 border-transparent rounded-md focus:border-[#746732] outline-none' 
                            type="text" 
                            placeholder='Enter Your Name'/>
                        <label className='block font-[600] text-[#633808]' htmlFor="">Email</label>
                        <input 
                            className='w-[100%] placeholder-[#3c3737] p-3 bg-[#EBECFE] border-2 border-transparent rounded-md focus:border-[#746732] outline-none' 
                            type="text" 
                            placeholder='Enter Your Email'/>
                        <label className='block font-[600] text-[#633808]' htmlFor="">Phone number</label>
                        <input 
                            className='w-[100%] placeholder-[#3c3737] p-3 bg-[#EBECFE] border-2 border-transparent rounded-md focus:border-[#746732] outline-none' 
                            type="type"placeholder='(+63)111 000 1111' 
                            pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'/>
                        <label className='block font-[600] text-[#633808]' htmlFor="">Message</label>
                        <textarea
                            className='w-[100%] h-[7.5rem] placeholder-[#3c3737] p-3 bg-[#EBECFE] border-2 border-transparent rounded-md focus:border-[#746732] outline-none' 
                            name="" id="" 
                            placeholder='Enter Your Message'>

                        </textarea>
                    </div>

                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact