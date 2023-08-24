import ProfileCard from "../../parent/child/[id]/profile/profile-card";

const NoOfStudents = () => {
  return (
    <ProfileCard title="Total number of students">
      <div className="text-textBlack flex flex-col gap-4">
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Current</span>
          <span>20</span>
        </div>
        <div className="flex items-center">
          <span className="w-[200px] font-medium">In the past</span>
          <span>23</span>
        </div>
      </div>
    </ProfileCard>
  );
};

export default NoOfStudents;
