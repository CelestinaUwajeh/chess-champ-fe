import AppButton from "@/components/button";

const Delete = () => {
  return (
    <div className="space-y-6">
      <p className="mb-6 font-medium text-lg">Child account</p>
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
    </div>
  );
};

export default Delete;
