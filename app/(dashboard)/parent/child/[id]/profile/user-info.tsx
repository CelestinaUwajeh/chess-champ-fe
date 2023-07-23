import ProfileCard from "./profile-card";

const UserInfo = () => {
  return (
    <ProfileCard title="User information">
      <div className="text-textBlack flex flex-col gap-4">
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Active</span>
          <span>20 minutes ago</span>
        </div>
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Date joined</span>
          <span>12th may, 2023</span>
        </div>
        <div className="flex items-center">
          <span className="w-[200px] font-medium">Parent email</span>
          <span>johndoe@gmail.com</span>
        </div>
      </div>
    </ProfileCard>
  );
};

export default UserInfo;
