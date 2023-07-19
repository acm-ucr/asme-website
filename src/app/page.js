import Landing from "@/components/Landing";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhoWeAreSection from "@/components/WhoWeAreSection";
import ProjectsSection from "@/components/ProjectsSection";
import JoinUsSection from "@/components/JoinUsSection";
const Home = () => {
  return (
    <div className="w-screen">
      <Landing />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <ProjectsSection />
      <JoinUsSection />
    </div>
  );
};

export default Home;
