"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiSolidGridAlt, BiLogOut } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline, IoHelp } from "react-icons/io5";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoMdTime } from "react-icons/io";
import { MdOutlinePayment } from "react-icons/md";

const menu = {
  parent: [
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
  ],
  tutor: [
    {
      name: "dashboard",
      link: "dashboard",
      icon: <BiSolidGridAlt />,
    },
    {
      name: "Students",
      link: "students",
      icon: <FaRegUser />,
    },
    {
      name: "Modules",
      link: "lesson-modules",
      icon: <VscFileSubmodule />,
    },
    {
      name: "Calendar",
      link: "calendar",
      icon: <AiOutlineCalendar />,
    },
    {
      name: "Availabilty",
      link: "availability",
      icon: <IoMdTime />,
    },
    {
      name: "Payments",
      link: "payments",
      icon: <MdOutlinePayment />,
    },
    {
      name: "settings",
      link: "settings",
      icon: <IoSettingsOutline />,
    },
  ],
};

const Sidebar = () => {
  const pathname = usePathname();
  const sidelinks = useMemo(() => {
    if (pathname.includes("parent")) {
      return menu.parent;
    }
    return menu.tutor;
  }, [pathname]);
  return (
    <div className="fixed left-0 top-[107px] bottom-0 bg-white h-[calc(100vh-107px)] w-[254px] pl-12 py-12 flex flex-col">
      <div>
        <span className="font-medium">John Doe</span>
        <p className="text-xs">Parent</p>
      </div>
      <div className="h-[1px] w-full bg-[#CAC3B3] mt-4 mb-10"></div>
      <nav className="flex-1 flex flex-col gap-4">
        {sidelinks.map((item) => {
          const pathActive = pathname.endsWith(item.link);
          return (
            <Link
              href={`${pathname.includes("parent") ? "parent" : "tutor"}/${
                item.link
              }`}
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
      <button className="absolute bottom-0 left-0 right-0 h-11 flex items-center pl-12 gap-3   text-black text-opacity-60">
        <BiLogOut />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
