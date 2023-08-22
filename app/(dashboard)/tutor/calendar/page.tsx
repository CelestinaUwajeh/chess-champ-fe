import AppButton from "@/components/button";
import { ScrollArea } from "@/components/ui/scrollarea";
import Upcoming from "../../parent/child/[id]/calendar/upcoming";
import { Calendar } from "@/components/ui/calendar";
import Table from "./table";

const TutorCalendar = () => {
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
          <ScrollArea className="h-[270px] pr-4">
            <Upcoming isTutor />
          </ScrollArea>
        </div>
      </div>
      <div className="mt-10">
        <div>
          <h1 className="mb-10 text-lg font-semibold">Previous Classes</h1>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default TutorCalendar;
