import Module from "@/app/(dashboard)/parent/child/[id]/progress/module";
import { modules } from "@/app/(dashboard)/parent/child/[id]/progress/page";
import { PricingDto } from "@/app/(public)/pricing";

interface PropType {
  data: PricingDto;
}

const ModalContent = ({ data }: PropType) => {
  return (
    <div>
      <div>
        <Module modules={modules} />
      </div>
      <div></div>
    </div>
  );
};

export default ModalContent;
