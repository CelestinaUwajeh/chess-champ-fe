import Module from "../child/[id]/progress/module";
import Search from "./search";
import { question } from "@/utils/question";

const Help = () => {
  return (
    <div className="mb-16">
      <h1 className="mb-9 text-2xl font-semibold text-textBlack">
        Welcome to our help center
      </h1>
      <Search />
      <div className="p-8 bg-white rounded-[10px] mt-6">
        <Module modules={question} isModal />
      </div>
    </div>
  );
};

export default Help;
