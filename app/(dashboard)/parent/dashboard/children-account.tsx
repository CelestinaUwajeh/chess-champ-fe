import AppButton from "@/components/button";
import Children from "./children";

const ChildrenAccount = () => {
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
        <AppButton variant="secondary" size="medium" width="w-[134px]">
          Add a child
        </AppButton>
      </div>
      <Children />
    </div>
  );
};

export default ChildrenAccount;
