import React from "react";
import logo from "../../public/logo-white.svg";
import Image from "next/image";
import { FaEnvelope, FaLink, FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full flex bg-gradient-to-b from-asme-blue-600 to-[#2E5678] h-60 relative">
        <Image
          alt="logo"
          src={logo}
          className=" w-1/3 lg:w-1/6 absolute bottom-0"
        />
        <div className="flex flex-row h-1/2 absolute right-4 lg:right-8 bottom-4">
          <div className="flex flex-col h-full justify-end items-end">
            <p className="text-white m-0 text-xl lg:text-3xl">contact us</p>
            <p className="text-white m-0 text-lg lg:text-3xl">
              900 University Ave,
            </p>
            <p className="text-white m-0 text-lg lg:text-3xl">
              Riverside, CA 92521
            </p>
          </div>
          <div className="bg-white h-full w-1 lg:w-1.5 mx-3"></div>
          <div className="flex flex-col">
            <a
              href="https://www.instagram.com/ucr.asme/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white mb-1" size={28} />
            </a>

            <a
              href="mailto:ucr.asme@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-white mb-1" size={28} />
            </a>

            <a
              href="https://highlanderlink.ucr.edu/organization/asme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink className="text-white mb-1" size={28} />
            </a>

            <a
              href="https://www.facebook.com/groups/1694944664070229/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-white mb-1" size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
