import React from "react";

const EventDescription = () => {
  return (
    <div className="flex flex-col">
      <div>
        <p className="font-bold text-2xl ml-3 mb-0 font-poppins">Events Name</p>
        <div className="flex flex-row items-center">
          <div className="w-2 h-2 bg-asme-blue-400 rotate-45"></div>
          <div className="w-32 h-0.5 bg-asme-blue-400"></div>
        </div>
        <p className="text-asme-blue-200 inline-block ml-2 font-bold font-poppins">
          3.23.2023 12:00pm - 2:00pm
        </p>
        <p className="text-asme-blue-200 inline-block font-bold font-poppins">
          Location Room 123
        </p>
      </div>
      <div className="flex flex-col ml-16">
        <p className="text-xl font-poppins mb-0.5">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
        <p className="text-xl font-poppins mb-0.5">
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in
        </p>
        <p className="text-xl inline-flex flex-row font-poppins mb-0.5">
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepte
          <div className="bg-asme-blue-100 text-white ml-12 pl-4 pr-8">
            General Meeting
          </div>
        </p>
      </div>
    </div>
  );
};

export default EventDescription;
