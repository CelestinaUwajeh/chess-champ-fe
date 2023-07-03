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
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 ${
        hasSideLines ? "" : "gap-24"
      }`}
    >
      {items.map(({ listType, header, text }, index) => (
        <div key={index} className="flex font-mont">
          {hasSideLines && (
            <div className="relative h-full w-[1px] overflow-hidden bg-[#CAC3B3] after:absolute after:bg-main after:h-[75px] after:left-0 after:top-11 after:right-0 after:w-[1px] after:z-30 mr-5"></div>
          )}
          <div className={`flex-1 py-${hasSideLines ? "8" : "4"}`}>
            {typeof listType === "string" ? (
              <h2 className="text-main font-medium text-[36px] mb-1">
                {listType}
              </h2>
            ) : (
              <Image
                src={listType}
                alt={header}
                width={200}
                height={200}
                className="mb-4 h-11 w-auto"
              />
            )}
            <h3
              className={`mb-4 ${
                hasSideLines ? "text-4xl font-medium" : "text-2xl font-semibold"
              }`}
            >
              {header}
            </h3>
            <p>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCard;
