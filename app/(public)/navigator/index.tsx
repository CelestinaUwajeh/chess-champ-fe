"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import { usePageOnScroll } from "@/hooks/usePageOnScroll";
import logo from "/public/logo.png";
import NavLinks from "./links";
import AppButton from "@/components/button";
import MobileNav from "./mobile-nav";

const Navigator = () => {
  const scrolling = usePageOnScroll();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center px-3 lg:px-[112px] h-14 rounded bg-white lg:h-[107px] sticky right-0 left-0 top-0 z-30 ${
        scrolling ? "shadow-lg" : "shadow"
      }`}
    >
      <Link href={"/"}>
        <Image src={logo} alt="AjoCard Logo" className="h-7 w-auto lg:h-auto" />
      </Link>
      <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />

      <NavLinks />

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
        <Link href={"/login"} className="text-main no-underline font-medium">
          Login
        </Link>
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
    </nav>
  );
};

export default Navigator;
