import React from "react";
import { FaGear } from "react-icons/fa6";

const WhatWeDoSection = () => {
  return (
    <div className="flex relative top-32" style={{ height: "212px" }}>
      <div className="flex flex-col" style={{ height: "96px", width: "330px" }}>
        <div
          className="bg-asme-blue-200 absolute left-20"
          style={{ width: "250px", height: "72px" }}
        ></div>
        <div
          className="bg-asme-blue-100 absolute left-16 top-3"
          style={{ width: "250px", height: "72px" }}
        ></div>
        <FaGear
          size={25}
          className="inline-flex ml-2 text-asme-blue-100 top-2 left-4 absolute"
        />
        <text
          className="text-2xl bg-white text-asme-blue-400 font-poppins font-bold left-1 top-9 absolute"
          style={{ paddingRight: "8px" }}
        >
          What We Do
        </text>
      </div>

      <div className="flex flex-col w-40 h-32 relative">
        <div className="bg-asme-blue-500 h-2 w-full"></div>
        <div className="bg-asme-blue-400 h-2 w-1/2 top-3 absolute"></div>
        <div className="bg-asme-blue-200 h-2 w-2/3 top-6 absolute"></div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;
