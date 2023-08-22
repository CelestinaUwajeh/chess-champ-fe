import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { modules } from "@/utils/modules";
import Module from "../../parent/child/[id]/progress/module";
import { Separator } from "@/components/ui/separator";

const ModuleContent = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-2 xl:gap-4 h-[calc(100vh-140px)] overflow-y-auto bg-white">
      <div className="flex-1 p-2 xl:p-8 border rounded-[10px] overflow-y-auto">
        <Module modules={modules} isModal />
      </div>
    </div>
  );
};

const LessModule = () => {
  const lessonModules = ["beginner", "intermediate", "advanced"];

  return (
    <div className="mb-10">
      <Tabs defaultValue={lessonModules[0]}>
        <div className="space-y-10 px-10 py-6 bg-white rounded-[10px]">
          <h1 className="text-2xl font-medium">Modules</h1>
          <Separator className="bg-[rgba(202,195,179,0.50)]" />
          <TabsList className="w-full flex items-center justify-between bg-transparent">
            {lessonModules.map((_module) => (
              <TabsTrigger
                key={_module}
                value={_module}
                className="data-[state=active]:bg-bgPink data-[state=active]:text-main text-[rgba(1,1,1,0.60)] capitalize text-base"
              >
                {_module} Class
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        {lessonModules.map((_module) => {
          return (
            <TabsContent key={_module} value={_module}>
              <ModuleContent />
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default LessModule;
