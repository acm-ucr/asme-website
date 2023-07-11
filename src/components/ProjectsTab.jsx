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
        <p
          className="font-abel text-asme-blue-500"
          style={{
            paddingLeft: "20px",
            paddingRight: "160px",
            paddingTop: "10px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
    </div>
  );
  // return <div>ProjectsTab</div>;
};

export default ProjectsTab;
