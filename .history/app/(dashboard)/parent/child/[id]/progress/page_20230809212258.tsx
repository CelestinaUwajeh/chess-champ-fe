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
import Module from "./module";

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
      <Module modules={modules} />
    </div>
  );
};

export default Page;
