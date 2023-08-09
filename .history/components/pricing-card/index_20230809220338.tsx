"use client";

import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

import { formatCurrency } from "@/utils";
import { PricingDto } from "@/app/(public)/pricing";
import Popover from "../pop-over";
import ModalContent from "./modal-content";
import Dialogue from "../dialogue";

interface PricingCardInterface {
  data: PricingDto;
  isModal: boolean;
}

const PricingCard = ({ data, isModal }: PricingCardInterface) => {
  const { name, description, price, perks } = data || {};
  const [popOverOpen, setPopOverOpen] = useState(false);
  return (
    <>
      {isModal ? null : (
        <Dialogue
          open={popOverOpen}
          setOpen={() => {
            setPopOverOpen(false);
          }}
          displayCloseIcon={false}
        >
          <ModalContent data={data} />
        </Dialogue>
      )}
      <div className="group hover:bg-main hover:text-white flex flex-col bg-white h-full font-mont px-8 py-10 text-black rounded-xl transition-all">
        <p className="font-semibold text-3xl mb-2 lg:mb-6 text-center uppercase">
          {name}
        </p>
        <p className="text-sm mb-10 lg:mb-28 text-center">{description}</p>
        <p className="text-3xl font-medium text-center text-main group-hover:text-white">
          {formatCurrency(Number(price), { noDecimals: true })}
        </p>
        <hr className="bg-[#CAC3B3]" />
        <p className="mt-9 mb-6 font-semibold uppercase">
          What&apos;s included
        </p>
        <div className="flex flex-col gap-3 lg:gap-6">
          {perks.map((perk) => (
            <div
              key={perk}
              className="flex justify-start items-start gap-4 lg:gap-7"
            >
              <AiOutlineCheck className="text-main group-hover:text-white w-3 h-auto mt-[6px]" />
              <p className="text-sm lg:base">{perk}</p>
            </div>
          ))}
        </div>
        <div className="flex items-end flex-1 justify-center mt-8">
          <button
            onClick={() => setPopOverOpen(true)}
            className="w-[134px]  rounded-[40px] text-sm whitespace-nowrap font-medium px-6 flex items-center justify-center radius bg-main h-10 text-white group-hover:bg-white group-hover:text-main"
          >
            See More
          </button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
