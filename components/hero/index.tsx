import { StaticImageData } from "next/image";
import AppButton from "../button";

interface PropType {
  data: {
    image: string;
    header: string;
    description: string;
    link: {
      href: string;
      text: string;
    };
  };
}

const Hero = ({ data }: PropType) => {
  const {
    image,
    header,
    description,
    link: { href, text } = { href: "", text: "" },
  } = data || {};

  return (
    <section className="">
      <div
        className={`${image} hero xl:bg-[length:55%_auto] bg-no-repeat bg-right h-[calc(100vh-56px)] lg:h-[calc(100vh-107px)] overflow-hidden`}
      >
        <div className="h-full flex flex-col justify-center max-w-2xl pl-[120px] gap-4 z-20 relative">
          <h1 className="font-mont font-extrabold text-5xl">{header}</h1>
          <p className="font-mont text-lg">{description}</p>
          <AppButton
            isLink
            to={href}
            size="medium"
            width="w-[134px]"
            variant="primary"
          >
            {text}
          </AppButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
