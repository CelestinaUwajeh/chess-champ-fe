"use client";

import Image from "next/image";
import Link from "next/link";

import { usePageOnScroll } from "@/hooks/usePageOnScroll";
import logo from "/public/logo.png";
import NavLinks from "./links";
import AppButton from "@/components/button";

const Navigator = () => {
  const scrolling = usePageOnScroll();

  return (
    <nav
      className={`flex justify-between items-center lg:px-[112px] h-14 rounded bg-white lg:h-[107px] sticky right-0 left-0 top-0 z-30 ${
        scrolling ? "shadow-lg" : "shadow"
      }`}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          alt="AjoCard Logo"
          className=" h-6 w-auto lg:h-auto"
        />
      </Link>
      <NavLinks />
      <div className="hidden lg:flex items-center gap-5">
        <Link href={"/login"} className="text-main no-underline font-medium">
          Login
        </Link>
        <AppButton
          isLink
          to={`/apply-link`}
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
