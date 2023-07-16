"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";

import { usePageOnScroll } from "@/hooks/usePageOnScroll";
import logo from "/public/logo.png";
import AppButton from "@/components/button";
import Mobile from "./mobile";

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
        <Link href="" className="relative">
          <div className="flex items-center justify-center h-4 w-4 rounded-full bg-main text-white absolute -right-[4px] -top-[2px]">
            <span className="text-xs">1</span>
          </div>
          <MdOutlineEmail size={"2rem"} className="text-main" />
        </Link>
        <AppButton variant="secondary" size="medium" width="w-[134px]">
          Contact Admin
        </AppButton>
      </div>
    </nav>
  );
};

export default Navigator;
