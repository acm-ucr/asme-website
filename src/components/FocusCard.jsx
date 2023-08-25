"use client";
import React from "react";

const FocusCard = ({ name, text, icon, bgColor }) => {
  // note: !pr-0 is to allow the underline to fully extend to the right,
  // `sm:pr-8 md:pr-4 lg:pr-8` should be applied to any element that isn't the underline
  return (
    <div
      className={`flex flex-col justify-between aspect-square text-white ${bgColor} w-full !pr-0 p-8 md:p-4 lg:p-8 gap-16 aspect-square`}
    >
      <div className="flex justify-between items-start">
        <div>{icon}</div>

        <div className="border-b-4 border-white justify-end text-2xl md:text-lg lg:text-2xl leading-none font-bold flex items-end pr-8 md:pr-4 lg:pr-8 pl-4">
          {name}
        </div>
      </div>

      <div className="text-xl md:text-base lg:text-xl pr-8 md:pr-4 lg:pr-8">
        {text}
      </div>
    </div>
  );
};

export default FocusCard;
