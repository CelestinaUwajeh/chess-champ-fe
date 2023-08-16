import { AiOutlineClose } from "react-icons/ai";

import Module from "@/app/(dashboard)/parent/child/[id]/progress/module";
import { PricingDto } from "@/app/(public)/pricing";
import PricingCard from ".";
import { modules } from "@/utils/modules";

interface PropType {
  data: PricingDto;
  onModalClose: () => void;
}

const ModalContent = ({ data, onModalClose }: PropType) => {
  return (
    <div className="w-full h-[calc(100vh-80px)]">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xl text-black font-semibold">Beginner class</p>
          <p className="text-sm text-black mb-4">
            Here are the modules for beginner class
          </p>
        </div>
        <AiOutlineClose className="cursor-pointer" onClick={onModalClose} />
      </div>

      <div className="flex flex-col xl:flex-row gap-2 xl:gap-4 h-[calc(100vh-140px)] overflow-y-auto">
        <div className="flex-1 p-2 xl:p-8 border rounded-[10px] overflow-y-auto">
          <Module modules={modules} isModal />
        </div>
        <div className="w-full xl:w-[310px] border rounded-[10px]">
          <PricingCard isModal data={data} />
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
