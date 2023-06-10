import Image, { StaticImageData } from "next/image";
import { AiOutlineCheck } from "react-icons/ai";

export interface WorksCardPropType {
  data: {
    imageLoc?: "left" | "right";
    image: StaticImageData;
    header: string;
    todos: string[];
  };
}

const WorksCard = ({ data }: WorksCardPropType) => {
  const { image, header, todos, imageLoc = "left" } = data || {};
  return (
    <div
      className={`flex gap-14 font-mont ${
        imageLoc === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <Image src={image} alt={header} className="flex-1" />
      <div>
        <h4 className="text-3xl leading-9 mb-8 font-semibold">{header}</h4>
        <div className="flex flex-col gap-7">
          {todos.map((todo) => {
            return (
              <div key={todo} className="flex gap-4 items-center">
                <div className="w-5 h-5 rounded-full bg-main flex items-center justify-center">
                  <AiOutlineCheck className="text-white" />
                </div>
                <span>{todo}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
