import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import googleReviews from "../../assets/google-reviews.png"
import { IoMdArrowRoundForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick, shouldShowArrows } = props;
  if (!shouldShowArrows) return null;
  return (
    <IoIosArrowRoundForward
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, shouldShowArrows } = props;
  if (!shouldShowArrows) return null;
  return (
    <IoIosArrowRoundBack
      className={className}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

const Review = ({ name }) => {
  return (
    <section className="bg-[#F8FAFE] border-[1px] border-gray-300 p-4 m-5 text-gray-800">
      <h2 className="text-xl font-medium">{name}</h2>
      <p className="mt-4 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolor quos
        reiciendis, facilis voluptatum quisquam assumenda aperiam. Pariatur
        laborum praesentium repellat eius illo quae necessitatibus, dolor
        nostrum consectetur provident expedita.
      </p>
      <p className="mt-2 text-sm text-gray-600">13/02/2024</p>
      <section className="flex mt-2 text-orange-600">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </section>
    </section>
  );
};

function Carousel({ heading, images }) {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [shouldShowArrows, setShouldShowArrows] = useState(true);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 640) {
        setSlidesToShow(1);
        setShouldShowArrows(false);
      } else if (windowWidth < 768) {
        setSlidesToShow(2.35);
        setShouldShowArrows(false);
        setShowDots(false)
      } else if (windowWidth < 1200) {
        setSlidesToShow(3);
        setShouldShowArrows(true);
      } else {
        setSlidesToShow(4);
        setShouldShowArrows(true);
        setShowDots(false);
      }
    };

    updateSlidesToShow();

    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const settings = {
    infinite: true,
    dots: showDots,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow shouldShowArrows={shouldShowArrows} />,
    prevArrow: <SamplePrevArrow shouldShowArrows={shouldShowArrows} />,    
  };

  return (
    <div className="border-0 outline-none">
      <section className="flex items-center gap-4 mx-4 mt-6 mb-2">
        <h1 className="text-lg sm:text-2xl font-semibold text-[#212529]">
          Verified customer reviews
        </h1>
        <div className="w-16 h-[2px] bg-[#01788E] "></div>
      </section>
      <a
        href=""
        className="block mx-4 mb-8 text-base text-[#01788E] hover:underline"
      >
        Read over 15000 verified reviews
      </a>
      <Slider {...settings}>
        <Review name="John" />
        <Review name="Smith" />
        <Review name="Black" />
        <Review name="Matt" />
      </Slider>
      <section className="w-full flex flex-col md:flex-row mt-8">
        <section className="md:w-1/6 flex justify-center items-center p-8 md:p-4 border-[1px] border-b-0 md:border-b md:border-r-0 border-gray-300">
        <img className="w-32" src={googleReviews} alt="" />
        </section>
        <section className="w-full p-4 flex-3 border-[1px] border-gray-300 text-center md:text-left">
          <h1 className="text-lg md:text-xl font-semibold">What do customers say about ServiceMarket?</h1>
          <p className="text-sm md:text-base my-3">ServiceMarket has been rated 4.7 out of 5 based on 6526 reviews as of March 2024.</p>
          <a href="" className="flex items-center gap-1 font-semibold md:text-lg hover:underline"><span>Read all customer reviews</span> <IoMdArrowRoundForward/></a>
        </section>
      </section>
    </div>
  );
}

export default Carousel;
