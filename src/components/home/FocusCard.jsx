import React from "react";

const FocusCard = ({ name, text, icon, bgColor }) => {
  return (
    <div
      className={`flex flex-col justify-between aspect-square text-white ${bgColor} w-full !pr-0 p-8 md:p-4 lg:p-6 aspect-square animate-jump animate-duration-1000 animate-ease-out`}
    >
      <div className="flex justify-between items-start">
        {icon}

        <div className="border-b-4 border-white justify-end text-lg md:text-lg lg:text-xl leading-none font-bold flex items-end pr-8 md:pr-4 lg:pr-8 pl-4">
          {name}
        </div>
      </div>

      <div className="text-sm md:text-base lg:text-lg pr-8 md:pr-4 lg:pr-8">
        {text}
      </div>
    </div>
  );
};

export default FocusCard;
