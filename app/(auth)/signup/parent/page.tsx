import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import ParentForm from "./parent-form";
import BackButton from "./back-button";
import { Separator } from "@/components/ui/separator";

const Parent = () => {
  return (
    <section className="bg-white mx-auto max-w-[827px] p-14 mt-10 font-mont rounded-xl">
      <BackButton />
      <h4 className="text-black font-bold text-2xl mb-10">
        Create your parent account:{" "}
        <Link href="" className="text-main font-normal text-base underline">
          see why
        </Link>{" "}
        <span className="font-normal text-base">you need an account</span>
      </h4>
      <div className="flex items-center border-solid border h-12 rounded-md">
        <FcGoogle className="mx-7" />
        <Separator orientation="vertical" className="my-2" />
        <div className="flex-1 flex justify-center items-center cursor-pointer">
          <span className="font-medium">Continue with Google</span>
        </div>
      </div>
      <div className="w-full my-10 flex items-center">
        <Separator className="flex-1" />
        <span className="mx-2">Or Sign up with Email</span>
        <Separator className="flex-1" />
      </div>
      <ParentForm />
    </section>
  );
};

export default Parent;
