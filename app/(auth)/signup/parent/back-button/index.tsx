"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineLeft } from "react-icons/ai";

const BackButton = () => {
  const router = useRouter();

  return (
    <span
      onClick={router.back}
      className="inline-flex items-center gap-6 font-semibold mb-7 cursor-pointer"
    >
      <AiOutlineLeft />
      <span>Back</span>
    </span>
  );
};

export default BackButton;
