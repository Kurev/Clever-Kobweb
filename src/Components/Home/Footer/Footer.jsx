import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {

    const yeardate = new Date().getFullYear();

  return (
    <footer className="w-full h-[100%] content-end bg-black text-white font-sans mt-auto">
      <div className="flex flex-col lg:flex-row justify-between border-b border-gray-500 px-10 py-10">
        <div className="mb-10 lg:mb-0">
          <h1 className="text-2xl font-bold text-[#ffffff] mb-2">Clever Kobweb</h1>
          <p className="text-gray-400 leading-relaxed max-w-md">
          Your dream property is our priority, guiding you home with care.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-28">
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="space-y-2 text-gray-400 cursor-pointer">
              <li className="hover:text-[#fff5b1] transition duration-500">Blog</li>
              <li className="hover:text-[#fff5b1] transition duration-500">Careers</li>
              <li className="hover:text-[#fff5b1] transition duration-500">Pricing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <ul className="space-y-2 text-gray-400 cursor-pointer">
              <li className="hover:text-[#fff5b1] transition duration-500">Documentation</li>
              <li className="hover:text-[#fff5b1] transition duration-500">Papers</li>
              <li className="hover:text-[#fff5b1] transition duration-500">Press Conferences</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <ul className="space-y-2 text-gray-400 cursor-pointer">
              <li className="hover:text-[#fff5b1] transition duration-500">Term of Service</li>
              <li className="hover:text-[#fff5b1] transition duration-500">Privacy Policy</li>
              <li className="hover:text-[#fff5b1] transition duration-500">Cookies Policy</li>
              <li className="hover:text-[#fff5b1] transition duration-500">Data Processing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-5 text-sm text-gray-400">
        <p>© {yeardate} Copyright: Demo Property Development Corporation</p>
            <div className="flex space-x-5 mt-4 md:mt-0">
                <FaFacebookSquare className="text-[#fff5b1] text-xl cursor-pointer hover:text-green-300" />
                <AiFillTikTok className="text-[#fff5b1] text-xl cursor-pointer hover:text-green-300" />
                <FaSquareInstagram className="text-[#fff5b1] text-xl cursor-pointer hover:text-green-300" />
            </div>
      </div>
    </footer>
  )
}

export default Footer