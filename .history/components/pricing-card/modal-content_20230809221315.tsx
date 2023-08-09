import Module from "@/app/(dashboard)/parent/child/[id]/progress/module";
import { modules } from "@/app/(dashboard)/parent/child/[id]/progress/page";
import { PricingDto } from "@/app/(public)/pricing";
import PricingCard from ".";

interface PropType {
  data: PricingDto;
}

const ModalContent = ({ data }: PropType) => {
  return (
    <div className="flex w-full">
      <div className="flex-1">
        <p>Beginner class</p>
        <p>Here are the modules for beginner class</p>
        <Module modules={modules} />
      </div>
      <div className="w-[310px] border">
        <PricingCard isModal data={data} />
      </div>
    </div>
  );
};

export default ModalContent;
