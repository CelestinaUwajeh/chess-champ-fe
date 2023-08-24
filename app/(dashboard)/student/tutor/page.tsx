import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import tutorImg from "/public/tutor-temp.png";
import AppButton from "@/components/button";
import Statistics from "./statistics";
import NoOfStudents from "./number-of-students";
import Rating from "./rating";

const MyTutor = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between bg-white rounded-[10px] p-6 mb-12">
        <div className="flex items-center gap-3">
          <div className=" h-24 w-24 aspect-square rounded-full">
            <Image src={tutorImg} alt="" className="w-full h-auto" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-sm">
              <span>Ratings</span>
              <AiFillStar className="text-main" />
              <span>3.0</span>
            </div>
            <p>Beginner</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <AppButton variant="secondary" size="medium" width="w-[134px]">
            Report Tutor
          </AppButton>
          <AppButton variant="primary" size="medium" width="w-[134px]">
            Rate Tutor
          </AppButton>
        </div>
      </div>
      <h3 className="text-2xl font-semibold mb-6">Profile</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Statistics />
        <Rating />
        <NoOfStudents />
      </div>
    </div>
  );
};

export default MyTutor;
