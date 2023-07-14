import React from "react";
import JoinCard from "./JoinCard.jsx";

const JoinUsSection = () => {
  return (
    <div className="m-[5%] relative">
      <div className="bg-asme-blue-100 w-[30%] h-20 shadow-[1rem_-0.7rem_0_0] shadow-asme-blue-200 relative">
        <div className="h-32 absolute left-6">
          <div className="bg-asme-blue-200 w-2 h-3/5 inline-block left-0 top-0 absolute "></div>
          <div className="bg-asme-blue-400 w-2 h-2/5 inline-block left-3 top-0 absolute "></div>
          <div className="bg-asme-blue-500 w-2 h-full inline-block left-6 top-0 absolute "></div>
        </div>
      </div>
      <div className="bg-white absolute left-0 -top-7 pb-0 text-asme-blue-400 font-poppins font-bold text-2xl">
        <p className=" pl-5 pr-16 my-0">Join Us</p>
      </div>
      <JoinCard />
    </div>
  );
};

export default JoinUsSection;
