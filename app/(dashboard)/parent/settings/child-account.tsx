import React from "react";

const ChildAccount = () => {
  return (
    <div className="space-y-6">
      <p className="mb-6 font-medium text-lg">Child account</p>
      <p>
        You can delete and also{" "}
        <span className="text-main">create a new child account</span>
      </p>
      <div className="space-y-8">
        {["Saary", "Jonny", "Mecci"].map((account) => {
          return (
            <div key={account} className="flex items-center">
              <span className=" min-w-[200px]">{account}</span>
              <button className="border-none outline-none bg-transparent text-main font-medium text-sm">
                Delete account
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChildAccount;
