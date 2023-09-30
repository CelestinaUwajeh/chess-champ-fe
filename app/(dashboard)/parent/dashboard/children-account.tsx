"use client";

import { useState } from "react";
import { mutate } from "swr";

import AppButton from "@/components/button";
import Children from "./children";
import StudentForm from "@/app/(auth)/signup/student/student-form";
import Popover from "@/components/pop-over";
import { showToast } from "@/utils";

const ChildrenAccount = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <div className="flex-1">
          <h3 className=" text-2xl mb-1 font-medium">Children Account</h3>
          <p className="text-sm text-black text-opacity-60 font-medium">
            You can add child, click on child&apos;s name to view their progress
            and enroll them to a class.
          </p>
        </div>
        <AppButton
          type="button"
          variant="secondary"
          size="medium"
          width="w-[134px]"
          onClick={() => setPopupOpen(true)}
        >
          Add a child
        </AppButton>
      </div>
      <Popover
        open={popupOpen}
        setOpen={() => {
          setPopupOpen(false);
        }}
        displayCloseIcon
      >
        <StudentForm
          isModal
          modalTitle="Add a child"
          onSucess={() => {
            mutate("parents/students");
            setPopupOpen(false);
            showToast({
              message: "Child successfully added!",
              type: "success",
            });
          }}
          onError={() => {
            showToast({
              message: "Failded to add child account",
              type: "error",
            });
          }}
        />
      </Popover>
      <Children />
    </div>
  );
};

export default ChildrenAccount;
