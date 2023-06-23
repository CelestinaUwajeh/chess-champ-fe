import BackButton from "../parent/back-button";
import TutorForm from "./tutor-form";

const Tutor = () => {
  return (
    <section className="bg-white mx-auto max-w-[827px] p-3 lg:p-14 mt-10 font-mont rounded-xl">
      <BackButton />
      <h4 className="text-black font-bold text-base lg:text-2xl mb-10">
        Submit your application
      </h4>
      <TutorForm />
    </section>
  );
};

export default Tutor;
