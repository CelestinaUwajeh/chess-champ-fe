import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PartnersPropType {
  data: {
    link: string;
    image: StaticImageData;
  }[];
}

const Partners = ({ data }: PartnersPropType) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-7">
      {data.map((partner) => (
        <Link key={partner.link} href={partner.link}>
          <Image
            src={partner.image}
            alt={partner.link}
            className=" h-24 w-auto"
          />
        </Link>
      ))}
    </div>
  );
};

export default Partners;
