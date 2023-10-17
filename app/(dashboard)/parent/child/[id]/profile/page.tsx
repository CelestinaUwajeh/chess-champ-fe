"use client";

import React from "react";
import { useParams } from "next/navigation";
import { format, parseISO } from "date-fns";

import UserInfo from "./user-info";
import Points from "./points";
import Tutor from "./tutor";
import Plan from "./plan";
import { useFetchStudent } from "@/services/swr/parents";
import { StudentType } from "@/utils/types";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/slices/auth";

const Page = () => {
  const user = useAppSelector(selectUser);
  const params = useParams();
  const { data } = useFetchStudent<StudentType>(params?.id);
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-6">Profile</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UserInfo
          active={data?.base_user?.last_active ?? "N/A"}
          joined={
            data?.created_at
              ? format(parseISO(data?.created_at), "do 'of' MMMM, yyyy")
              : "N/A"
          }
          email={user?.email! ?? "N/A"}
        />
        <Points />
        <Tutor />
        <Plan />
      </div>
    </div>
  );
};

export default Page;
