"use client";

import Image from "next/image";
import childcartoon from "/public/child-cartoon.png";
import Link from "next/link";

import AppButton from "@/components/button";
import { useFetchStudents } from "@/services/swr/parents";
import { StudentType } from "@/utils/types";

const Children = () => {
  const { data: children } = useFetchStudents<StudentType[]>();
  return (
    <div className="flex flex-col gap-4">
      {(children || []).map((child) => {
        const { id, base_user } = child;
        return (
          <Link
            href={`/parent/child/${id}/profile`}
            key={base_user.first_name}
            className="flex items-center px-6 py-4 bg-white rounded-[10px]"
          >
            <div className="flex-1 flex items-center gap-4">
              <Image
                src={base_user?.profile_picture_url || childcartoon}
                alt={base_user?.first_name || ""}
              />
              <p>
                {base_user?.first_name || ""} {base_user?.last_name || ""}
              </p>
            </div>
            <Link
              href={"/settings"}
              className="mr-4 text-sm text-main font-medium"
            >
              Edit settings
            </Link>
            <AppButton
              isLink
              // to={`/signup`}
              size="medium"
              variant="primary"
              width="w-[97px]"
            >
              Enrolled
            </AppButton>
          </Link>
        );
      })}
    </div>
  );
};

export default Children;
