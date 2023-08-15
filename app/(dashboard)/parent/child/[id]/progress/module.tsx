import Image from "next/image";

import check from "/public/module-check.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PropType {
  modules: {
    header: string;
    title: string;
    items: string[];
    completed: boolean;
  }[];
  isModal?: boolean;
}

const Module = ({ modules, isModal }: PropType) => {
  return (
    <div
      className={`bg-white ${
        isModal ? "" : "p-12"
      } rounded-[10px] flex flex-col gap-6`}
    >
      {modules.map((module) => {
        const { header, title, items, completed } = module;
        return (
          <div key={header} className="p-6 border rounded-[10px]">
            <div className="flex justify-between items-center">
              <p className="font-medium">{header}</p>
              {!isModal && completed && (
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
  );
};

export default Module;
