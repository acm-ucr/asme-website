import React from "react";
import { FaGear } from "react-icons/fa6";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="relative bg-header bg-cover py-3 h-[700px]">
      <div className="absolute bottom-0 left-5 md:left-0 bg-white w-1/3 my-4 md:translate-x-1/2 shadow-[1rem_-1rem_0_0] shadow-asme-blue-400">
        {/* <div className="bg-logo bg-contain bg-no-repeat bg-center h-full w-full"></div> */}
        <Image
          className="m-auto"
          src="/logo.png"
          width={456}
          height={187}
          alt="logo"
        />
      </div>
      <div className="flex flex-row-reverse">
        <div className="flex flex-col items-end gap-2 right text-white font-poppins bg-asme-transparentBlue md:w-2/3 pr-10 md:pr-20 py-5 pl-1 md:pl-[20%] w-4/5 mt-[10%]">
          <h1 className="relative text-right font-bold">
            American Society of Mechanical Engineers at UCR (ASME)
            <div className="absolute bg-blue-100 right-[-1.5rem] top-0 w-[0.5rem] h-[3em]"></div>
          </h1>
          <div className="flex items-center w-3/5 md:w-4/5 gap-2">
            <FaGear></FaGear>
            <div className="border-white border-2 border-solid w-full h-0 top-1/2"></div>
          </div>
          <p className="text-right font-abel w-3/5 md:w-4/5">
            ASME seeks to develop well-rounded engineers at UC Riverside that
            are experienced and ready for the real-world
          </p>
          <div>
            <button className="right font-poppins border-white border-2 border-solid px-4 py-2">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
