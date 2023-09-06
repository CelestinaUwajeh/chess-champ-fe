import React from "react";
import ChessPlay from "./chess-play";
import { Plus } from "lucide-react";
import { RiArrowGoBackFill, RiDeleteBin5Line } from "react-icons/ri";
import { PiArrowsClockwiseLight } from "react-icons/pi";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const LearnClass = () => {
  return (
    <div className="flex gap-7 mb-10">
      <div className="flex-1 max-w-lg">
        <div className="bg-white rounded-[10px] h-10 flex items-center px-4 mb-7">
          <p className="text-lg font-semibold">Tutor and You</p>
        </div>
        <ChessPlay />
      </div>
      <div className="flex-1 flex flex-col">
        <div className=" h-10 flex items-center justify-center bg-white rounded-[10px] text-center w-full">
          <p className="text-lg font-semibold">Class Room</p>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex-1">chat</div>
          <div
            style={{ boxShadow: "0px 4.47px 13.42px 0px rgba(0,0,0,0.25)" }}
            className="flex-1 flex flex-col rounded-[10px] overflow-hidden"
          >
            <div className="px-7 h-10 flex items-center gap-12 bg-white rounded-[10px] w-full">
              <BsArrowLeft />
              <span className="flex-1 flex items-center justify-center gap-2">
                <Plus size="1rem" />
                <span className="font-bold">Setup Position</span>
              </span>
            </div>
            <div className="flex-1 bg-bgPink"></div>
            <div className="bg-white px-7 py-3 space-y-6">
              <div className="flex justify-between items-center gap-1">
                <button className="flex items-center justify-center border-none ouline-none hover:border-none hover:outline-none bg-transparent">
                  <RiArrowGoBackFill />
                  <span>Reset</span>
                </button>
                <button className="flex items-center justify-center border-none ouline-none hover:border-none hover:outline-none bg-transparent">
                  <PiArrowsClockwiseLight />
                  <span>Flip Board</span>
                </button>
                <button className="flex items-center justify-center border-none ouline-none hover:border-none hover:outline-none bg-transparent">
                  <RiDeleteBin5Line />
                  <span>Clear Board</span>
                </button>
              </div>
              <div className="flex justify-center">
                <Button className=" w-48 mx-auto bg-main rounded-[10px]">
                  Play
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnClass;
