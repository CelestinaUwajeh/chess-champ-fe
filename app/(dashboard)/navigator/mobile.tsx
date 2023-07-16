import AppButton from "@/components/button";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface PropType {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

const Mobile = ({ showMenu, setShowMenu }: PropType) => {
  const pathname = usePathname();
  const router = useRouter();
  const pathnameOnSignUp = pathname.endsWith("signup");
  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: showMenu ? "calc(100vh - 56px)" : 0,
          opacity: showMenu ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className=" lg:hidden absolute bg-white w-full top-14  left-0 p-6"
      >
        <div className="flex items-center justify-center gap-5">
          {!pathnameOnSignUp ? (
            <div className="flex flex-col lg:flex-row items-center justify-center gap-1">
              <span>Don&apos;t have an account yet?</span>
              <AppButton
                size="medium"
                variant="primary"
                width="w-[97px]"
                onClick={() => {
                  setShowMenu(false);
                  router.push("/signup");
                }}
              >
                <span>Sign Up</span>
              </AppButton>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row items-center justify-center gap-1 border">
              <span>Already have an account?</span>
              <AppButton
                size="medium"
                variant="primary"
                width="w-[97px]"
                className="text-main no-underline font-medium"
                onClick={() => {
                  setShowMenu(false);
                  router.push("/signin");
                }}
              >
                Login
              </AppButton>
            </div>
          )}
        </div>
      </m.nav>
    </LazyMotion>
  );
};

export default Mobile;
