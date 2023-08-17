import UpcomingEvents from "@/components/UpcomingEvents";
import React from "react";
import Header from "@/components/Header";

const events = () => {
  return (
    <>
      <Header title="Events" />
      <div className="w-full p-8 md:p-32">
        <UpcomingEvents></UpcomingEvents>
      </div>
    </>
  );
};

export default events;
