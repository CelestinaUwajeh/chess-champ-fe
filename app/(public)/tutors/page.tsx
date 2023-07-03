import Hero from "@/components/hero";
import tutorSm from "/public/tutors_sm.png";

const Tutors = () => {
  return (
    <main>
      <Hero
        data={{
          image: "lg:bg-tutors-bg",
          smImageSrc: tutorSm,
          header: "Are you an Experienced Chess Player? ",
          description:
            "We are looking to build a network of chess tutors who have the ability to teach children how to play chess.",
          link: { href: "/signup", text: "Sign Up" },
        }}
      />
    </main>
  );
};

export default Tutors;
