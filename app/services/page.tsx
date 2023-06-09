import Hero from "@/components/hero";
import React from "react";

const Services = () => {
  return (
    <main>
      <Hero
        data={{
          image: "bg-services-bg",
          header: "Our Services",
          description:
            "Chess Champs offers a number of services to meet your needs.",
          link: { href: "/sign-up", text: "Sign Up" },
        }}
      />
    </main>
  );
};

export default Services;
