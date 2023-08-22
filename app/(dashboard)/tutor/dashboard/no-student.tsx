import AppButton from "@/components/button";

const NoStudent = () => {
  return (
    <div className=" h-52 mt-14 bg-white rounded-[10px] flex flex-col items-center justify-center gap-4">
      <p className="text-xl font-medium">Ready to start tutoring</p>
      <p>Set availabilty</p>
      <AppButton
        isLink
        to="/tutor/availability"
        variant="primary"
        size="medium"
        width="w-[134px]"
      >
        Set
      </AppButton>
    </div>
  );
};

export default NoStudent;
