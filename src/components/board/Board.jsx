import React from "react";
import Image from "next/image";

const Board = ({ image, position, name }) => {
  return (
    <div className="p-5">
      <div className="h-80 w-96">
        <div className="absolute left-36">
          <Image className="w-60 h-80" src={image} alt="Board Member" />
        </div>
        <div className="flex absolute w-64 h-10 bg-asme-blue-100 justify-end mt-2">
          <h4 className="font-Poppins font-bold mr-4 text-asme-blue-500 mt-1.5">
            {position}
          </h4>
        </div>
        <div
          className="flex absolute w-64 h-10 bg-asme-blue-500 left-44 mt-64 justify-center"
          style={{ left: "180px", marginTop: "270px" }}
        >
          <h4 className="font-Poppins font-bold text-asme-blue-100 mt-1.5 just">
            {name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Board;
