"use client";

import ProfileCard from "./profile-card";

interface PropType {
  active: string;
  joined: string;
  email: string;
}

const UserInfo = ({ active, joined, email }: PropType) => {
  return (
    <ProfileCard title="User information">
      <div className="text-textBlack flex flex-col gap-4">
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Active</span>
          <span>{active}</span>
        </div>
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Date joined</span>
          <span>{joined}</span>
        </div>
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Parent email</span>
          <span>{email}</span>
        </div>
      </div>
    </ProfileCard>
  );
};

export default UserInfo;
