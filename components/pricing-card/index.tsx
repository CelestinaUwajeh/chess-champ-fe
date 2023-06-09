import { AiOutlineCheck } from "react-icons/ai";

import { PricingDto } from "@/app/pricing";
import AppButton from "../button";
import { formatCurrency } from "@/utils";

interface PricingCardInterface {
  data: PricingDto;
}

const PricingCard = ({ data }: PricingCardInterface) => {
  const { name, description, price, perks, link } = data || {};
  return (
    <div className="group hover:bg-main hover:text-white flex flex-col bg-white h-full font-mont px-8 py-10 text-black rounded-xl transition-all">
      <p className="font-semibold text-3xl mb-6 text-center uppercase">
        {name}
      </p>
      <p className="text-sm mb-28 text-center">{description}</p>
      <p className="text-3xl font-medium text-center text-main group-hover:text-white">
        {formatCurrency(Number(price), { noDecimals: true })}
      </p>
      <hr className="bg-[#CAC3B3]" />
      <p className="mt-9 mb-6 font-semibold uppercase">What&apos;s included</p>
      <div className="flex flex-col gap-6">
        {perks.map((perk) => (
          <div key={perk} className="flex justify-start items-start gap-7">
            <AiOutlineCheck className="text-main group-hover:text-white w-3 h-auto mt-[6px]" />
            <p>{perk}</p>
          </div>
        ))}
      </div>
      <div className="flex items-end flex-1 justify-center mt-8">
        <a
          href={link}
          className="w-[134px]  rounded-[40px] text-sm whitespace-nowrap font-medium px-6 flex items-center justify-center gap-3 radius bg-main h-10 text-white group-hover:bg-white group-hover:text-main"
        >
          Get access
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
