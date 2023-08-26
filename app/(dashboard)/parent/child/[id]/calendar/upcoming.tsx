import Image from "next/image";

import tempImg from "/public/class-temp-img.png";
import AppButton from "@/components/button";

const classes = [
  {
    id: 1,
    name: "John Doe",
    module: 3,
    time: "9AM-10AM",
  },
  {
    id: 2,
    name: "Mariam Jae",
    module: 3,
    time: "9AM-10AM",
  },
  {
    id: 3,
    name: "Wale Cole",
    module: 2,
    time: "9AM-10AM",
  },
];

interface CardType {
  name: string;
  module: number;
  time: string;
  isTutor?: boolean;
  isStudent?: boolean;
  onClassStart?: () => void;
}

const UpcomingCard = ({
  name,
  module,
  time,
  isTutor,
  isStudent,
  onClassStart,
}: CardType) => {
  return (
    <div className=" flex items-center justify-between border-b bg-main rounded-[10px] pl-2">
      <div className="flex-1 flex items-center bg-white">
        <div className="flex flex-col items-center px-5 py-3 gap-3 bg-bgPink mr-4">
          <p className="text-2xl text-black text-opacity-80">24</p>
          <p className="text-black text-opacity-70">Nov</p>
        </div>
        <Image src={tempImg} alt={name} className="mr-7" />
        <div className="flex flex-col items-start text-black text-opacity-70">
          <p className="font-medium">{name}</p>
          <p className="text-sm">Module {module}</p>
          {(isTutor || isStudent) && (
            <div className="bg-white h-full flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#CAC3B3]"></div>
              <p className="text-black text-opacity-70 text-sm">{time}</p>
            </div>
          )}
        </div>
      </div>
      {isTutor || isStudent ? (
        <div className="flex items-center h-full bg-white">
          <AppButton
            size="medium"
            variant="primary"
            width="w-[97px]"
            onClick={onClassStart}
          >
            {isStudent ? "Join class" : "Start class"}
          </AppButton>
        </div>
      ) : (
        <div className="bg-white h-full flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#CAC3B3]"></div>
          <p className="text-black text-opacity-70 text-sm">{time}</p>
        </div>
      )}
    </div>
  );
};

const Upcoming = ({
  isTutor,
  isStudent,
  onClassStart,
}: Pick<CardType, "isTutor" | "isStudent" | "onClassStart">) => {
  return (
    <div className="grid grid-cols-1 gap-5">
      {classes.map((item) => {
        const { id, name, module, time } = item;
        return (
          <UpcomingCard
            key={id}
            name={name}
            module={module}
            time={time}
            isTutor={isTutor}
            isStudent={isStudent}
            onClassStart={onClassStart}
          />
        );
      })}
    </div>
  );
};

export default Upcoming;
