import AppButton from "@/components/button";
import { Calendar } from "@/components/ui/calendar";
import Upcoming from "./upcoming";
import { ScrollArea } from "@/components/ui/scrollarea";

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
            <Upcoming />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Page;
