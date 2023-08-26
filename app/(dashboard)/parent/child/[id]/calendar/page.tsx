import AppButton from "@/components/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scrollarea";
import { classes } from "@/app/(dashboard)/student/learn/page";
import UpcomingCard from "./upcoming";

const Page = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-semibold">Calendar</h3>
        <AppButton variant="secondary" size="medium" width="w-[134px]">
          Reset Availability
        </AppButton>
      </div>
      <div className="bg-white rounded-[10px] p-10 flex gap-16">
        <Calendar className="" mode="multiple" selected={[]} />
        <div className="flex-1">
          <p className="font-medium mt-4 mb-4">Upcoming classes</p>
          <ScrollArea className="h-[270px]">
            <div className="grid grid-cols-1 gap-5">
              {classes.map((item) => {
                const { id, name, module, time } = item;
                return (
                  <UpcomingCard
                    key={id}
                    name={name}
                    module={module}
                    time={time}
                    onClassStart={() => {}}
                  />
                );
              })}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Page;
