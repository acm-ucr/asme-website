import UpcomingEvents from "@/components/UpcomingEvents";
import React from "react";

const events = () => {
  return (
    <>
      <div className="relative bg-header bg-cover py-3 h-[400px] md:h-[700px] w-full justify-end flex items-stretch"></div>
      <div className="w-full p-8 md:p-32">
        <UpcomingEvents></UpcomingEvents>
      </div>
    </>
  );
};

export default events;
