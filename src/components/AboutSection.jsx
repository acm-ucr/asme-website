import React from "react";
import Title from "./Title";
import Image from "next/image";
import { FaGear } from "react-icons/fa6";
import ASME1 from "../../public/ASME1.png";
import ASME2 from "../../public/ASME2.png";

const AboutSection = () => {
  return (
    <div className="my-40">
      <Title />
      <div className="flex flex-row">
        <div className="flex flex-col w-full">
          <div>
            <p className="text-asme-blue-400 font-poppins font-bold text-4xl flex flex-row ml-24">
              {" "}
              What is ASME?{" "}
              <FaGear
                size={40}
                className="inline-flex ml-3 text-asme-blue-100"
              />
            </p>
            <div className="bg-asme-blue-400 w-72 h-2"></div>
          </div>
          <div className="w-full text-xl flex flex-col  my-16 items-center  font-poppins">
            <p className="w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <p className="text-6xl font-poppins origin-top-left mr-[1%] translate-x-full text-asme-textShadow flex font-bold whitespace-nowrap w-0 rotate-90">
          WHAT IS ASME
        </p>
      </div>
      <div className="flex flex-row 2-full justify-center gap-4">
        <Image src={ASME1} />
        <Image src={ASME2} />
      </div>
    </div>
  );
};

export default AboutSection;
