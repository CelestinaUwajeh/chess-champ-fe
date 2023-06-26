import Image from "next/image";

import check from "/public/check.png";
import AppButton from "@/components/button";

const ModalContent = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-12">
      <Image src={check} alt="Success" />
      <p className="text-center text-sm lg:text-base">
        Your application has been received and is being reviewed, we will reach
        out to you shortly. Thank you.
      </p>
      <AppButton
        type="submit"
        variant="primary"
        size="medium"
        width="w-[134px]"
        isLink
        to="/"
      >
        Okay
      </AppButton>
    </div>
  );
};

export default ModalContent;
