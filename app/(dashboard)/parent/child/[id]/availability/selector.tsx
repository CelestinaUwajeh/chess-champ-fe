"use client";

import { useState } from "react";
import TimeSelector from "./time-selector";
import AppButton from "@/components/button";

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"] as const;

type DayOfWeek = (typeof days)[number];

const Selector = () => {
  const [daysTime, setDayTime] = useState<Record<DayOfWeek, string>>({
    sun: "",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: "",
  });
  return (
    <div className="px-6 py-8 bg-white rounded-[10px]">
      <div className="flex justify-between">
        {days.map((day) => {
          return (
            <div key={day} className="flex flex-col items-center gap-6">
              <p className="uppercase text-[rgba(1,1,1,0.80)]">{day}</p>
              <TimeSelector
                onSelect={(e) => {
                  setDayTime((value) => ({
                    ...value,
                    [day]: daysTime[day] === e ? "" : e,
                  }));
                }}
                value={daysTime[day]}
                startTime={9}
                endTime={18}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-[50px]">
        <AppButton
          isLink
          to={`/signup`}
          size="medium"
          variant="primary"
          width="w-[134px]"
        >
          Set
        </AppButton>
      </div>
    </div>
  );
};

export default Selector;
