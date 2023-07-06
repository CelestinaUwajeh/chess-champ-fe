import Hero from "@/components/hero";
import MissionSection from "@/components/mission-section";
import missionImg from "/public/about-mission-img.png";
import aboutSm from "/public/misson_sm.png";
import Partners from "./partners/partners";
import { partners } from "./partners/demo-partners";
import Kickstart from "./kickstart";

const About = () => {
  return (
    <main>
      <Hero
        data={{
          image: "lg:bg-about-bg",
          smImageSrc: aboutSm,
          header: "Get to Know Us Better",
          description:
            "At Chess Champs, we teach children how to play chess from the comfort of their homes. Our virtual approach has made us notable for learning and leisure.",
          link: { href: "/signup", text: "Sign Up" },
        }}
      />
      <section className="bg-lightGrey px-3 py-10 lg:py-[101px] lg:px-[60px]">
        <h3 className="text-lg lg:text-3xl font-mont font-bold text-center mb-14">
          Our <span className="text-main">Mission</span> is to help Children
          Develop their Minds, IQ & Cognitive Functions
        </h3>
        <MissionSection
          data={{
            image: missionImg,
            header:
              "Help Children Develop their Minds, IQ & Cognitive Functions",
            text: [
              "Growing up, I always loved to play chess.  Chess was a go-to game for me when I needed to stimulate my brain. It improved my thinking capacity as a child which reflected in the choices I made in life.",
              "Since my childhood, I have had a passion of teaching this educative game with its numerous benefits to children in Nigeria and Africa at large.",
              "In 2021, the Chess Champs platform was built to teach every child with or without education how to play the game of chess- chess is capable of developing innate abilities and sharpening of skills. Chess Champs  helps to foster interactions between children who play chess in Africa. Join us in building a generation of strategic thinkers through playing the game of chess.",
              "Looking forward to your involvement with Chess Champs ",
            ],
            founder: { name: "Celestina Edun", title: "Founder & CEO" },
          }}
        />
      </section>
      <section className="bg-lightGrey px-3 py-10 lg:py-[101px] lg:px-[60px]">
        <h3 className="text-lg lg:text-3xl font-mont font-bold text-center mb-12">
          Meet our Sponsors
        </h3>
        <Partners data={partners} />
      </section>
      <section className="bg-white lg:pt-16 px-3 py-10 lg:px-[60px]">
        <Kickstart />
      </section>
    </main>
  );
};

export default About;
