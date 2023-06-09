import Hero from "@/components/hero";
import MissionSection from "@/components/mission-section";
import missionImg from "/public/about-mission-img.png";

const About = () => {
  return (
    <main>
      <Hero
        data={{
          image: "bg-about-bg",
          header: "Get to Know Us Better",
          description:
            "At Chess Champs, we teach children how to play chess from the comfort of their homes. Chess Champs was founded in 2021 with the goal of building a generation of strategic thinkers through playing chess. Our virtual learning approach has made Chess Champs notable for learning and leisure. We work with experienced chess tutors to deliver an exciting learning journey to children in Nigeria and Africa.",
          link: { href: "/sign-up", text: "Sign Up" },
        }}
      />
      <section className="bg-lightGrey py-[101px] px-[120px]">
        <h3 className="text-3xl font-mont font-bold text-center mb-14">
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
              "Our Mission is to help Children Develop their Minds, IQ & Cognitive Functions Chess Champs harnesses the power of game-based learning Growing up, I always loved to play chess.  Chess was a go-to game for me when I needed to stimulate my brain. It improved my thinking capacity as a child which reflected in the choices I made in life. Since my childhood, I have had a passion of teaching this educative game with its numerous benefits to children in Nigeria and Africa at large.",
              "In 2021, the Chess Champs platform was built to teach every child with or without education how to play the game of chess- chess is capable of developing innate abilities and sharpening of skills. Chess Champs  helps to foster interactions between children who play chess in Africa. Join us in building a generation of strategic thinkers through playing the game of chess.",
              "Looking forward to your involvement with Chess Champs ",
            ],
            founder: { name: "Celestina Edun", title: "Founder & CEO" },
          }}
        />
      </section>
    </main>
  );
};

export default About;
