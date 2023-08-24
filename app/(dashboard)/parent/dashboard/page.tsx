import Image from "next/image";

import { Button } from "@/components/ui/button";
import parentnotice from "/public/parent-notice.png";
import ChildrenAccount from "./children-account";

const Dashboard = () => {
  return (
    <section>
      <div
        className="pt-6 px-8 mb-12 w-full rounded-[10px] flex items-center"
        style={{
          background:
            "linear-gradient(137deg, #930000 10.41%, #930000 10.42%, #E00000 85.43%)",
        }}
      >
        <div className="flex-1 text-white pb-6">
          <h1 className="mb-4 text-3xl">Welcome to Chess Champs</h1>
          <p>
            Enroll your children in a chess class to ensure they have access to
            all the features offered by Chess Champs. Got it
          </p>
          <Button className="bg-white text-main mt-4">Got it</Button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src={parentnotice} alt="" />
        </div>
      </div>
      <ChildrenAccount />
    </section>
  );
};

export default Dashboard;
