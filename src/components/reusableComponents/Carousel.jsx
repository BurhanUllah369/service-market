import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick, shouldShowArrows } = props;
  if (!shouldShowArrows) return null;
  return (
    <IoIosArrowRoundForward
      className={className}
      style={{ ...style, display: "block", color: "black", marginTop: "-20px" }}
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
      style={{ ...style, display: "block", color: "black", marginTop: "-20px" }}
      onClick={onClick}
    />
  );
}

function Carousel({ heading, images }) {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [shouldShowArrows, setShouldShowArrows] = useState(true);

  useEffect(() => {
    const updateSlidesToShow = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setSlidesToShow(2.1);
        setShouldShowArrows(false);
      } else if (windowWidth < 1024) {
        setSlidesToShow(3);
        setShouldShowArrows(true);
      } else {
        setSlidesToShow(4);
        setShouldShowArrows(true);
      }

      if (images.length < 5) {
        setShouldShowArrows(false);
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
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow shouldShowArrows={shouldShowArrows} />,
    prevArrow: <SamplePrevArrow shouldShowArrows={shouldShowArrows} />,
  };

  return (
    <div className="w-11/12 mx-auto border-0 outline-none">
      <section className="flex items-center gap-2 sm:gap-4 mt-12 mb-3">
        <h1 className="text-lg sm:text-2xl font-semibold text-[#212529]">
          {heading}
        </h1>
        <div className="w-8 sm:w-16 h-[2px] bg-[#01788E] "></div>
      </section>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div
            className="h-[60px] xss:h-[80px] xs:h-[100px] sm:h-[150px] md:h-[140px]"
            key={index}
          >
            <a href="#" className="hover:underline">
              <img
                className="block mb-2 rounded w-full"
                src={item}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              <p className="text-sm sm:text-base font-semibold">
                Local moving in Dubai
              </p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
