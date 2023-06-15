"use client";

import React from "react";
import Link from "next/link";

import { navLinks } from "../navigator/links";
import { socials } from "./socials";

const Footer = () => {
  return (
    <footer className=" bg-footerGrey pt-20 pb-9 px-3 lg:px-[120px] font-mont">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-0 mb-3">
        <div className="flex-1 grid grid-cols-2 lg:flex items-center gap-6 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className="capitalize font-medium hover:text-main transition-all"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-12">
          {socials.map((social) => (
            <a key={social.link} href={social.link}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#CAC3B3]"></div>
      <div className="flex flex-col 2xl:flex-row mt-20">
        <div className="flex-1 flex justify-center 2xl:justify-start items-center gap-12 text-main">
          <Link href="/terms">Terms of Service</Link>
          <Link href="/terms">Privacy Policy</Link>
        </div>
        <small className="text-sm text-center 2xl:text-start mt-4">
          &copy; {new Date().getFullYear()} Chess Champs. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
