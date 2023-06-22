import dynamic from "next/dynamic";

import Hero from "@/components/hero";
import MissionSection from "@/components/mission-section";
import PageSectionHeader from "@/components/page-section_header";
import missionImg from "/public/mission-img.png";
import ListCard from "@/components/list-card";
import { whyItWorks } from "./why-it-works";
import crown from "/public/crown.svg";
import { testimonies } from "@/components/testimonial/demo-test";
import Pricing from "./pricing-section";
import { pricing } from "./pricing";
import Testimonials from "@/components/testimonial";

export default function Home() {
  return (
    <main className="">
      <Hero
        data={{
          image: "lg:bg-home-bg",
          header: "Unlock Your Child’s Innate Abilities Through Chess ",
          description:
            "At Chess Champs we teach young individuals how to play chess from the comfort of their homes.",
          link: { href: "/sign-up", text: "Sign Up" },
        }}
      />
      <section className=" bg-lightGrey px-3 py-10 lg:py-[101px] lg:px-[120px]">
        <PageSectionHeader
          data={{
            leftText: "Our",
            rightText: "Mission",
            sideToColor: "right",
            strokeWidth: "w-[223px]",
            extraStyles: "mb-7 lg:mb-14",
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
      <section className="border px-3 py-10 lg:py-[101px] lg:px-[120px]">
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
      <section className="border px-3 py-10 lg:py-[101px] lg:px-[120px] bg-bgPink">
        <PageSectionHeader
          data={{
            leftText: "Pricing",
            sideToColor: "left",
            strokeWidth: "w-[187px]",
            extraStyles: "mb-14",
            icon: crown,
          }}
        />
        <Pricing data={pricing} />
      </section>
      <section className="overflow-hidden border px-3 py-10 lg:py-[101px] lg:px-[120px] font-mont">
        <PageSectionHeader
          data={{
            leftText: "Testimonials",
            sideToColor: "left",
            strokeWidth: "w-[250px]",
            extraStyles: "mb-6",
          }}
        />
        <p className="text-center font-semibold text-black text-2xl mb-4">
          We don&apos;t just talk, <span className="text-main">we Act</span>
        </p>
        <p className="text-center">
          Here&apos;s why parents and teachers love chess champs
        </p>
        <Testimonials data={testimonies} />
      </section>
    </main>
  );
}
