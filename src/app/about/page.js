import React from "react";
import Header from "@/components/Header";
import AboutSection from "@/components/about/AboutSection";
const about = () => {
  return (
    <div className="w-full">
      <Header title="About" />
      <AboutSection />
    </div>
  );
};

export default about;
