"use client";

import { useRouter } from "next/navigation";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Back = () => {
  const router = useRouter();
  return (
    <div
      className="flex justify-start items-center gap-3"
      onClick={() => router.back()}
    >
      <MdOutlineArrowBackIosNew />
      <span className="font-medium">Back</span>
    </div>
  );
};

export default Back;
