import Selector from "../../parent/child/[id]/availability/selector";

const Availability = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-4">Set availability</h3>
      <p className="mb-6 text-textBlack">
        Please select 5 days of the week that are convenient for you to tutor.
        Every tutor is entitled to tutoring for a minimum of 3 hours per day.
      </p>
      <Selector />
    </div>
  );
};

export default Availability;
