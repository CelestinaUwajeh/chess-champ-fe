"use client";

import Image from "next/image";
import Link from "next/link";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import { usePageOnScroll } from "@/hooks/usePageOnScroll";
import logo from "/public/logo.png";
import AppButton from "@/components/button";
import { usePathname } from "next/navigation";
import Mobile from "./mobile";

const Navigator = () => {
  const scrolling = usePageOnScroll();
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const pathnameOnSignUp = pathname.endsWith("signup");
  return (
    <nav
      className={`flex justify-between items-center px-3 lg:px-[112px] h-14 rounded bg-white lg:h-[107px] sticky right-0 left-0 top-0 z-30 ${
        scrolling ? "shadow-lg" : "shadow"
      }`}
    >
      <div className="flex flex-row items-center gap-2 lg:gap-10">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="AjoCard Logo"
            className="h-7 w-auto lg:h-auto"
          />
        </Link>
        <Link
          href={"/signup"}
          className="flex flex-col lg:flex-row items-center gap-2 font-medium"
        >
          <AiFillHome className="w-6 h-auto" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </div>
      <Mobile setShowMenu={setShowMenu} showMenu={showMenu} />
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden cursor-pointer"
      >
        {!showMenu ? (
          <AiOutlineMenu size="1.5em" />
        ) : (
          <AiOutlineClose size="1.5em" />
        )}
      </div>

      <div className="hidden lg:flex items-center gap-5">
        {!pathnameOnSignUp ? (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-1">
            <span>Don&apos;t have an account yet?</span>
            <AppButton
              isLink
              to={`/signup`}
              size="medium"
              variant="primary"
              width="w-[97px]"
            >
              Sign Up
            </AppButton>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-1">
            <span>Already have an account?</span>
            <AppButton
              isLink
              size="medium"
              variant="primary"
              width="w-[97px]"
              to={"/signin"}
              className="text-main no-underline font-medium"
            >
              Login
            </AppButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigator;
