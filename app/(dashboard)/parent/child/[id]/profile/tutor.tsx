import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import ProfileCard from "./profile-card";
import tutortemp from "/public/tutor-temp.png";

const Tutor = () => {
  return (
    <ProfileCard title="Tutor">
      <div className="flex gap-6">
        {/* <p>
          Tutor information will show here when you enroll your child in chess
          class
        </p> */}
        <Image src={tutortemp} alt="tutor" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1 font-medium">
            <p className="text-main">Alice Audu</p>
            <AiFillStar className="text-main" />
            <p>3.0</p>
          </div>
          <p className="text-sm text-[rgba(1,1,1,0.70)]">Beginner</p>
          <p className="text-sm text-[rgba(1,1,1,0.70)]">alice@gmail.com</p>
        </div>
      </div>
    </ProfileCard>
  );
};

export default Tutor;
