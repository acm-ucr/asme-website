import React from "react";

const EventDescription = ({ event }) => {
  return (
    <div className="w-full flex-col flex my-5">
      <div className="md:-translate-x-5 font-poppins text-black text-xl md:text-2xl font-bold self-start">
        {event.title}
      </div>
      <div className="flex flex-row w-full -translate-x-2 md:-translate-x-10">
        <div className="h-2.5 w-2.5 rotate-45 bg-asme-blue-400" />
        <div className="translate-y-1 h-0.5 w-36 bg-asme-blue-400" />
      </div>

      <div className="flex flex-row font-poppins text-asme-blue-200 text-base">
        <p className="m-0 ">{event.date}</p>
        <p className="m-0 pl-2 pr-3">{event.time}</p>
        <p className="m-0 font-bold">{event.location}</p>
      </div>

      <div className="py-3 font-poppins text-left text-black text-sm md:text-lg w-full">
        {event.description}
      </div>

      <div
        className={
          "w-40 font-poppins text-center text-sm md:text-lg self-end text-white" +
          (event.type == "Social"
            ? "bg-asme-blue-400"
            : event.type == "General Meeting"
            ? "bg-asme-blue-200"
            : "bg-asme-blue-300 text-black")
        }
      >
        {event.type}
      </div>
    </div>
  );
};

export default EventDescription;
