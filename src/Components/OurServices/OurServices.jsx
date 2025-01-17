import React from 'react';
import { GiHouse } from "react-icons/gi";
import { LuSignalHigh } from "react-icons/lu";
import { TbHomeShield } from "react-icons/tb";
import { FaHandshake } from "react-icons/fa6";

const OurServices = () => {
    const services = [
        {
            icon: <GiHouse size={40} className="text-[#e4c144]" />,
            title: "Sell Your Home",
            description: "Sell Your House Fast at the Best Market Value!",
        },
        {
            icon: <TbHomeShield size={40} className="text-[#e4c144]" />,
            title: "Free Evaluation",
            description: "Maximize Your Sale with a Free Home Assessment!",
        },
        {
            icon: <LuSignalHigh size={40} className="text-[#e4c144]" />,
            title: "Buy Your Home",
            description: "Turn Your Homeownership Dream into Reality!",
        },
        {
            icon: <FaHandshake size={40} className="text-[#e4c144]" />,
            title: "Legal Services",
            description: "Protect Your Investment with Professional Legal Guidance!",
        },
    ];

    return (
        <div className="px-[10%] w-full py-20 bg-[#f7f7f7]">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center transition transform hover:scale-105"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h2 className="text-lg font-bold text-[#58441d] mb-2">{service.title}</h2>
                        <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;
