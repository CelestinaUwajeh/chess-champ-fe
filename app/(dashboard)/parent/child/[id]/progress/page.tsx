import Attendance from "./attendance";
import Percentage from "./percentage";
import Points from "./points";
import Module from "./module";
import { modules } from "@/utils/modules";

const Page = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-6">Progress</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Percentage />
        <Points />
        <Attendance />
      </div>
      <h3 className="text-2xl font-semibold my-6">Beginner class</h3>
      <Module modules={modules} />
    </div>
  );
};

export default Page;
