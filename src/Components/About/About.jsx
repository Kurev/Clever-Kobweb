import React from 'react';
import about from '../../assets/about.png';

const About = () => {
    return (
        <div className="w-full h-[30rem] bg-[#EFF1F3] flex justify-between px-[10%]">
            <div className='mt-7'>
                 <h1 className='text-2xl text'>About Us</h1>
                <h1 className='text-[3.5rem] uppercase font-[400] text-[#836954] leading-[4rem]'>Demo property development corporation</h1>
                <h1 className='text-[1.5rem] uppercase mt-5 mb-3'>Transforming the Davao City Landscape</h1>
                <p className='w-[40rem] text-[1rem] text-[#000000aa]'>As a leading real estate developer in Davao City, Demo Property Development Corporation is committed to crafting exceptional living spaces that redefine urban lifestyles. With a focus on innovation, sustainability, and community-centric design, we transform dreams into reality, one project at a time.</p>
            </div>

            <div className='w-[30rem] h-[20rem] mt-7'
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${about})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
            }}

            >
                <h1>Hello</h1>
            </div>
           
        </div>
    );
};

export default About;