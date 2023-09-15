"use client";
import Landing from "@/components/home/Landing";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import JoinUsSection from "@/components/home/JoinUsSection";
const Home = () => {
  return (
    <>
      <Landing />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <ProjectsSection />
      <JoinUsSection />
    </>
  );
};

export default Home;
