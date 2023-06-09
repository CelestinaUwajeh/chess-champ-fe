import Image, { StaticImageData } from "next/image";
import AppButton from "../button";

interface PropType {
  data: {
    image: StaticImageData;
    header: string;
    text: string[];
    founder?: {
      name: string;
      title: string;
    };
    hasButton?: {
      text: string;
      url: string;
    };
  };
}

const MissionSection = ({
  data: { image, header, text, founder, hasButton },
}: PropType) => {
  return (
    <div className="flex gap-8 justify-center">
      <Image src={image} alt="image" className="flex-1" />
      <div className="flex-1">
        <h3 className="font-mont font-semibold text-2xl mb-6 text-black">
          {header}
        </h3>
        <div className="flex flex-col gap-4 font-mont">
          {text.map((item, index) => {
            return (
              <p className="font-light text-black" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <>
          {founder && (
            <p className="mt-6">
              Founder:{" "}
              <span className="font-bold font-mont">{founder.name}</span>{" "}
              <span className="font-light">{founder.title}</span>
            </p>
          )}
        </>
        {hasButton && (
          <div className="mt-6">
            <AppButton
              isLink
              size="medium"
              variant="primary"
              width="w-[134px]"
              to={hasButton.url}
            >
              {hasButton.text}
            </AppButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionSection;
