import Image from "next/image";
import childcartoon from "/public/child-cartoon.png";
import Link from "next/link";
import AppButton from "@/components/button";

const children = [
  {
    name: "Sarry",
    image: childcartoon,
    enrolled: false,
  },
  {
    name: "Johny",
    image: childcartoon,
    enrolled: true,
  },
  {
    name: "Mecci",
    image: childcartoon,
    enrolled: false,
  },
];

const Children = () => {
  return (
    <div className="flex flex-col gap-4">
      {children.map((child) => {
        const { name, image, enrolled } = child;
        return (
          <Link
            href={`/parent/child/${name}/profile`}
            key={name}
            className="flex items-center px-6 py-4 bg-white rounded-[10px]"
          >
            <div className="flex-1 flex items-center gap-4">
              <Image src={image} alt={name} />
              <p>{name}</p>
            </div>
            <Link
              href={"/settings"}
              className="mr-4 text-sm text-main font-medium"
            >
              Edit settings
            </Link>
            <AppButton
              isLink
              to={`/signup`}
              size="medium"
              variant="primary"
              width="w-[97px]"
              disabled={enrolled}
            >
              {`Enroll${enrolled ? "ed" : ""}`}
            </AppButton>
          </Link>
        );
      })}
    </div>
  );
};

export default Children;
