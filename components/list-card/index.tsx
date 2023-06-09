import Image, { StaticImageData } from "next/image";

export interface ListCarPropType {
  data: {
    hasSideLines?: boolean;
    items: {
      listType: string | StaticImageData;
      header: string;
      text: string;
    }[];
  };
}

const ListCard = ({
  data: { hasSideLines = false, items },
}: ListCarPropType) => {
  return (
    <div className="grid grid-cols-2 gap-20">
      {items.map(({ listType, header, text }, index) => (
        <div key={index} className="flex font-mont">
          {hasSideLines && (
            <div className="h-full w-[2px] overflow-hidden bg-[#CAC3B3] after:bg-main after:h-[75px] after:left-0 after:top-0 after:right-0 after:w-full"></div>
          )}
          <div className="flex-1 py-4">
            {typeof listType === "string" ? (
              <h2 className="text-main text-[36px] mb-1">{listType}</h2>
            ) : (
              <Image
                src={listType}
                alt={header}
                width={200}
                height={200}
                className="mb-4 h-11 w-auto"
              />
            )}
            <h3 className="mb-4 font-semibold text-2xl">{header}</h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
