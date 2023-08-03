import { formatCurrency } from "@/utils";
import ProfileCard from "./profile-card";
import Link from "next/link";

const Plan = () => {
  return (
    <ProfileCard title="Plan">
      <div className="text-[rgba(1,1,1,0.60)]">
        <div className="flex justify-between items-center mb-8">
          <p className="text-2xl font-medium">Basic</p>
          <p className="text-3xl text-main font-bold">
            {formatCurrency(15000, { noDecimals: true })}
          </p>
        </div>
        <div className="flex items-end gap-8 text-sm">
          <p className="flex-1">
            Perfect for young individuals with little or no knowledge on how to
            play chess.
          </p>
          <Link className="text-main" href="">
            Change plan
          </Link>
        </div>
      </div>
    </ProfileCard>
  );
};

export default Plan;
