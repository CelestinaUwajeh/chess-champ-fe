"use client";

import { useRouter } from "next/navigation";

import { useAppSelector } from "@/redux/hooks";
import Navigator from "./navigator";
import Sidebar from "./sidebar";
import { selectUser } from "@/redux/slices/auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  if (!user?.access_token) {
    return router.push("/login");
  }
  return (
    <main className="min-h-screen bg-bgPink">
      <Navigator />
      <div className="mx-3 lg:mx-0 flex h-full relative">
        <Sidebar />
        <div className="flex-1 ml-[254px]">
          <div className="max-w-[1200px] mx-auto w-full px-4 pt-[24px]">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
