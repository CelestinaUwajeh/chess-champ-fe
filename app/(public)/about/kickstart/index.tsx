import Image from "next/image";

import AppButton from "@/components/button";
import cartoon from "/public/kickstart-cartoon.png";

const Kickstart = () => {
  return (
    <div className="h-full flex font-mont">
      <div className="flex-1 max-w-xl flex flex-col justify-center gap-12">
        <h2 className="font-bold text-5xl leading-[143%]">
          Ready to kickstart a learning adventure?
        </h2>
        <AppButton
          isLink
          to="/sign-up"
          variant="primary"
          size="medium"
          width="w-[134px] text-sm"
        >
          Sign Up
        </AppButton>
      </div>
      <div className="flex-1 flex items-end justify-center">
        <Image src={cartoon} alt="Kickstart" className="w-[360px] h-auto" />
      </div>
    </div>
  );
};

export default Kickstart;
