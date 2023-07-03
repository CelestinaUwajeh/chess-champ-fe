import Image from "next/image";

import AppButton from "@/components/button";
import cartoon from "/public/kickstart-cartoon.png";

const Kickstart = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row font-mont">
      <div className="flex-1 max-w-xl flex flex-col items-center lg:items-start justify-center mb-10 lg:mb-0 gap-4 lg:gap-12">
        <h2 className="font-bold text-2xl lg:text-5xl leading-[143%] text-center lg:text-start">
          Ready to kickstart a learning adventure?
        </h2>
        <AppButton
          isLink
          to="/signup"
          variant="primary"
          size="medium"
          width="w-[134px] text-sm"
        >
          Sign Up
        </AppButton>
      </div>
      <div className="flex-1 flex items-end justify-center">
        <Image
          src={cartoon}
          alt="Kickstart"
          className="w-[220px] lg:w-[360px] h-auto"
        />
      </div>
    </div>
  );
};

export default Kickstart;
