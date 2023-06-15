import React from "react";
import SponsorForm from "./sponsor-form";

const Sponsor = () => {
  return (
    <main>
      <section className="bg-lightGrey pt-5 pb-[101px] px-[120px] flex font-mont">
        <div className="flex-1 pt-[101px]">
          <h2 className="font-semibold mb-4 text-4xl">
            Become a <span className="text-main">Sponsor</span> today
          </h2>
          <p className="mb-7">
            vasil rosåtoling. Otrohetskontroll. Ked ånera. Plana kosläpp. Dyren
            sybel. Sshoppingspion. Mir. Yrade task. Till nyror. Fangar.
            Benifåska derat. Devis ligangen. Nyssade kock.
            Jasminrevolutionrosåtoling. Otrohetskontroll. Ked ånera. Plana
            kosläpp. Dir. Yrade task. Till nyror. Fangar. Benifåska derat
          </p>
          <p className="font-bold mb-7">
            In you prefer to make a deposit or a bank transfer:
          </p>
          <p className="mb-4">Below are our details</p>
          <div className="mb-4">
            <span className="mr-4">Account Number:</span>
            <span className="font-medium">9393893938</span>
          </div>
          <div className="mb-4">
            <span className="mr-4">Account Name:</span>
            <span className="font-medium">Chess Champs</span>
          </div>
          <div className="mb-4">
            <span className="mr-4">Account Type:</span>
            <span className="font-medium">Current</span>
          </div>
          <div>
            <span className="mr-4">Bank Name</span>
            <span className="font-medium">Access Bank PLC</span>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl">
          <p className="text-2xl font-medium mb-7 ml-14 mt-14">
            Enter your information here
          </p>
          <SponsorForm />
        </div>
      </section>
    </main>
  );
};

export default Sponsor;
