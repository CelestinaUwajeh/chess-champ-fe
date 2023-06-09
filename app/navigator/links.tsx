"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  {
    name: "About Us",
    link: "about",
  },
  {
    name: "Services",
    link: "services",
  },
  {
    name: "How it works",
    link: "how-it-works",
  },
  {
    name: "Tutors",
    link: "tutors",
  },
  {
    name: "Contact Us",
    link: "contact-us",
  },
  {
    name: "Sponsor",
    link: "sponsor",
  },
];

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center gap-8 font-mont">
      {navLinks.map((link) => {
        const isActive = pathname.endsWith(link.link);
        console.log(pathname);
        return (
          <Link
            href={link.link}
            key={link.name}
            className={`${
              isActive ? "text-main" : "text-black"
            } no-underline font-medium hover:text-main transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
