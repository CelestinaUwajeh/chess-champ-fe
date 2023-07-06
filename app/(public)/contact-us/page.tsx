import phone from "/public/phone.svg";
import mail from "/public/mail.svg";
import Image from "next/image";
import ContactForm from "./contact-form";

const ContactUs = () => {
  return (
    <main>
      <section className="bg-lightGrey pt-5 pb-[101px] lg:px-[60px] flex flex-col lg:flex-row font-mont">
        <div className="flex-1 px-3 lg:px-0 lg:pt-[101px]">
          <div className="h-1 w-[98px] lg:w-[134px] bg-main mb-8 lg:mb-16"></div>
          <h2 className="font-semibold mb-4 text-3xl lg:text-4xl">
            Get in touch
          </h2>
          <p className="mb-8 lg:mb-16 font-medium text-sm lg:text-base">
            We&apos;d really like to hear from you.
          </p>
          <p className="mb-4 text-sm lg:text-base">
            Fill out the contact form or message us using any of the medium
            below
          </p>
          <div className="mb-4 flex gap-2 text-sm lg:text-base">
            <Image src={phone} alt="phone" />
            <span>+234-4787-894-4894</span>
          </div>
          <div className="mb-4 flex gap-2 text-sm lg:text-base">
            <Image src={mail} alt="email" />
            <span>contact@thechesschamps.com</span>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
