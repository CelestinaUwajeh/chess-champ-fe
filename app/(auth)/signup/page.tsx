import Link from "next/link";
import Image from "next/image";

import parentCartoon from "/public/parent-cartoon.png";
import tutorCartoon from "/public/tutor-cartoon.png";
import studentCartoon from "/public/student-cartoon.png";

const authTypes = [
  {
    title: "Student",
    image: studentCartoon,
    link: "/signup/student",
  },
  {
    title: "Tutor",
    image: tutorCartoon,
    link: "/signup/tutor",
  },
  {
    title: "Parent",
    image: parentCartoon,
    link: "/signup/parent",
  },
];

const Signup = () => {
  return (
    <section className="bg-main mx-auto max-w-[827px] p-3 lg:px-14 py-10 lg:py-20 mt-10 font-mont rounded-xl">
      <h1 className="text-white font-bold text-2xl lg:text-4xl mb-4">
        Join Chess Champs as a..
      </h1>
      <div className="flex flex-col gap-4 lg:gap-10">
        {authTypes.map((authType) => {
          const { title, image, link } = authType;
          return (
            <Link
              key={title}
              href={link}
              className="bg-white flex items-center gap-4 lg:gap-20 px-4 lg:px-16 py-4 lg:py-8 rounded-xl"
            >
              <Image
                src={image}
                alt={`${title} link`}
                className=" h-16 lg:h-auto w-auto"
              />
              <span className="text-main font-semibold text-xl lg:text-4xl">
                {title}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Signup;
