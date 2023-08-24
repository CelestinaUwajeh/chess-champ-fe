import { FaRegUser } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

import HighlightCard from "../../parent/child/[id]/progress/highlight";
import { Progress } from "@/components/ui/progress";
import Template from "../../tutor/dashboard/classes";
import { classes, community } from "../../tutor/dashboard/demo-data";

const Dashboard = () => {
  return (
    <div className="mb-10">
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-8">
        <HighlightCard about="Overall progress" score="70%">
          <Progress value={70} className="w-32 h-2" />
        </HighlightCard>
        <HighlightCard about="Total Students" score="0">
          <div className="w-10 h-10 rounded-full bg-bgPink flex items-center justify-center">
            <FaRegUser size="1.3rem" />
          </div>
        </HighlightCard>
        <HighlightCard about="Total Classes" score="0">
          <div className="w-10 h-10 rounded-full bg-bgPink flex items-center justify-center">
            <LiaChalkboardTeacherSolid size="1.7rem" />
          </div>
        </HighlightCard>
      </div>
      {/* <NoStudent /> */}
      <div className="flex mt-10 gap-8">
        <Template
          title="Upcoming Classes"
          viewLink=""
          data={classes}
          containerStyle="flex flex-col gap-2"
          style={{
            boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.14)",
            borderRadius: "10px",
          }}
        />
        <Template
          title="Community Members"
          viewLink=""
          data={community}
          style={{ borderBottom: "1px solid rgba(202, 195, 179, 0.50)" }}
          containerStyle="rounded-[10px] overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Dashboard;
