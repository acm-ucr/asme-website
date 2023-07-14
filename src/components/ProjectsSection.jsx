import React from "react";
import ProjectsTab from "./ProjectsTab.jsx";
import ProjectTitle from "./ProjectTitle.jsx";

const ProjectsSection = () => {
  return (
    <div className="m-16 w-full overflow-hidden items-center flex flex-col">
      <ProjectTitle />

      <ProjectsTab />
    </div>
  );
};

export default ProjectsSection;
