import React from "react";

const notFound = () => {
  return (
    <div className="flex flex-col mt-[240px]">
      <div className="m-auto font-poppins font-extrabold text-7xl text-asme-blue-200">
        404
      </div>

      <div className="m-auto font-poppins font-bold text-3xl">
        Page Not Found
      </div>

      <div className="m-auto mb-2 text-yellow-950">____</div>

      <div className="m-auto font-poppins border-1 border-gray-500 text-center h-[27px] w-[150px]">
        Back To Home
      </div>
    </div>
  );
};

export default notFound;
