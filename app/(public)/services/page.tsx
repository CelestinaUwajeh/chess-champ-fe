import Hero from "@/components/hero";
import ListCard from "@/components/list-card";
import React from "react";
import { services } from "./services";
import AppButton from "@/components/button";

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
      <section className="bg-lightGrey py-[101px] px-[120px]">
        <h3 className="text-3xl font-mont font-bold text-center mb-14">
          Our <span className="text-main">Services</span> includes
        </h3>
        <ListCard data={{ hasSideLines: true, items: services }} />
        <div className="mt-20 flex justify-center">
          <AppButton
            isLink
            to="/contact-us"
            variant="primary"
            size="medium"
            width="w-[134px] text-sm"
          >
            Contact Us
          </AppButton>
        </div>
      </section>
    </main>
  );
};

export default Services;
