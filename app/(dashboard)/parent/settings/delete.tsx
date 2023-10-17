"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import AppButton from "@/components/button";
import ActionModal from "@/components/modals/action";
import Popover from "@/components/pop-over";
import { catchError } from "@/services/endpoints/auth";
import { showToast } from "@/utils";

const Delete = ({ title }: { title: string }) => {
  const route = useRouter();
  const [openPopover, setOpenPopover] = useState(false);
  const [loading, setLoading] = useState(false);
  const deleteAccount = async () => {
    setLoading(true);
    try {
      await deleteAccount();
      route.push("/signin");
    } catch (error) {
      const { status, error: err } = catchError(error);
      showToast({ message: String(err), type: status });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="space-y-6">
      <p className="mb-6 font-medium text-lg">{title}</p>
      <p>
        You must delete all of your children&apos;s accounts before deleting
        your own account.
      </p>
      <AppButton
        type="button"
        variant="primary"
        size="medium"
        width="w-[134px]"
        disabled
      >
        Delete
      </AppButton>
      <Popover
        open={openPopover}
        setOpen={() => {
          setOpenPopover(false);
        }}
        displayCloseIcon={false}
      >
        <ActionModal
          loading={loading}
          onActionClick={deleteAccount}
          onCancelClick={() => setOpenPopover(false)}
          description={`Are you sure you want to delete your account? All your data will be deleted from Chess Champs`}
        />
      </Popover>
    </div>
  );
};

export default Delete;
