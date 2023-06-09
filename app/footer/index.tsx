"use client";

import React from "react";
import Link from "next/link";

import { navLinks } from "../navigator/links";
import { socials } from "./socials";

const Footer = () => {
  return (
    <footer className=" bg-footerGrey pt-20 pb-9 px-[120px] font-mont">
      <div className="flex items-center justify-between mb-3">
        <div className="flex-1 flex items-center gap-12">
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
      <div className="flex mt-20">
        <div className="flex-1 flex items-center gap-12 text-main">
          <Link href="/terms">Terms of Service</Link>
          <Link href="/terms">Privacy Policy</Link>
        </div>
        <small className="text-sm">
          &copy; {new Date().getFullYear()} Chess Champs. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
