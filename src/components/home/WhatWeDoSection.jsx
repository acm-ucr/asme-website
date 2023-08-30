"use client";
import React from "react";
import FocusCards from "./FocusCards";
import WhatWeDoTitle from "./WhatWeDoTitle";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col relative mt-8 items-center w-full overflow-hidden">
      <WhatWeDoTitle />
      <FocusCards />
      <p className="whitespace-nowrap font-bold font-poppins text-asme-textShadow rotate-90 text-6xl absolute left-5 top-[100px] origin-bottom-left -translate-y-full animate-fade animate-duration-1000">
        WHAT WE DO
      </p>
    </div>
  );
};

export default WhatWeDoSection;
