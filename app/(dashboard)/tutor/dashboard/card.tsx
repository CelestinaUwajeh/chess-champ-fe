import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

import { cn } from "@/lib/utils";

interface PropType {
  image: StaticImageData;
  header: string;
  desc: string;
  descAtt?: string;
  time?: string;
  latter?: string;
  style?: CSSProperties;
  className?: string;
}

const Card = ({
  image,
  header,
  desc,
  time,
  latter,
  descAtt,
  style,
  className,
}: PropType) => {
  return (
    <div
      style={style}
      className={cn("flex items-center  p-6 bg-white", className)}
    >
      <div className=" aspect-square rounded-full mr-6">
        <Image src={image} alt="" />
      </div>
      <div className="flex-1">
        <p className="font-medium">{header}</p>
        <p className="text-sm">
          {desc} <span className="text-main">{descAtt}</span>
        </p>
        {!!time && (
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 bg-[rgba(1,1,1,0.60)] rounded-full"></div>
            <p className="text-sm text-[rgba(1,1,1,0.60)]">{time}</p>
          </div>
        )}
      </div>
      <p className="ml-6 text-sm">{latter}</p>
    </div>
  );
};

export default Card;
