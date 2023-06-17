import Link from "next/link";

import ParentForm from "./parent-form";
import BackButton from "./back-button";
import { Separator } from "@/components/ui/separator";
import SignInWithGoogle from "@/components/with-google";

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
      <SignInWithGoogle />
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
