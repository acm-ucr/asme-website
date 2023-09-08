import React from "react";
import Link from "next/link";

const JoinCard = ({ text, icon, link, color, hover }) => {
  return (
    <div
      className={`flex flex-col ${color} items-center aspect-square justify-between py-4 px-2 text-white font-poppins font-semibold`}
    >
      {icon}
      <p className="text-lg lg:text-xl mb-4 lg:m-0">{text}</p>
      <Link
        href={link}
        className={`no-underline bg-transparent border-white border-2 py-1 px-4 w-3/5 text-center duration-300 hover:!bg-white ${hover}`}
      >
        Join
      </Link>
    </div>
  );
};

export default JoinCard;
