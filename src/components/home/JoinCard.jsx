import React from "react";
import Link from "next/link";

const JoinCard = ({ text, icon, link, bgColor }) => {
  return (
    <div
      className={`flex flex-col ${bgColor} items-center aspect-square justify-between py-4 px-2`}
    >
      {icon}
      <p className="text-light font-poppins font-semibold text-lg lg:text-xl mb-4 lg:m-0">
        {text}
      </p>
      <Link
        href={link}
        className={`text-white ${bgColor} border-white border-2 py-1 px-4 hover:bg-white hover:text-asme-blue-600 font-poppins font-semibold w-3/5 no-underline text-center`}
      >
        Join
      </Link>
    </div>
  );
};

export default JoinCard;
