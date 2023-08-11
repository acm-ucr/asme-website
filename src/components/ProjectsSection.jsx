import React from "react";
import ProjectsTab from "./ProjectsTab.jsx";
import ProjectTitle from "./ProjectTitle.jsx";

const ProjectsSection = () => {
  return (
    <div className="my-8 w-full overflow-hidden items-center flex flex-col relative">
      <ProjectTitle />
      <ProjectsTab />
      <p className="whitespace-nowrap font-bold font-poppins text-asme-textShadow rotate-90 text-6xl absolute right-5 origin-top-left translate-x-full">
        PROJECTS
      </p>
    </div>
  );
};

export default ProjectsSection;
