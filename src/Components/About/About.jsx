import React from 'react';
import about from '../../assets/about.png';
import { FaFire } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";


const About = () => {
    return (
        <div className="w-full h-[30rem] bg-[#EFF1F3] flex justify-between px-[10%]">
            <div className='mt-9'>
                 <h1 className='text-2xl text'>About Us</h1>
                <h1 className='text-[3.5rem] uppercase font-[400] text-[#836954] leading-[4rem]'>Demo property development corporation</h1>
                <h1 className='text-[1.5rem] uppercase mt-5 mb-3'>Transforming the Davao City Landscape</h1>
                <p className='w-[40rem] text-[1rem] text-[#000000aa]'>As a leading real estate developer in Davao City, Demo Property Development Corporation is committed to crafting exceptional living spaces that redefine urban lifestyles. With a focus on innovation, sustainability, and community-centric design, we transform dreams into reality, one project at a time.</p>
            </div>

            <div className='w-[30rem] h-[25rem] mt-9 rounded-md'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${about})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
            }}

            >
                <div className='flex justify-center items-center flex-col text-white h-full w-full'>
                    <h1 className='text-4xl font-bold mb-6'>Clever KobWeb</h1>
                    <h1 className='text-1.8xl font-[100] mb-3 flex items-center gap-3'>10 Branches Nationwide <p className='text-[#2c77f9]'><BiWorld /></p></h1>
                    <h1 className='text-1.5xl font-[100] mb-[5rem] flex items-center gap-3'>900k Revenues <p className='text-[#fe3002]'><FaFire /></p></h1>
                    <button className='p-3 bg-[#cd9020] text-[#000] rounded-md font-semibold'>GET NOW</button>
                </div>
            </div>
           
        </div>
    );
};

export default About;