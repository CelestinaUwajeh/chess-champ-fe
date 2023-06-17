import { FcGoogle } from "react-icons/fc";
import { Separator } from "../ui/separator";

const SignInWithGoogle = () => {
  return (
    <div className="flex items-center border-solid border h-12 rounded-md">
      <FcGoogle className="mx-7" />
      <Separator orientation="vertical" className="my-2" />
      <div className="flex-1 flex justify-center items-center cursor-pointer">
        <span className="font-medium">Continue with Google</span>
      </div>
    </div>
  );
};

export default SignInWithGoogle;
