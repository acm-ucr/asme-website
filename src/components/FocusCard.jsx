import React from "react";
import { FaGears } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";

const FocusCard = () => {
  return (
    <div
      className="flex flex-wrap text-white"
      style={{ justifyContent: "center" }}
    >
      <div
        className="flex flex-col justify-between bg-asme-blue-200"
        style={{ margin: "3.5%", width: "289px", height: "289px" }}
      >
        <div className="flex justify-between">
          <div className="ml-4 mt-1">
            <FaGears size={65} />
          </div>

          <div className="underline decoration-4 mt-2 mr-4 text-2xl font-bold justify-end">
            Technical
          </div>
        </div>

        <div className="mb-3 ml-5 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </div>
      </div>

      <div
        className="flex flex-col justify-between bg-asme-blue-400"
        style={{ margin: "3.5%", width: "289px", height: "289px" }}
      >
        <div className="flex justify-between">
          <div className="ml-4 mt-1">
            <GoPeople size={65} />
          </div>

          <div className="underline decoration-4 mt-2 mr-4 text-2xl font-bold justify-end">
            Social
          </div>
        </div>

        <div className="mb-3 ml-5 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </div>
      </div>

      <div
        className="flex flex-col justify-between bg-asme-blue-600"
        style={{ margin: "3.5%", width: "289px", height: "289px" }}
      >
        <div className="flex justify-between">
          <div className="ml-4 mt-1">
            <RiComputerLine size={65} />
          </div>

          <div className="underline decoration-4 mt-2 mr-4 text-2xl font-bold">
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
