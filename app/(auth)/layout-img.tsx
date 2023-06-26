"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCallback } from "react";

import parentCartoon from "/public/parent-auth-cartoon.png";
import tutorCartoon from "/public/tutor-auth-cartoon.png";
import studentCartoon from "/public/student-auth-cartoon.png";
import generalCartoon from "/public/kickstart-cartoon.png";

const LayoutImg = () => {
  const pathname = usePathname();
  const pathImg = {
    signup: generalCartoon,
    parent: parentCartoon,
    tutor: tutorCartoon,
    student: studentCartoon,
  };

  const imgToRender = useCallback(() => {
    if (pathname.endsWith("parent")) {
      return pathImg.parent;
    }
    if (pathname.endsWith("tutor")) {
      return pathImg.tutor;
    }
    if (pathname.endsWith("student")) {
      return pathImg.student;
    }
    return pathImg.signup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])();

  const shouldNotDisplay =
    pathname.endsWith("signin") || pathname.includes("password");

  return (
    <div
      className={`${
        shouldNotDisplay ? "hidden" : "block"
      } h-96 relative overflow-hidden`}
    >
      <div className=" w-[728px] h-[728px] rounded-full bg-white absolute left-1/2 top-2/4 -ml-[364px] "></div>
      <Image
        src={imgToRender}
        alt="img"
        className={`w-[220px] lg:w-[310px] absolute left-1/2 -ml-[110px] lg:-ml-[155px] ${
          pathname.endsWith("signup")
            ? "top-[100px] lg:top-[50px]"
            : " top-[110px]"
        }`}
      />
    </div>
  );
};

export default LayoutImg;
