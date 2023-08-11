import React from "react";
import { BsGearFill } from "react-icons/bs";

const Title = ({ title }) => {
  return (
    <div className="w-fit border-b-8 border-asme-blue-400 my-10">
      <div className="flex translate-x-12 items-center">
        <div className="text-asme-blue-400 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          {title}
        </div>
        <BsGearFill className="text-asme-blue-100 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl m-3" />
      </div>
    </div>
  );
};

export default Title;
