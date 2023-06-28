import Hero from "@/components/hero";
import PageSectionHeader from "@/components/page-section_header";
import WorksCard from "./works-card";
import { parentsWorks, studentsWorks, tutorsWorks } from "./works-card/works";
import chessSm from "/public/work_small.png";

const Works = () => {
  return (
    <main>
      <Hero
        data={{
          image: "lg:bg-works-bg",
          smImageSrc: chessSm,
          header: "How it Works",
          description: "Welcome to Chess Champs! Here is how it works.",
          link: { href: "/sign-up", text: "Sign Up" },
        }}
      />
      <section className="bg-lightGrey px-3 py-10 lg:py-[101px] lg:px-[120px]">
        <PageSectionHeader
          data={{
            leftText: "For",
            rightText: "Parents",
            sideToColor: "right",
            strokeWidth: "w-[187px]",
          }}
        />
        <div className="mt-14">
          <WorksCard data={parentsWorks} />
        </div>
      </section>
      <section className="bg-lightGrey px-3 py-10 lg:py-[101px] lg:px-[120px]">
        <PageSectionHeader
          data={{
            leftText: "For",
            rightText: "Tutors",
            sideToColor: "right",
            strokeWidth: "w-[187px]",
          }}
        />
        <div className="mt-14">
          <WorksCard data={tutorsWorks} />
        </div>
      </section>
      <section className="bg-lightGrey px-3 py-10 lg:py-[101px] lg:px-[120px]">
        <PageSectionHeader
          data={{
            leftText: "For",
            rightText: "Students",
            sideToColor: "right",
            strokeWidth: "w-[187px]",
          }}
        />
        <div className="mt-14">
          <WorksCard data={studentsWorks} />
        </div>
      </section>
    </main>
  );
};

export default Works;
