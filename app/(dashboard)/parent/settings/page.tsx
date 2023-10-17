"use client";

import React from "react";

import Basic from "./forms/basic";
import PasswordForm from "./forms/password";
import { Separator } from "@/components/ui/separator";
import Role from "./role";
import ChildAccount from "./child-account";
import Delete from "./delete";
import { useAppSelector } from "@/redux/hooks";
import { selectUser } from "@/redux/slices/auth";

const Settings = () => {
  const user = useAppSelector(selectUser);
  return (
    <div className="bg-white rounded-[10px] p-16 mb-16">
      <h1 className="mb-9 text-3xl font-semibold">Settings</h1>
      <div className="space-y-[60px]">
        <Basic />
        <Separator />
        <PasswordForm />
        <Separator />
        <Role role={user?.user_role || "N/A"} />
        <Separator />
        <ChildAccount />
        <Separator />
        <Delete title="Child account" />
        <Separator />
      </div>
    </div>
  );
};

export default Settings;
