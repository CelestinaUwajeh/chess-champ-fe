import React from "react";
import UserInfo from "./user-info";
import Points from "./points";
import Tutor from "./tutor";
import Plan from "./plan";

const Page = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-6">Profile</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UserInfo />
        <Points />
        <Tutor />
        <Plan />
      </div>
    </div>
  );
};

export default Page;
