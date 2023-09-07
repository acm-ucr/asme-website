import React from "react";
import { BsGearFill } from "react-icons/bs";

const Title = ({ title }) => {
  return (
    <div className="w-fit border-b-4 border-asme-blue-400 my-5 md:my-10 flex items-center">
      <p className="text-asme-blue-400 text-lg lg:text-2xl font-bold mb-1 ml-3 md:ml-8">
        {title}
      </p>
      <BsGearFill className="text-asme-blue-100 text-lg md:text-xl lg:text-2xl ml-3" />
    </div>
  );
};

export default Title;
