import Image from "next/image";
import Attendance from "./attendance";
import Percentage from "./percentage";
import Points from "./points";
import check from "/public/module-check.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    number: 1,
    title: "Introduction to the game of chess",
    items: [
      "Name & identity chess pieces",
      "The momvement of every chess piece",
      "The movement of every chess piece",
    ],
    completed: true,
  },
  {
    number: 2,
    title: "Learn the rules of the game",
    items: [
      "Name & identity chess pieces",
      "The momvement of every chess piece",
      "The movement of every chess piece",
    ],
    completed: false,
  },
];

const Page = () => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-semibold mb-6">Progress</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Percentage />
        <Points />
        <Attendance />
      </div>
      <h3 className="text-2xl font-semibold my-6">Beginner class</h3>
      <div className="bg-white p-12 rounded-[10px] flex flex-col gap-6">
        {modules.map((module) => {
          const { number, title, items, completed } = module;
          return (
            <div key={number} className="p-6 border rounded-[10px]">
              <div className="flex justify-between items-center">
                <p className="font-medium">Module {number}</p>
                {completed && (
                  <div className="flex items-center gap-2">
                    <Image src={check} alt="check" className="text-main" />

                    <span className="text-sm text-main">Completed</span>
                  </div>
                )}
              </div>
              <div className="h-[1px] w-full bg-slate-100 my-8"></div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-2 mt-3 pl-2">
                      {items.map((item) => (
                        <li key={item} className="">
                          <div className="flex items-center gap-1">
                            <span>-</span>
                            <span>{item}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
