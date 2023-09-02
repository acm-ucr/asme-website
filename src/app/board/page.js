import React from "react";
import Header from "@/components/Header";
import Board from "@/components/board/Board";
import image from "public/Board.png";

const board = () => {
  return (
    <div>
      <div className="w-full">
        <Header title="Board" />
      </div>

      <div>
        <Board
          image={image}
          position="Position Title"
          name="Firstname Lastname"
        />
      </div>
    </div>
  );
};

export default board;
