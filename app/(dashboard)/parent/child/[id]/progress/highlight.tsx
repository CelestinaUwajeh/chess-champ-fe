"use client";

import { ReactNode } from "react";

import bgdown from "/public/prog-bg-down.png";
import bgtop from "/public/prog-bg-top.png";
import Image from "next/image";

interface PropType {
  children: ReactNode;
  about: string;
  score: string;
}

const HighlightCard = ({ children, score, about }: PropType) => {
  return (
    <div
      style={{ boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.14)" }}
      className="relative bg-white rounded-[10px] flex flex-col items-center justify-center h-[135px] text-textBlack gap-1 overflow-hidden"
    >
      <Image className="absolute top-0 left-0" src={bgtop} alt={about} />
      <Image className="absolute bottom-0 right-0" src={bgdown} alt={about} />
      {children}
      <p className="text-2xl font-medium">{score}</p>
      <p className="text-sm font-medium">{about}</p>
    </div>
  );
};

export default HighlightCard;
