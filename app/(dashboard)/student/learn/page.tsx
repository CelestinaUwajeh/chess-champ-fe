import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { modules } from "@/utils/modules";
import Module from "../../parent/child/[id]/progress/module";
import AppButton from "@/components/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scrollarea";
import Table from "../../tutor/calendar/table";
import Upcoming from "./upcoming";

export const classes = [
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

const ModuleContent = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-2 xl:gap-4 h-[calc(100vh-140px)] overflow-y-auto bg-white">
      <div className="flex-1 p-2 xl:p-8 border rounded-[10px] overflow-y-auto">
        <Module modules={modules} isModal />
      </div>
    </div>
  );
};

const Learn = () => {
  const lessonModules = ["calendar", "modules"] as const;
  return (
    <div className="mb-10">
      <Tabs defaultValue={lessonModules[0]}>
        <div className="space-y-10 px-10 py-6 bg-white rounded-[10px]">
          <h1 className="text-2xl font-medium">Modules</h1>
          <Separator className="bg-[rgba(202,195,179,0.50)]" />
          <TabsList className="w-full flex items-center justify-between bg-transparent">
            {lessonModules.map((_module) => (
              <div key={_module} className="w-full">
                <TabsTrigger
                  value={_module}
                  className="flex-1 data-[state=active]:bg-bgPink data-[state=active]:text-main text-[rgba(1,1,1,0.60)] capitalize text-base"
                >
                  {_module}
                </TabsTrigger>
              </div>
            ))}
          </TabsList>
        </div>
        {lessonModules.map((_module) => {
          return (
            <TabsContent className="mt-10" key={_module} value={_module}>
              {_module === "calendar" ? (
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold">Calendar</h3>
                    <AppButton
                      variant="secondary"
                      size="medium"
                      width="w-[134px]"
                    >
                      Reset Availability
                    </AppButton>
                  </div>
                  <div className="bg-white rounded-[10px] p-10 flex gap-16">
                    <Calendar className="" mode="multiple" selected={[]} />
                    <div className="flex-1">
                      <p className="font-medium mt-4 mb-4">Upcoming classes</p>
                      <ScrollArea className="h-[270px] pr-4">
                        <Upcoming classes={classes} />
                      </ScrollArea>
                    </div>
                  </div>
                  <div className="mt-10">
                    <div>
                      <h1 className="mb-10 text-lg font-semibold">
                        Previous Classes
                      </h1>
                    </div>
                    <Table />
                  </div>
                </div>
              ) : (
                <ModuleContent />
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Learn;
