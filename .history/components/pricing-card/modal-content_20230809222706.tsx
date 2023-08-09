import Module from "@/app/(dashboard)/parent/child/[id]/progress/module";
import { modules } from "@/app/(dashboard)/parent/child/[id]/progress/page";
import { PricingDto } from "@/app/(public)/pricing";
import PricingCard from ".";

interface PropType {
  data: PricingDto;
}

const ModalContent = ({ data }: PropType) => {
  return (
    <div className="w-full">
      <p className="text-xl text-black font-semibold">Beginner class</p>
      <p className="text-sm text-black mb-4">
        Here are the modules for beginner class
      </p>
      <div className="flex gap-4">
        <div className="flex-1 p-8 border rounded-[10px]">
          <Module modules={modules} isModal />
        </div>
        <div className="w-[310px] border rounded-[10px]">
          <PricingCard isModal data={data} />
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
