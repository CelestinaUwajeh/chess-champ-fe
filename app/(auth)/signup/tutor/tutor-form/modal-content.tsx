import Image from "next/image";

import check from "/public/check.png";
import AppButton from "@/components/button";

interface PropType {
  onButtonClick: () => void;
  description: string;
  buttonText: string;
}

const ModalContent = ({ onButtonClick, description, buttonText }: PropType) => {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-12">
      <Image src={check} alt="Success" />
      <p className="text-center text-sm lg:text-base">{description}</p>
      <AppButton
        type="submit"
        variant="primary"
        size="medium"
        width="w-[134px]"
        onClick={onButtonClick}
      >
        {buttonText}
      </AppButton>
    </div>
  );
};

export default ModalContent;
