import React from "react";
import Image from "next/image";
import bot from "../../public/battleBot.png";

const ProjectsTab = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-2/3 items-center">
      <Image src={bot} className="w-60 h-52" alt="bot" />
      <div className="flex flex-col w-3/5">
        <p className="text-2xl flex-wrap font-poppins font-bold text-asme-blue-500">
          BattleBots
        </p>
        <p className="font-abel text-asme-blue-500 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
    </div>
  );
};

export default ProjectsTab;
