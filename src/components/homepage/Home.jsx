import React from "react";
import Carousel from "../reusableComponents/Carousel";
import WhyServiceMarket from "../reusableComponents/WhyServiceMarket";
import HowItWorks from "../reusableComponents/HowItWorks";
import Reviews from "../reusableComponents/Reviews";
import playstore from "../../assets/playstore.avif";
import appstore from "../../assets/appstore.svg";
import phones from "../../assets/phone.avif";

const CompanyLogos = ({ logoImg }) => {
  return (
    <section>
      <img className="w-full" src={logoImg} alt="" />
    </section>
  );
};

const Home = () => {
  const companyLogoImages = [
    "https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0011_Khaleej-Times.png?fit=crop&h=150&auto=format",
    "https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0011_Khaleej-Times.png?fit=crop&h=150&auto=format",
    "https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0006_Abu-Dhabi-World.png?fit=crop&h=150&auto=format",
    "https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0002_Wamda.png?fit=crop&h=150&auto=format",
    "https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0003_Entrepreneur.png?fit=crop&h=150&auto=format",
    "https://sm-prod-content.imgix.net/wp-content/uploads/2018/07/Media-Channels_PNG_0005_Emirates-24_7.png?fit=crop&h=150&auto=format",
  ];
  const cleaning = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  ];
  const moving = [
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
  ];
  const health = [
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1711497600&semt=ais",
  ];
  const maintainance = [
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
  ];
  return (
    <section className="w-11/12 md:w-5/6 mx-auto">
      <Carousel images={cleaning} heading="Most Popular Services in Dubai" />
      <Carousel images={moving} heading="Most Popular Services in Dubai" />
      <Carousel
        images={maintainance}
        heading="Most Popular Services in Dubai"
      />
      <Carousel images={health} heading="Most Popular Services in Dubai" />
      <Carousel images={cleaning} heading="Most Popular Services in Dubai" />
      <Carousel images={moving} heading="Most Popular Services in Dubai" />
      <Carousel
        images={maintainance}
        heading="Most Popular Services in Dubai"
      />
      <WhyServiceMarket />
      <HowItWorks />
      <Reviews />
      <section className="flex items-center gap-2 sm:gap-4 mt-12">
        <h1 className="text-md sm:text-2xl font-semibold text-[#212529]">
          As featured in
        </h1>
        <div className="w-10 sm:w-16 h-[2px] bg-[#01788E] "></div>
      </section>
      <section className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-8 lg:gap-12">
        {companyLogoImages.map((logo, idx) => (
          <CompanyLogos key={idx} logoImg={logo} />
        ))}
        {companyLogoImages.map((logo, idx) => (
          <CompanyLogos key={idx} logoImg={logo} />
        ))}
      </section>
      <section className="w-full my-12 p-4 flex flex-col md:flex-row gap-5 md:gap-0 relative bg-[#eff3fc] border border-gray-300">
        <section className="md:w-1/2">
          <h1 className="text-xl sm:text-2xl text-[#3689b9] font-semibold">
            Book and manage requests in our app
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Download the app and enjoy 20% off on your first booking
          </p>
        </section>
        <section className="md:w-1/3 flex flex-col lg:flex-row justify-end md:items-center gap-1">
          <img className="w-40" src={appstore} alt="" />
          <img className="w-40" src={playstore} alt="" />
        </section>
        <img
          className="absolute right-0 bottom-0 hidden sm:block"
          src={phones}
          alt=""
        />
      </section>
    </section>
  );
};

export default Home;
