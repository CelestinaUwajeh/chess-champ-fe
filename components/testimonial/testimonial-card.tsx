import Image from "next/image";
import { TestimonyTypes } from "./demo-test";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface PropTypes {
  data: TestimonyTypes;
}

const TestimonialCard = ({ data }: PropTypes) => {
  const { image, name, testimony } = data || {};
  return (
    <div className="rounded-[20px] p-7 bg-lightGrey mx-3 min-h-[180px]">
      <span className="flex gap-4 items-center">
        <Avatar>
          <Image src={image} alt={"img"} />
          <AvatarFallback>{`${name[0]}`}</AvatarFallback>
        </Avatar>
        <span className="font-semibold">{name}</span>
      </span>
      <span className="mt-3">{testimony}</span>
    </div>
  );
};

export default TestimonialCard;
