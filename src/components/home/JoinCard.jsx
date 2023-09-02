import React from "react";
import Link from "next/link";

// probably improper use of tailwind, but doing otherwise would require changing project with color management and usage of style, maybe bg-clip-text could work but that's hard
const HOVER_CLASS_MAPPING = {
  "bg-asme-blue-600": "hover:!text-asme-blue-600",
  "bg-asme-blue-500": "hover:!text-asme-blue-500",
  "bg-asme-blue-400": "hover:!text-asme-blue-400",
  "bg-asme-blue-300": "hover:!text-asme-blue-300",
};

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
        className={`text-white ${bgColor} border-white border-2 py-1 px-4 hover:bg-white ${HOVER_CLASS_MAPPING[bgColor]} font-poppins font-semibold w-3/5 no-underline text-center`}
      >
        Join
      </Link>
    </div>
  );
};

export default JoinCard;
