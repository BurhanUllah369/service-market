import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { IoIosCall } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Masonry from "react-layout-masonry";

const Menu = ({ heading, menuItems }) => {
  const [showLinks, setShowLinks] = useState(false);

  const handleclick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <section className="text-gray-600">
      <h1
        className="flex items-center justify-between lg:block gap-2 lg:text-xl border-b lg:border-0 pb-4 px-6 lg:px-0 lg:pb-0"
        onClick={handleclick}
      >
        <span>{heading}</span>
        <FaAngleDown className="block lg:hidden" />
      </h1>

      {menuItems.map((item, idx) => (
        <a
          className={`${
            showLinks ? "block" : "hidden"
          } lg:block ml-8 lg:ml-0 my-1 text-sm font-normal text-gray-600 hover:underline`}
          key={idx}
        >
          {item}
        </a>
      ))}
    </section>
  );
};

const Nav = () => {
  const links = [
    "Local moving",
    "International moving",
    "Villa moving",
    "Furniture moving",
    "Office moving",
    "Storage",
    "Furniture Storage",
    "Self Storage",
    "Car shipping",
    "Moving to Australia",
  ];
  const links1 = ["Local moving", "International moving"];
  const links2 = [
    "Local moving",
    "International moving",
    "Villa moving",
    "Furniture moving",
    "Office moving",
    "Storage",
    "Furniture Storage",
    "Self Storage",
  ];
  const links3 = [
    "Local moving",
    "International moving",
    "Villa moving",
    "Furniture moving",
    "Office moving",
  ];

  const [menu, setMenu] = useState(false);
  const [cols, setCols] = useState(3);

  const openMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setCols(1);
      } else {
        setCols(3);
      }
    };

    if (window.innerWidth < 1024) {
      setCols(1);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="w-full py-5 font-Inter font-semibold text-sm shadow-md hover:shadow-xl transition duration-150 ease-linear sticky top-0 z-50 bg-white">
      <section className="w-11/12 mx-auto flex justify-between items-center">
        <section className="flex gap-6 md:gap-12 items-center">
          <BiMenuAltLeft
            onClick={() => setMenu(true)}
            className="flex md:hidden text-xl text-gray-500"
          />
          <img className="w-24 sm:w-32" src={logo} alt="" />
          <section className="hidden md:flex text-gray-400">
            <button onClick={openMenu} className="flex items-center gap-1">
              <span>Our Services</span> <FaAngleDown />
            </button>
          </section>
        </section>
        <section className="flex gap-8 items-center">
          <a
            href="tel: 600 587 009"
            className="py-[4px] px-2 flex items-center gap-2 md:gap-3 border-[1px] border-[#3689b9] rounded text-[#3689b9]"
          >
            <IoIosCall />
            <span className="hidden md:block">600 587 009</span>
            <span className="block lg:hidden">Call</span>
          </a>
          <a href="#" className="hidden lg:block text-gray-700">
            Login
          </a>
        </section>
      </section>
      <section
        className={`${
          menu ? "absolute" : "hidden"
        } w-full h-dvh lg:h-auto sm:w-3/4 md:w-1/3 lg:w-2/3 xl:w-1/2 top-0 lg:top-20 left-0 lg:left-12 lg:px-12 pt-12 lg:pt-8 pb-12 bg-white shadow-2xl rounded-sm lg:rounded-t-r-3xl overflow-y-scroll lg:overflow-hidden`}
      >
        <button
          onClick={() => setMenu(false)}
          className="absolute top-2 right-2 lg:top-0 lg:right-0 p-1 bg-orange-500 text-white"
        >
          <RxCross2 className="text-xl" />
        </button>
        <a href="" className="block lg:hidden mb-6 border-b pb-4 px-6 lg:px-0">
          Login
        </a>

        <Masonry columns={cols} gap={20}>
          <Menu menuItems={links1} heading="Cleaning" />
          <Menu menuItems={links} heading="Cleaning" />
          <Menu menuItems={links1} heading="Gardening" />
          <Menu menuItems={links1} heading="Nannies and Maids" />
          <Menu menuItems={links2} heading="Healthcare" />
          <Menu menuItems={links2} heading="Salong at Home" />
          <Menu menuItems={links1} heading="Moving and Storage" />
        </Masonry>
      </section>
    </nav>
  );
};

export default Nav;
