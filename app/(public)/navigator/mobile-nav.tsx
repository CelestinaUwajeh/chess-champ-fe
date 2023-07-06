import React from "react";
import { navLinks } from "./links";
import Link from "next/link";
import AppButton from "@/components/button";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { usePathname } from "next/navigation";

interface PropType {
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
}

const MobileNav = ({ showMenu, setShowMenu }: PropType) => {
  const pathname = usePathname();
  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: showMenu ? "calc(100vh - 56px)" : 0,
          opacity: showMenu ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className=" lg:hidden absolute bg-white w-full top-14 border left-0 p-6"
      >
        <div className="flex flex-col items-start justify-center gap-4 font-mont">
          {navLinks.map((link) => {
            const isActive = pathname.endsWith(link.link);

            return (
              <Link
                href={link.link}
                key={link.name}
                className={`${
                  isActive
                    ? "text-main border-main border-b-2 border-solid"
                    : "text-black"
                }  font-medium hover:text-main transition-all`}
                onClick={() => setShowMenu(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <Link
          href={"/signin"}
          className="text-main no-underline font-medium inline-block mt-8 mb-4"
          onClick={() => setShowMenu(false)}
        >
          Login
        </Link>
        <AppButton
          isLink
          to={`/signup`}
          size="medium"
          variant="primary"
          width="w-[97px]"
          onClick={() => setShowMenu(false)}
        >
          Sign Up
        </AppButton>
      </m.nav>
    </LazyMotion>
  );
};

export default MobileNav;
