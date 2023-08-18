import React from "react";
import Header from "@/components/Header";
import EventDescriptions from "@/components/EventDescriptions";

const events = () => {
  return (
    <div>
      <Header title="Events" src={events} />
      <EventDescriptions />
    </div>
  );
};

export default events;
