"use client";
import React from "react";
import FocusCards from "./FocusCards";
import WhatWeDoTitle from "./WhatWeDoTitle";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col relative mt-32 items-center w-full overflow-hidden">
      <WhatWeDoTitle />
      <FocusCards />
    </div>
  );
};

export default WhatWeDoSection;
