import Hero from "@/components/hero";
import React from "react";

const Tutors = () => {
  return (
    <main>
      <Hero
        data={{
          image: "bg-tutors-bg",
          header: "Are you an Experienced Chess Player? ",
          description:
            "We are looking to building a network of chess tutors who have the ability to teach children how to play chess.",
          link: { href: "/sign-up", text: "Sign Up" },
        }}
      />
    </main>
  );
};

export default Tutors;
