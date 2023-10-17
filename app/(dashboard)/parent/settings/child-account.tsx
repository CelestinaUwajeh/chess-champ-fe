"use client";

import React, { useCallback, useState } from "react";

import { useFetchStudents } from "@/services/swr/parents";
import { StudentType } from "@/utils/types";
import ActionModal from "@/components/modals/action";
import Popover from "@/components/pop-over";

const ChildAccount = () => {
  const { data: children } = useFetchStudents<StudentType[]>();
  const [openPopover, setOpenPopover] = useState(false);
  const [loading] = useState(false);
  const deleteAccount = useCallback((id: string) => {
    console.log({ id });
  }, []);
  return (
    <div className="space-y-6">
      <p className="mb-6 font-medium text-lg">Child account</p>
      <p>
        You can delete and also{" "}
        <span className="text-main">create a new child account</span>
      </p>
      <div className="space-y-8">
        {(children || []).map((account) => {
          const { id, base_user } = account;
          return (
            <>
              <div key={id} className="flex items-center">
                <span className=" min-w-[200px]">
                  {base_user?.first_name} {base_user?.last_name}
                </span>
                <button className="border-none outline-none bg-transparent text-main font-medium text-sm">
                  Delete account
                </button>
              </div>
              <Popover
                open={openPopover}
                setOpen={() => {
                  setOpenPopover(false);
                }}
                displayCloseIcon={false}
              >
                <ActionModal
                  loading={loading}
                  onActionClick={() => deleteAccount(id)}
                  onCancelClick={() => setOpenPopover(false)}
                  description={`Are you sure you want to delete ${base_user?.first_name}'s account? All their data will be deleted from Chess Champs`}
                />
              </Popover>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ChildAccount;
