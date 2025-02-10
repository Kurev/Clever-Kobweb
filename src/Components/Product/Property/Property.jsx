import React from "react";
import sample1 from "../../../assets/beach.png";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Settings from "../../../Utils/Slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Property = () => {

  const [show, setShow] = useState(false);


  const images = [sample1, sample1, sample1];

  const ShowImages = (
    <div className="bg-[#fffcfc] backdrop-blur-xs h-screen flex justify-center items-center">
      <div className="w-[50rem]">
        <div className="">
          <Slider {...Settings}>
          {images.map((image, index) => (
            <div key={index} className="h-full flex items-center justify-center">
                <img className="w-[40rem] h-[30rem] object-contain mx-auto rounded-sm" src={image} alt="Beach Property" />
            </div>
          ))}
          </Slider>
        </div>
      </div>
      
    </div>
  );

  const handleShow = () => {
    setShow(true);
  }

  return (
    <>
      {show && (
        ShowImages
        )}

      {!show && (
        <>
          <div className="w-full min-h-screen bg-[#fffffe] px-[10%] md:px-[10%] flex justify-center items-center">
          <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
            {/* Left Section */}
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-[2.5rem] md:text-[3rem] font-[400] text-[#5C4033]">
                Beachfront Location
              </h1>
              <p className="text-lg md:text-2xl text-[#8B5E3C] mt-2 md:w-[80%]">
                Stunning ocean and sky views increase property appeal.
              </p>
              <button className="mt-4 px-6 py-3 text-white bg-[#DFB145] hover:bg-[#dfb145d5] transition-all rounded-sm text-lg shadow-md">
                Vacation Rental Potential
              </button>
            </div>

            {/* Image */}
            <img
              className="w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] rounded-md shadow-lg"
              src={sample1}
              alt="Beach Property"
              onClick={handleShow}
            />

            {/* Right Section */}
            <div className="text-center md:text-left bg-[#f8f7f6] p-6 md:p-8 rounded-md  shadow-md w-full max-w-md mt-8 md:mt-0">
              <h1 className="text-3xl font-bold text-[#5C4033]">₱15,000,000.00</h1>
              <h2 className="text-xl text-[#A67B5B] font-semibold mt-2">Beachline</h2>
              <h3 className="text-lg text-[#8B5E3C]">BEACHLINE</h3>
              <p className="text-[#8B5E3C] mt-2">PROPERTY CODE: Sample Project</p>
              <button className="mt-4 w-full px-6 py-3 text-white bg-[#DFB145] hover:bg-[#dfb145d5] transition-all rounded-sm text-lg shadow-md">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-[10%] mt-[-6rem] mb-10">
          <h1 className="text-[2rem] uppercase">Description</h1>
          <p className="text-[#000000ae] text-[1rem] text-center">Beautiful scenic view of a beachfront property, likely featuring a pristine sandy beach with the ocean stretching out into the horizon. It evokes a sense of tranquility and natural beauty, with soft, warm tones of the sand and ocean contrasting against the clear blue sky.</p>
        </div>
        </>
      )}
      
    </>
    

    
  );
};

export default Property;
