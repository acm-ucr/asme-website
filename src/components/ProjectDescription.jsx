import React from "react";
import Image from "next/image";

const ProjectDescription = (props) => {
  const name = props.name;
  const description = props.description;
  const picture1 = props.picture1;
  const picture2 = props.picture2;

  return (
    <div className="relative">
      <div className="flex flex-row relative h-40">
        <div className="bg-asme-blue-400 w-56 h-16 top-12 absolute"></div>
        <text className="bg-asme-blue-600 text-white text-2xl font-poppins font-bold w-52 h-16 top-14 pl-16 pt-3 absolute">
          {name}
        </text>
      </div>

      <div>
        <div className="flex flex-row font-abel justify-center">
          <p className="lg:w-[800px] lg:text-base text-sm w-72">
            {description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center">
          <Image
            className="lg:w-[520px] lg:h-[350px] lg:pl-20 pt-3 lg:pr-1 w-72"
            src={picture1}
            alt="no image"
          />
          <Image
            className="lg:w-[520px] lg:h-[350px] lg:pr-20 pt-3 lg:pl-1 w-72"
            src={picture2}
            alt="no image"
          />
        </div>
      </div>

      <p
        className="m-0 p-0 whitespace-nowrap font-bold font-poppins text-asme-textShadow text-4xl lg:text-6xl origin-top-left -rotate-90 pt-2"
        style={{ textTransform: "uppercase" }}
      >
        {name}
      </p>

      <div className="flex flex-row justify-end">
        <p
          className="m-0 p-0 whitespace-nowrap font-bold font-poppins text-asme-textShadow text-4xl lg:text-6xl pt-2 justify-end rotate-90 -translate-y-full absolute origin-top-right lg:top-[550px] top-80"
          style={{ textTransform: "uppercase" }}
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default ProjectDescription;
