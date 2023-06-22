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
        className={`bg-white ${image} hero lg:bg-[length:auto_100%] xl:bg-[length:55%_100%] bg-no-repeat bg-right h-[calc(100vh-56px)] lg:h-[calc(100vh-107px)] overflow-hidden`}
      >
        <div className="h-full flex flex-col justify-center lg:max-w-xl xl:max-w-2xl px-3 xl:pr-0 xl:pl-[120px] gap-4 z-20 relative">
          <h1 className="font-mont font-extrabold  text-4xl lg:text-5xl">
            {header}
          </h1>
          <p className="font-mont text-sm lg:text-lg">{description}</p>
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
