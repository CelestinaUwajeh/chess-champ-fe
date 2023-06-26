import SigninForm from "./signin-form";
import SignInWithGoogle from "@/components/with-google";
import { Separator } from "@/components/ui/separator";

const SignIn = () => {
  return (
    <section className="bg-white mx-auto max-w-[827px] px-3 lg:px-14 py-10 lg:py-20 mt-10 font-mont rounded-xl">
      <h1 className="text-black font-semibold text-2xl lg:text-4xl mb-4">
        Welcome back!!!
      </h1>
      <p className="mb-10">Log in to your existing account</p>
      <SignInWithGoogle />
      <div className="w-full my-10 flex items-center">
        <Separator className="flex-1" />
        <span className="mx-2">Or login with Email</span>
        <Separator className="flex-1" />
      </div>
      <SigninForm />
    </section>
  );
};

export default SignIn;
