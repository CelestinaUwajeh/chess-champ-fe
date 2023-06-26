import CreateNewPasswordForm from "./form";

const CreateNewPassword = ({ params }: { params: { token: string } }) => {
  return (
    <>
      <section className="bg-white mx-auto max-w-[827px] px-3 lg:px-14 py-10 lg:py-20 mt-10 font-mont rounded-xl">
        <h1 className="text-black font-semibold text-2xl lg:text-4xl mb-4">
          Create a new password
        </h1>
        <p className="mb-10">
          For your security, we recommend that you choose a password you&apos;ve
          never used before
        </p>
        <CreateNewPasswordForm token={params.token} />
      </section>
      <div className="h-10"></div>
    </>
  );
};

export default CreateNewPassword;
