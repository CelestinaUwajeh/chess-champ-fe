import { CSSProperties } from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

import Card from "./card";

interface PropType {
  title: string;
  viewLink: string;
  style?: CSSProperties;
  className?: string;
  containerStyle?: string;
  data: {
    name: string;
    img: StaticImageData | string;
    time?: string;
    day?: string;
    percentage?: string;
    module: string;
    descAtt?: string;
  }[];
}

const Template = ({
  title,
  viewLink,
  style,
  className,
  data,
  containerStyle,
}: PropType) => {
  return (
    <div className="flex-1">
      <div className="flex justify-between mb-6">
        <h2 className="font-semibold">{title}</h2>
        <Link className="text-main" href={viewLink}>
          View All
        </Link>
      </div>
      <div className={containerStyle}>
        {!data.length ? (
          <p className="text-textBlack">You have no students at the moment.</p>
        ) : (
          <>
            {data.map((item) => {
              const { name, img, time, day, percentage, module, descAtt } =
                item;
              return (
                <Card
                  key={name}
                  image={img}
                  header={name}
                  desc={module}
                  time={time}
                  latter={percentage || day}
                  className={className}
                  style={style}
                  descAtt={descAtt}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Template;
