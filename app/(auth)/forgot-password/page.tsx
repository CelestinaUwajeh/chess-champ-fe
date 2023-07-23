import Image from "next/image";

import logo from "/public/forgot-logo.png";
import ForgotForm from "./form";

const ForgotPassword = () => {
  return (
    <section className="bg-white mx-auto max-w-[654px] px-3 lg:px-14 py-10 lg:py-20 mt-10 font-mont rounded-xl flex justify-start flex-col gap-10 lg:flex-row">
      <span className="flex">
        <Image src={logo} alt="Chess champs" className="h-[71px] w-auto" />
      </span>
      <ForgotForm />
    </section>
  );
};

export default ForgotPassword;
