"use client";
import React from "react";

const FocusCard = ({ name, text, icon, bgColor }) => {
  return (
    <div
      className={`flex flex-col justify-between aspect-square text-white ${bgColor} w-full sm:p-3 md:p-1 lg:p-3`}
    >
      <div className="flex justify-between">
        <div className="ml-4 mt-1">{icon}</div>

        <div className="mt-2 mr-4 justify-end underline decoration-4 text-2xl md:text-lg lg:text-2xl font-bold">
          {name}
        </div>
      </div>

      <div className="mb-3 ml-5 text-xl md:text-base lg:text-xl">{text}</div>
    </div>
  );
};

export default FocusCard;
