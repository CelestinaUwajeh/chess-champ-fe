"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { AiOutlineCalendar } from "react-icons/ai";
import { BiTime } from "react-icons/bi";

import childcartoon from "/public/child-cartoon.png";
import AppButton from "@/components/button";

const nav = [
  {
    name: "Profile",
    icon: <FaRegUser />,
    link: "profile",
  },
  {
    name: "Progress",
    icon: <GiProgression />,
    link: "progress",
  },
  {
    name: "Calendar",
    icon: <AiOutlineCalendar />,
    link: "calendar",
  },
  {
    name: "availability",
    icon: <BiTime />,
    link: "availability",
  },
];

const TopDisplay = () => {
  const params = useParams();
  const pathname = usePathname();
  return (
    <div
      className="bg-white rounded-[10px] px-10 py-6 my-6"
      style={{ boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.14)" }}
    >
      <div className="flex items-center bg-white rounded-[10px]">
        <div className="flex-1 flex items-start gap-4">
          <Image src={childcartoon} alt={params?.id} />
          <div className="pt-1">
            <p className="text-xl font-medium leading-[12px]">{params?.id}</p>
            <small className="text-xs text-black text-opacity-60 font-medium">
              Beginner
            </small>
          </div>
        </div>
        <AppButton
          isLink
          to={`/enroll`}
          size="medium"
          variant="primary"
          width="w-[97px]"
        >
          Enroll
        </AppButton>
      </div>
      <div className="h-[1px] w-full bg-[#CAC3B3] mt-4 mb-6"></div>
      <div className="flex flex-wrap justify-between">
        {nav.map((item) => {
          const { name, link, icon } = item;
          const pathActive = pathname.endsWith(item.link);
          return (
            <Link
              href={`parent/child/${params.id}/${link}`}
              key={name}
              className={`flex items-center justify-center gap-4 w-48 py-2 hover:bg-bgPink rounded-[10px] ${
                pathActive
                  ? "bg-bgPink text-main font-medium"
                  : "text-black text-opacity-60"
              }`}
            >
              {icon}
              <span>{name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopDisplay;
