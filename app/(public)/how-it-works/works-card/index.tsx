import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AiOutlineCheck } from "react-icons/ai";

export interface WorksCardPropType {
  data: {
    imageLoc?: "left" | "right";
    image: StaticImageData;
    header: string;
    todos: string[];
    type: "parent" | "tutor" | "student";
  };
}

const WorksCard = ({ data }: WorksCardPropType) => {
  const { image, header, todos, imageLoc = "left", type } = data || {};
  return (
    <div
      className={`flex flex-col gap-8 lg:gap-14 font-mont ${
        imageLoc === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <Image src={image} alt={header} className="flex-1" />
      <div>
        <h4 className="text-base lg:text-3xl leading-9 mb-8 font-semibold">
          {header}
        </h4>
        <div className="flex flex-col gap-7">
          <div className="flex gap-4 items-center">
            <div className="w-5 h-5 rounded-full bg-main flex items-center justify-center">
              <AiOutlineCheck className="text-white" />
            </div>
            {type === "parent" ? (
              <span className="text-sm lg:text-base">
                <Link className="text-main" href="">
                  Sign up
                </Link>{" "}
                for a parent account
              </span>
            ) : type === "tutor" ? (
              <span className="text-sm lg:text-base">
                <Link className="text-main" href="">
                  Submit
                </Link>{" "}
                your application
              </span>
            ) : (
              <span className="text-sm lg:text-base">
                <Link className="text-main" href="">
                  Sign up
                </Link>{" "}
                for a free account using parent email
              </span>
            )}
          </div>
          {todos.map((todo) => {
            return (
              <div key={todo} className="flex gap-4 items-center">
                <div className="w-5 h-5 rounded-full bg-main flex items-center justify-center">
                  <AiOutlineCheck className="text-white" />
                </div>
                <span className="text-sm lg:text-base">{todo}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorksCard;
