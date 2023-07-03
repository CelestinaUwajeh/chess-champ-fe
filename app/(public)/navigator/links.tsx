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
    name: "Call For Sponsors",
    link: "sponsor",
  },
  {
    name: "Chess Items",
    link: "chess-items",
  },
  {
    name: "Contact Us",
    link: "contact-us",
  },
];
const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 lg:gap-8 font-mont">
      {navLinks.map((link) => {
        const isActive = pathname.endsWith(link.link);

        return (
          <Link
            href={link.link}
            key={link.name}
            className={`${
              isActive ? "text-main" : "text-black"
            } no-underline font-medium text-[15px] hover:text-main transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
