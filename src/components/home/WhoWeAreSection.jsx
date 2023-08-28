import React from "react";
import { FaGear } from "react-icons/fa6";
const WhoWeAreSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start relative w-full overflow-hidden pt-12 md:pt-24">
      <p className="whitespace-nowrap font-bold font-poppins text-asme-textShadow rotate-90 text-6xl absolute right-5 top-0 origin-top-left translate-x-full">
        WHO WE ARE
      </p>
      <div className="flex flex-col">
        <div className="w-40 m-0">
          <div className="bg-asme-blue-200 w-32 h-3" />
          <div className="bg-white absolute mt-2 mx-12 md:mx-28 px-4 text-asme-blue-400 font-poppins font-bold p-1 text-lg md:text-2xl inline-flex items-center">
            Who We Are
            <FaGear className="inline-flex ml-2 text-asme-blue-100" />
          </div>
          <div className="bg-asme-blue-100 w-40 h-14 md:h-32"></div>
        </div>
        <div className="w-40 h-12 md:h-32 relative">
          <div className="bg-asme-blue-200 w-2 h-2/3 inline-block right-6 top-0 absolute "></div>
          <div className="bg-asme-blue-400 w-2 h-1/2 inline-block right-3 top-0 absolute "></div>
          <div className="bg-asme-blue-500 w-2 h-full inline-block right-0 top-0 absolute "></div>
        </div>
      </div>
      <div className="flex flex-col relative">
        <p className=" font-abel mb-1 leading-5 w-5/6 text-base md:text-xl mx-5 mt-6 md:mt-20">
          We are an organization that builds rockets, unmanned aircrafts, robots
          (among other things) out of a love for engineering and because we
          understand the need for competent engineers in the world. Through our
          various projects that we are involved in, we can gain invaluable
          engineering-experience before moving into the workforce. As they say,
          &quot;it&apos;s not about what you know, but who you know.&quot; We
          have a growing network of talented students/engineers. Through our
          professional development, outreach and volunteering events, and
          workshops, this is your chance to meet experienced engineers, other
          students, and to learn marketable skills.
        </p>
        <button className=" font-poppins cursor-pointer hover:bg-asme-blue-400 hover:text-white w-40 text-asme-blue-400 border-2 border-asme-blue-400 p-1 m-5">
          Upcoming Events
        </button>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
