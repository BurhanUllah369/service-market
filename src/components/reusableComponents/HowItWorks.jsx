import React from "react";
import phoneImage from "../../assets/how-it-works-phone.avif";
import personImage from "../../assets/how-it-works-person.avif";
import beachImage from "../../assets/how-it-works-beach.avif";

const Container = ({ imageSrc, heading, description }) => {
  return (
    <section className="p-8 text-center">
      <img className="block mx-auto mb-4" src={imageSrc} alt="" />
      <section className="text-[#424242]">
        <h1 className="mb-3 text-lg sm:text-2xl font-semibold">{heading}Tell us what you need</h1>
        <p>
          {description}Let us know what service you are looking for. We offer more than 25 different home services, and we are here to help!
        </p>
      </section>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="w-11/12 mx-auto my-16 font-base text-gray-700">
      <section className="flex items-center gap-4 mt-6 mb-3">
        <h1 className="text-lg sm:text-2xl font-semibold text-[#212529]">
          Why ServiceMarket?
        </h1>
        <div className="w-16 h-[2px] bg-[#01788E] "></div>
      </section>
      <p>
        We are a leading home services marketplace in the Middle East with a
        large and growing customer base.
      </p>
      <section className="flex flex-col md:flex-row mt-6">
        <Container imageSrc={phoneImage} heading="" description="" />
        <Container imageSrc={personImage}  />
        <Container imageSrc={beachImage} />
      </section>
    </section>
  );
};

export default HowItWorks;
