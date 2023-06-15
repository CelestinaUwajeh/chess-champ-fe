"use client";

import parentCartoon from "/public/parent-cartoon.png";
import tutorCartoon from "/public/tutor-cartoon.png";
import studentCartoon from "/public/student-cartoon.png";
import generalCartoon from "/public/kickstart-cartoon.png";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useCallback } from "react";

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

  return (
    <div className=" h-96 relative overflow-y-hidden">
      <div className=" w-[728px] h-[728px] rounded-full bg-white absolute left-1/2 top-2/4 -ml-[364px] "></div>
      <Image
        src={imgToRender}
        alt="img"
        className={`w-[310px] absolute left-1/2 -ml-[155px] ${
          pathname.endsWith("signup") ? "top-[50px]" : ""
        }`}
      />
    </div>
  );
};

export default LayoutImg;
