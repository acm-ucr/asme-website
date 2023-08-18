import React from "react";
import header from "../../public/header.png"; // this image is a cropped version of the one on figma!!
import Image from "next/image";
const Header = ({ title }) => {
  return (
    <div className="w-full flex relative">
      <Image src={header} className="w-full" alt="header" />
      <div className="absolute bg-asme-transparentBlue w-1/2 md:w-2/3 my-4 p-4 bottom-0 flex items-center">
        <p className="text-2xl md:text-5xl text-white font-poppins font-bold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Header;
