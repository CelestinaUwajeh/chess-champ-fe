import Image from "next/image";

import Hero from "@/components/hero";
import SponsorForm from "./sponsor-form";
import boyImg from "/public/boy.png";
import platinum from "/public/platinum.svg";
import gold from "/public/gold.svg";
import silver from "/public/silver.svg";
import diamond from "/public/diamond.svg";

const Sponsor = () => {
  return (
    <main>
      <Hero
        data={{
          image: "lg:bg-sponsor-bg",
          smImageSrc: boyImg,
          header: "Become a Sponsor Today",
          description: "Give to help change lives.",
        }}
      />
      <section className="pt-8 lg:pt-32 pb-[101px] lg:px-[60px] flex flex-col lg:flex-row font-mont bg-lightGrey gap-12">
        <div className="flex-1 px-3 lg:px-0 leading-[20px]">
          <p className="mb-7 text-sm lg:text-base">
            Our generous sponsors make it possible for Chess Champs to reach and
            teach underprivileged kids and children in slums how to play chess.
            Your donations will be used to pay for rental of technology devices,
            catering expenses, chess sets and volunteer thank-you packages.
          </p>
          <div className="flex flex-col gap-10">
            <p className="font-bold text-3xl">
              <span className="text-main">Sponsorship</span> Levels
            </p>
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col items-center gap-2">
                <Image src={diamond} alt="Diamond" />
                <p className="text-xl font-medium">
                  $200 <span className="text-xs font-normal">and above</span>
                </p>
                <p className="text-sm">Diamond</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={platinum} alt="platinum" />
                <p className="text-xl font-medium">$100</p>
                <p className="text-sm">Platinum</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={gold} alt="gold" />
                <p className="text-xl font-medium">$50</p>
                <p className="text-sm">Gold</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={silver} alt="Silver" />
                <p className="text-xl font-medium">$25</p>
                <p className="text-sm">Silver</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl">
          <p className="text-lg lg:text-2xl font-semibold mb-4 lg:mb-7 ml-3 lg:ml-14 mt-8">
            Your donation
          </p>
          <SponsorForm />
        </div>
      </section>
    </main>
  );
};

export default Sponsor;
