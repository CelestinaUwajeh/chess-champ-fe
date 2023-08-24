import ProfileCard from "../../parent/child/[id]/profile/profile-card";

const Statistics = () => {
  return (
    <ProfileCard title="User statistics">
      <div className="text-textBlack flex flex-col gap-4">
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Last seen</span>
          <span>20 minutes ago</span>
        </div>
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Date joined</span>
          <span>12th may, 2023</span>
        </div>
      </div>
    </ProfileCard>
  );
};

export default Statistics;
