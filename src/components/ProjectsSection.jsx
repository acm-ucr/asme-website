import React from "react";
import { FaGear } from "react-icons/fa6";
import ProjectsTab from "./ProjectsTab.jsx";

const ProjectsSection = () => {
  return (
    <div className="m-16">
      <div className="mb-16 relative">
        <div className="bg-asme-blue-100 w-56 h-12 shadow-[1rem_-0.5rem_0_0] shadow-asme-blue-200 relative">
          <div className="w-40 h-32 absolute left-6">
            <div className="bg-asme-blue-200 w-2 h-1/2 inline-block left-0 top-0 absolute "></div>
            <div className="bg-asme-blue-400 w-2 h-1/3 inline-block left-3 top-0 absolute "></div>
            <div className="bg-asme-blue-500 w-2 h-2/3 inline-block left-6 top-0 absolute "></div>
          </div>
        </div>
        <div className="bg-white absolute left-0 top-0 mt-3 mx-40 px-2 text-asme-blue-400 font-poppins font-bold p-1 text-2xl inline-flex items-center">
          Projects
          <FaGear className="inline-flex ml-2 text-asme-blue-100" />
        </div>
      </div>

      <ProjectsTab />
    </div>
  );
};

export default ProjectsSection;
