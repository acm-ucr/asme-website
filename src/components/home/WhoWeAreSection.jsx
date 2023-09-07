import React from "react";
import Link from "next/link";
import VerticalText from "../VerticalText";
import WhoWeAreTitle from "./WhoWeAreTitle";
const WhoWeAreSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start relative w-full overflow-hidden pt-12 md:pt-24">
      <VerticalText text="WHO WE ARE" left={false} />
      <WhoWeAreTitle />
      <div className="flex flex-col relative">
        <p className="font-abel mb-1 leading-5 w-5/6 text-base md:text-xl mx-5 mt-6 md:mt-20 animate-fade-right animate-ease-linear">
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
        <Link
          href="/events"
          className="font-poppins hover:cursor-pointer hover:bg-asme-blue-400 hover:text-white w-40 text-asme-blue-400 border-2 border-asme-blue-400 py-1 px-2 m-5 animate-fade-right animate-ease-linear text-sm md:text-base"
        >
          Upcoming Events
        </Link>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
