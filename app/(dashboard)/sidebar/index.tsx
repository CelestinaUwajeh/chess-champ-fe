"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BiSolidGridAlt, BiLogOut } from "react-icons/bi";
import { IoSettingsOutline, IoHelp } from "react-icons/io5";

const menu = [
  {
    name: "dashboard",
    link: "dashboard",
    icon: <BiSolidGridAlt />,
  },
  {
    name: "settings",
    link: "settings",
    icon: <IoSettingsOutline />,
  },
  {
    name: "help center",
    link: "help",
    icon: <IoHelp />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 top-[107px] bottom-0 bg-white h-[calc(100vh-107px)] w-[254px] pl-12 py-12 flex flex-col">
      <div>
        <span className="font-medium">John Doe</span>
        <p className="text-xs">Parent</p>
      </div>
      <div className="h-[1px] w-full bg-[#CAC3B3] mt-4 mb-10"></div>
      <nav className="flex-1 flex flex-col gap-4">
        {menu.map((item) => {
          const pathActive = pathname.endsWith(item.link);
          return (
            <Link
              href={`parent/${item.link}`}
              key={item.name}
              className={`flex items-center gap-3 capitalize pl-4 py-2 rounded-l-[10px] ${
                pathActive
                  ? "bg-bgPink text-main font-medium"
                  : "text-black text-opacity-60"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <button className="flex items-center gap-3  text-black text-opacity-60">
        <BiLogOut />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
