import FocusCards from "./FocusCards";
import WhatWeDoTitle from "./WhatWeDoTitle";
import VerticalText from "../VerticalText";

const WhatWeDoSection = () => {
  return (
    <div className="flex flex-col relative mt-8 items-center w-full overflow-hidden">
      <WhatWeDoTitle />
      <FocusCards />
      <VerticalText text="WHAT WE DO" />
    </div>
  );
};

export default WhatWeDoSection;
