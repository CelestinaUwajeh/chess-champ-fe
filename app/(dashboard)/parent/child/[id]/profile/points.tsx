import Image from "next/image";

import ProfileCard from "./profile-card";
import star from "/public/star.png";

const Points = () => {
  return (
    <ProfileCard title="Points Accumulated">
      <div>
        <div className="flex items-end gap-4">
          <Image src={star} alt="points" />
          <div>
            <span className="text-textBlack text-opacity-90 text-2xl font-medium">
              5.62
            </span>
            <span className="text-sm font-semibold"> Points</span>
          </div>
        </div>
      </div>
    </ProfileCard>
  );
};

export default Points;
