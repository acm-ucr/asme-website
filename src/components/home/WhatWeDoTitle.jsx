import React from "react";
import { FaGear } from "react-icons/fa6";

const WhatWeDoTitle = () => {
  return (
    <div className="w-11/12 flex mb-">
      <div className="flex">
        <div className="flex flex-col w-[270px]">
          <div className="bg-asme-blue-200 absolute left-20 w-[250px] h-[72px]"></div>
          <div className="bg-asme-blue-100 absolute left-16 top-3  w-[250px] h-[72px]"></div>
          <FaGear
            size={25}
            className="inline-flex ml-2 text-asme-blue-100 top-2 left-4 absolute animate-fade-right animate-ease-linear"
          />
          <text className="text-2xl bg-white text-asme-blue-400 font-poppins font-bold left-1 top-9 absolute pr-[8px] ml-8 animate-fade-right animate-ease-linear">
            What We Do
          </text>
        </div>

        <div className="flex flex-col w-40 h-32 justify-start">
          <div className="bg-asme-blue-500 h-2 w-full mb-2"></div>
          <div className="bg-asme-blue-400 h-2 w-1/2 mb-2 "></div>
          <div className="bg-asme-blue-200 h-2 w-2/3 "></div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoTitle;
