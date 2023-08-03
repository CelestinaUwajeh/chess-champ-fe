import Selector from "./selector";

const Page = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Set availability</h3>
      <p className="mb-6 text-textBlack">
        Kindly choose 3 preferred days on which your child can attend classes.
        They are to attend one class per selected days. Selected days are
        reoccurring until classes are completed.
      </p>
      <Selector />
    </div>
  );
};

export default Page;
