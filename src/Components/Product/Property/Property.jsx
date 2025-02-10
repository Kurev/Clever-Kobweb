import React from "react";
import sample1 from "../../../assets/beach.png";
import sample2 from "../../../assets/about1.png";
import sample3 from "../../../assets/contact.png";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import Settings from "../../../Utils/Slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Property = () => {

  const [show, setShow] = useState(false);


  const images = [sample1, sample2, sample3];

  const ShowImages = (
    <div className="flex justify-center items-center mr-9">
      <div className="w-[45rem] flex justify-center items-center">
        <div className="w-full ">
          <Slider {...Settings}>
          {images.map((image, index) => (
            <div key={index} className="">
                <img className="w-[30rem] h-[30rem] object-contain mx-auto rounded-md" src={image} alt="Beach Property" />
            </div>
          ))}
          </Slider>
        </div>
      </div>
      
    </div>
  );


  return (
    
        <>
          <div className="w-full h-screen bg-[#fffffe] px-[10%] flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center  w-full max-w-6xl">
              {ShowImages}
              <div>
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
        </div>
        
        <div className="w-full px-[10%] mt-[-6rem] mb-10">
          <h1 className="text-[2rem] uppercase text-[#664816]">Description</h1>
          <p className="text-[#000000ae] text-[1rem] ">Imagine a breathtaking beachfront property nestled along a pristine coastline, where the golden sands stretch endlessly beneath the soft embrace of the sun’s warm rays. The gentle waves of the turquoise ocean roll rhythmically onto the shore, their foamy white crests dissolving seamlessly into the shimmering sand. A light ocean breeze carries the salty scent of the sea, mingling with the delicate fragrance of tropical flora that lines the edges of the property.</p>
        </div>
        </>
    
  );
};

export default Property;
