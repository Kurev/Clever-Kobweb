import React from 'react';
import heroImage from '../../assets/hero2.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-between flex-col px-[10%]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), 
        rgba(0, 0, 0)), 
        url(${heroImage})`,
      }}
    >
        <div className="text-white text-center flex flex-col justify-center items-center h-screen mt-[10rem]">
            <h1 className="text-4xl font-bold uppercase mb-4">Demo property development Corporation</h1>
            <p className="text-2xl uppercase mb-4">your trusted real estate developer</p>
            <div className='flex justify-center'>
                <button className="bg-black py-3 px-5 rounded-[10px] flex items-center gap-2">
                    View Project
                    <IoIosArrowRoundForward size={24} />
                </button>
            </div>
            
        </div>

        <div className="w-full h-[10rem] flex justify-center items-center flex-col mb-3">
          <h1 className="text-[#ffffffb5] font-semibold text-lg">Trusted</h1>
          <ul className='text-[#ffffff68] flex justify-between mt-8 w-full'>
              <li className='flex items-center gap-2 text-1xl cursor-pointer hover:text-white transition duration-500 hover:text-shadow-glow'>
                  <p><IoLogoFacebook /></p>
                  <h1>Facebook</h1>
              </li>
              <li className='flex items-center gap-2 text-1xl cursor-pointer hover:text-white transition duration-500 hover:text-shadow-glow'>
                  <p><BiLogoGmail /></p>
                  <h1>Gmail</h1>
              </li>
              <li className='flex items-center gap-2 text-1xl cursor-pointer hover:text-white transition duration-500 hover:text-shadow-glow'>
                  <p><FaInstagramSquare /></p>
                  <h1>Instagram</h1>
              </li>
              <li className='flex items-center gap-2 text-1xl cursor-pointer hover:text-white transition duration-500 hover:text-shadow-glow'>
                  <p><AiFillTikTok /></p>
                  <h1>Tiktok</h1>
              </li>
          </ul>
      </div>
    </div>
  );
};

export default Hero;
