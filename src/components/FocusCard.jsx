import React from "react";
import { FaGears } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";

const FocusCard = () => {
  return (
    <div className="flex flex-wrap justify-center text-white">
      <div className="flex flex-col justify-between m-[3.5%] w-[289px] h-[289px] bg-asme-blue-200">
        <div className="flex justify-between">
          <div className="ml-4 mt-1">
            <FaGears size={65} />
          </div>

          <div className="mt-2 mr-4 justify-end underline decoration-4 text-2xl font-bold">
            Technical
          </div>
        </div>

        <div className="mb-3 ml-5 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </div>
      </div>

      <div className="flex flex-col justify-between m-[3.5%] w-[289px] h-[289px] bg-asme-blue-400">
        <div className="flex justify-between">
          <div className="ml-4 mt-1">
            <GoPeople size={65} />
          </div>

          <div className="mt-2 mr-4 justify-end underline decoration-4 text-2xl font-bold">
            Social
          </div>
        </div>

        <div className="mb-3 ml-5 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </div>
      </div>

      <div className="flex flex-col justify-between m-[3.5%] w-[289px] h-[289px] bg-asme-blue-600">
        <div className="flex justify-between">
          <div className="ml-4 mt-1">
            <RiComputerLine size={65} />
          </div>

          <div className="mt-2 mr-4 justify-end underline decoration-4 text-2xl font-bold">
            Professional
          </div>
        </div>

        <div className="mb-3 ml-5 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </div>
      </div>
    </div>
  );
};

export default FocusCard;
