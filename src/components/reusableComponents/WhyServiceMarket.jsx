import React from "react";
import homeIcon from "../../assets/why-service-market-home.avif";
import starIcon from "../../assets/why-service-market-star.avif";
import womanIcon from "../../assets/why-service-market-woman.avif";

const Container = ({ imageSrc }) => {
  return (
    <section className="p-8 border-[1px] border-gray-300 text-center">
      <img className="block mx-auto mb-4" src={imageSrc} alt="" />
      <section className="text-[#424242]">
        <h1 className="mb-3 text-lg sm:text-2xl font-semibold">
          Why ServiceMarket?
        </h1>
        <p>
          We have made it our business to make it easy for you to get any help
          you might need for your home in one place.
        </p>
      </section>
    </section>
  );
};

const WhyServiceMarket = () => {
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
        <Container imageSrc={homeIcon} />
        <Container imageSrc={starIcon} />
        <Container imageSrc={womanIcon} />
      </section>
    </section>
  );
};

export default WhyServiceMarket;
