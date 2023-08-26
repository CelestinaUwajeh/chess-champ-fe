import React from "react";
import ChessPlay from "./chess-play";

const LearnClass = () => {
  return (
    <div className="flex gap-7 mb-10">
      <div className="flex-1 max-w-lg">
        <div className="bg-white rounded-[10px] h-10 flex items-center px-4 mb-7">
          <p className="text-lg font-semibold">Tutor and You</p>
        </div>
        <ChessPlay />
      </div>
      <div className="flex-1">
        <div className=" h-10 flex items-center justify-center bg-white rounded-[10px] text-center w-full">
          <p className="text-lg font-semibold">Class Room</p>
        </div>
      </div>
    </div>
  );
};

export default LearnClass;
