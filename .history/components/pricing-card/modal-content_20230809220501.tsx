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
        <Module modules={modules} />
      </div>
      <div>
        <PricingCard isModal data={data} />
      </div>
    </div>
  );
};

export default ModalContent;
