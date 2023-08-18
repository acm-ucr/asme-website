import React from "react";
import { FaGear } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="relative bg-header bg-cover py-3 h-[400px] md:h-[700px] w-full justify-end flex items-stretch">
      <div className="absolute bottom-0 left-5 md:left-0 bg-white w-1/3 my-4 md:translate-x-1/2 shadow-[1rem_-1rem_0_0] shadow-asme-blue-400 z-10">
        <Image
          className="m-auto animate-fade-up animate-delay-[600ms]"
          src="/logo.png"
          width={456}
          height={187}
          alt="logo"
        />
      </div>
      <div className="animate-fade-up animate-delay-[100ms] animate-once flex flex-col items-end text-white font-poppins bg-asme-transparentBlue w-11/12 md:w-2/3 mt-24 md:mt-32 mb-12 pr-4 justify-center">
        <p className="animate-fade-up animate-delay-[300ms] animate-once text-right font-bold text-lg md:text-4xl w-11/12 border-r-8 border-asme-blue-100 m-0 pr-2">
          American Society of Mechanical Engineers at UCR (ASME)
        </p>
        <div className="animate-fade-up animate-delay-[300ms] animate-once flex items-center w-3/5 md:w-4/5 gap-2">
          <FaGear />
          <div className="border-white border-2 border-solid w-full h-0 top-1/2"></div>
        </div>
        <p className="animate-fade-up animate-delay-[500ms] animate-once text-right font-abel text-sm md:text-2xl m-0">
          ASME seeks to develop well-rounded engineers at UC Riverside that are
          experienced and ready for the real-world
        </p>
        <div className="mt-4 animate-fade-up animate-delay-[700ms] animate-once">
          <Link
            href=""
            className="no-underline font-poppins border-white border-2 border-solid px-4 md:py-2 text-sm md:text-lg hover:bg-white/50 text-white hover:text-asme-blue-400 hover:scale-110 transition duration-200 ease-in-out"
          >
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
