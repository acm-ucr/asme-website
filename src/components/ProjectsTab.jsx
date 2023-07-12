import React from "react";
import Image from "next/image";
import bot from "../../public/battleBot.png";

const ProjectsTab = () => {
  return (
    <div className="flex flex-row h-60">
      <div className="flex flex-col w-64"></div>
      <Image src={bot} className="w-60 h-52" />
      <div className="flex flex-col" style={{ width: "680px" }}>
        <text className="text-2xl flex-wrap font-poppins font-bold text-asme-blue-500 pl-5">
          BattleBots
        </text>
        <p className="font-abel text-asme-blue-500 pl-5 pr-40 pt-2.5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
    </div>
  );
};

export default ProjectsTab;
