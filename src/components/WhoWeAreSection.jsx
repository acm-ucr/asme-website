import React from "react";
import { FaGear } from "react-icons/fa6";
const WhoWeAreSection = () => {
  return (
    <>
      <div className="flex  relative">
        <div className="flex flex-col">
          <div className="w-40 h-32">
            <div className="bg-asme-blue-200 w-32 h-3"></div>
            <div className="bg-white absolute mt-2 mx-28 px-4 text-asme-blue-400 font-poppins font-bold p-1 text-2xl inline-flex items-center">
              Who We Are
              <FaGear className="inline-flex ml-2 text-asme-blue-100" />
            </div>
            <div className="bg-asme-blue-100 w-40 h-32"></div>
          </div>
          <div className="w-40 h-32 relative">
            <div className="bg-asme-blue-200 w-2 h-2/3 inline-block right-6 top-3 absolute "></div>
            <div className="bg-asme-blue-400 w-2 h-1/2 inline-block right-3 top-3 absolute "></div>
            <div className="bg-asme-blue-500 w-2 h-full inline-block right-0 top-3 absolute "></div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className=" font-abel mx-3 mt-20 mb-1 leading-5 w-5/6">
            We are an organization that builds rockets, unmanned aircrafts,
            robots (among other things) out of a love for engineering and
            because we understand the need for competent engineers in the world.
            Through our various projects that we are involved in, we can gain
            invaluable engineering-experience before moving into the workforce.
            As they say, &quot;it&apos;s not about what you know, but who you
            know.&quot; We have a growing network of talented
            students/engineers. Through our professional development, outreach
            and volunteering events, and workshops, this is your chance to meet
            experienced engineers, other students, and to learn marketable
            skills.
          </p>
          <button className=" font-poppins cursor-pointer hover:bg-asme-blue-400 hover:text-white w-40 text-asme-blue-400 border-2 border-asme-blue-400 p-1 ml-3 mt-3">
            Upcoming Events
          </button>
        </div>
        <p className="m-0 p-0 whitespace-nowrap font-bold font-poppins text-asme-textShadow rotate-90 text-6xl h-full absolute -right-12 top-6">
          WHO WE ARE
        </p>
      </div>
    </>
  );
};

export default WhoWeAreSection;
