import SponsorForm from "./sponsor-form";

const Sponsor = () => {
  return (
    <main>
      <section className="pt-5 pb-[101px] lg:px-[60px] flex flex-col lg:flex-row font-mont">
        <div className="flex-1 px-3 lg:px-0 lg:pt-[101px] leading-[20px]">
          <h2 className="font-semibold mb-4 text-2xl lg:text-4xl">
            Become a <span className="text-main">Sponsor</span> today
          </h2>
          <p className="mb-7 text-sm lg:text-base">
            Our generous sponsors make it possible for Chess Champs to reach and
            teach underprivileged kids and children in slums how to play chess.
            Your donations will be used to pay for rental of technology devices,
            catering expenses, chess sets and volunteer thank-you packages.
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Sponsorship Levels</p>
            <p>Diamond - $200</p>
            <p>Platinum - $100</p>
            <p>Gold - $50</p>
            <p>Silver - $25</p>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl">
          <p className="text-lg lg:text-2xl font-medium mb-4 lg:mb-7 ml-3 lg:ml-14 mt-14">
            Enter your information here
          </p>
          <SponsorForm />
        </div>
      </section>
    </main>
  );
};

export default Sponsor;
