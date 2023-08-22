import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Table from "./table";

const Payments = () => {
  const payments = ["paid", "pending payments"];
  return (
    <div className="mb-10">
      <Tabs defaultValue={payments[0]}>
        <div className="space-y-10 px-10 py-6 bg-white rounded-[10px]">
          <h1 className="text-2xl font-medium">Payment History</h1>
          <Separator className="bg-[rgba(202,195,179,0.50)]" />
          <TabsList className="w-full flex items-center bg-transparent">
            {payments.map((_module) => (
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
        <div className="mt-12">
          <div>
            <h1 className="mb-10 text-lg font-semibold">Previous Classes</h1>
          </div>
          {payments.map((_module) => {
            return (
              <TabsContent key={_module} value={_module}>
                <Table />
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default Payments;
