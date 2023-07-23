import { ReactNode } from "react";

interface PropType {
  title: string;
  children: ReactNode;
}

const ProfileCard = ({ title, children }: PropType) => {
  return (
    <div className="bg-white rounded-[10px] p-[20px] min-h-[218px]">
      <h3 className="text-xl text-textBlack font-semibold">{title}</h3>
      <div className="h-[1px] w-full my-4 bg-[rgba(202,195,179,0.60)]"></div>
      {children}
    </div>
  );
};

export default ProfileCard;
