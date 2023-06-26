import Image from "next/image";

import check from "/public/check.png";
// import AppButton from "@/components/button";

const ModalContent = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 p-12">
      <Image src={check} alt="Success" />
      <p className="text-center text-sm lg:text-base">
        You have successfully signed up to Chess Champs, To complete your
        registration, a verification email has been sent to your mail. Verify
        your account to get started.
      </p>
      {/* <AppButton
        type="submit"
        variant="primary"
        size="medium"
        width="w-[134px]"
      >
        Verify
      </AppButton> */}
    </div>
  );
};

export default ModalContent;
