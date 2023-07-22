import React from "react";
import { BsGearFill } from "react-icons/bs";

const Title = () => {
  return (
    <div>
      <div>
        <div className="flex relative mt-[681px] mr-[800px] ml-[90px]">
          <div className="text-asme-blue-400 text-4xl font-bold w-[278px] h-[60px]">
            What is ASME?
          </div>

          <div className="text-asme-blue-200">
            <BsGearFill size={45} />
          </div>
        </div>
      </div>

      <div className="mb-20">
        <div className="bg-asme-blue-400 w-[297px] h-[7px]"></div>
      </div>

      <div>
        <div className="flex relative mt-[1121px] mr-[800px] ml-[90px]">
          <div className="text-asme-blue-400 text-4xl font-bold w-[243px] h-[60px]">
            How To Join
          </div>

          <div className="text-asme-blue-200">
            <BsGearFill size={45} />
          </div>
        </div>
      </div>

      <div className="mb-20 relative">
        <div className="bg-asme-blue-400 w-[297px] h-[7px] "></div>
      </div>
    </div>
  );
};

export default Title;
