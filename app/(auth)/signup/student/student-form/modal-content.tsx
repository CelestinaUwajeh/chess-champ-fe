import Image from "next/image";

import check from "/public/check.png";
import AppButton from "@/components/button";

const ModalContent = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-12">
      <Image src={check} alt="Success" />
      <div>
        <h3 className="text-xl lg:text-3xl mb-3 text-center">
          Congratulations
        </h3>
        <p className="text-center text-sm lg:text-base">
          You have successfully signed up to Chess Champs.
        </p>
      </div>
      <AppButton
        type="submit"
        variant="primary"
        size="medium"
        width="w-[134px]"
        isLink
        to="/dashboard"
      >
        Verify
      </AppButton>
    </div>
  );
};

export default ModalContent;
