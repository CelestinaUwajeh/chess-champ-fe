"use client";

import { useRouter } from "next/navigation";

import UpcomingCard from "../../parent/child/[id]/calendar/upcoming";

interface PropType {
  classes: {
    id: number;
    name: string;
    module: number;
    time: string;
  }[];
}

const Upcoming = ({ classes }: PropType) => {
  const router = useRouter();

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
            isStudent
            onClassStart={() => {
              router.push(`student/learn/${id}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default Upcoming;
