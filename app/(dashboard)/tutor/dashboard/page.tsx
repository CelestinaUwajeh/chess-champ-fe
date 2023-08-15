import React from "react";
import HighlightCard from "../../parent/child/[id]/progress/highlight";
import { FaRegUser } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import AppButton from "@/components/button";

const Dashboard = () => {
  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-3 gap-8">
        <div
          style={{
            boxShadow: "0px 4px 12px 0px rgba(0,0,0,0.14)",
          }}
          className="bg-main text-white rounded-[10px] flex flex-col items-center justify-center h-[135px] text-textBlack gap-1 overflow-hidden"
        >
          <p>Welcome John Doe</p>
        </div>
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
    </div>
  );
};

export default Dashboard;
