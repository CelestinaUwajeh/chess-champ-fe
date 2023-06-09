import Hero from "@/components/hero";
import MissionSection from "@/components/mission-section";
import PageSectionHeader from "@/components/page-section_header";
import missionImg from "/public/mission-img.png";
import ListCard from "@/components/list-card";
import { whyItWorks } from "./why-it-works";
import crown from "/public/crown.svg";

export default function Home() {
  return (
    <main className="">
      <Hero
        data={{
          image: "bg-home-bg",
          header: "Unlock Your Child’s Innate Abilities Through Chess ",
          description:
            "At Chess Champs we teach young individuals how to play chess from the comfort of their homes.",
          link: { href: "/sign-up", text: "Sign Up" },
        }}
      />
      <section className="bg-lightGrey py-[101px] px-[120px]">
        <PageSectionHeader
          data={{
            leftText: "Our",
            rightText: "Mission",
            sideToColor: "right",
            strokeWidth: "w-[223px]",
            extraStyles: "mb-14",
          }}
        />
        <MissionSection
          data={{
            image: missionImg,
            header:
              "Help Children Develop their Minds, IQ & Cognitive Functions",
            text: [
              "Chess is an excellent game that helps children develop their minds, increasetheir IQ, and improve their cognitive function. By playing chess regularly, children can enhance their memory, concentration, critical thinking, and  problem-solving skills. It can also promote creativity, boost self-esteem, and help them develop a love for learning.",
            ],
            hasButton: {
              url: "/sign-up",
              text: "Sign Up",
            },
          }}
        />
      </section>
      <section className="py-[101px] px-[120px]">
        <PageSectionHeader
          data={{
            leftText: "Why",
            rightText: "Us",
            sideToColor: "left",
            strokeWidth: "w-[187px]",
            extraStyles: "mb-14",
          }}
        />
        <ListCard
          data={{
            items: whyItWorks,
          }}
        />
      </section>
      <section className="py-[101px] px-[120px] bg-bgPink">
        <PageSectionHeader
          data={{
            leftText: "Pricing",
            sideToColor: "left",
            strokeWidth: "w-[187px]",
            extraStyles: "mb-14",
            icon: crown,
          }}
        />
      </section>
    </main>
  );
}
