import React from "react";
import BackButton from "../parent/back-button";
import StudentForm from "./student-form";

const Student = () => {
  return (
    <section className="bg-white mx-auto max-w-[827px] p-3 lg:p-14 mt-10 font-mont rounded-xl">
      <BackButton />
      <h4 className="text-black font-bold text-base lg:text-2xl mb-10">
        Create student account
      </h4>
      <StudentForm />
    </section>
  );
};

export default Student;
