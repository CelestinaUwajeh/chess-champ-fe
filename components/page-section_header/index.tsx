import Image, { StaticImageData } from "next/image";
import stroke from "/public/stroke.png";

interface PropType {
  data: {
    leftText: string;
    rightText?: string;
    sideToColor?: "left" | "right";
    strokeWidth?: string;
    extraStyles?: string;
    icon?: StaticImageData;
  };
}

const PageSectionHeader = ({
  data: {
    leftText,
    rightText = "",
    sideToColor = "left",
    strokeWidth = "w-auto",
    extraStyles = "",
    icon,
  },
}: PropType) => {
  return (
    <div
      className={`${extraStyles} flex items-center justify-center flex-col gap-1`}
    >
      <span className="flex items-center text-3xl text-black gap-2 uppercase font-bold">
        {icon ? <Image src={icon} alt={leftText} /> : null}
        <h3 className={`${sideToColor === "left" ? "text-main" : ""}`}>
          {leftText}
        </h3>
        <h3 className={`${sideToColor === "right" ? "text-main" : ""}`}>
          {rightText}
        </h3>
      </span>
      <Image src={stroke} alt="stroke" className={`${strokeWidth}`} />
    </div>
  );
};

export default PageSectionHeader;
