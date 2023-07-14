import React from "react";
import header from "../../public/header.png";
import Image from "next/image";
const Header = () => {
  return (
    <div className="w-full flex relative">
      <Image src={header} className="w-full" alt="header" />
      <div className="absolute bg-asme-transparentBlue w-2/3 h-[22.7%] bottom-10 flex items-center">
        <p className="text-5xl text-white font-poppins font-bold mt-12 ml-8">
          Projects
        </p>
      </div>
    </div>
  );
};

export default Header;
