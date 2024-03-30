import React from "react";
import headerImage from "../../assets/header-image.jpg";
import { IoCall, IoSearchSharp } from "react-icons/io5";
import stamp from "../../assets/stamp.avif"
import { IoPersonSharp } from "react-icons/io5";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const DropdownOptions = ({city}) => {
    return (
        <option className="p-2">{city}</option>
    )
}

const ReusableSection = ({icon, description}) => {
    return (
        <section className="flex gap-3 items-center">
            {icon}
            <p>{description}</p>
        </section>
    )
}

const Header = () => {
  return (
    <header className="relative mb-16">
      <section className="bg-black">
        <img
          className="w-full h-[500px] object-cover opacity-70 select-none"
          src={headerImage}
          alt=""
        />
      </section>
      <section className="w-11/12 mx-auto absolute top-1/2 md:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-xl sm:text-4xl font-semibold">Sit back, we'll take it from here</h1>
        <p className="text-xs sm:text-base font-medium mt-3 mb-8">
          Book or get free quotes for over 25 home services from trusted
          companies in Dubai
        </p>
        <form action="" className="w-full sm:w-2/3 md:w-1/2 mx-auto bg-white flex items-center rounded-md text-xs md:text-base text-black">
          <select name="" id="" className="w-24 sm:w-auto py-2 px-4 outline-none rounded-md bg-gray-100">
            <DropdownOptions city="Dubai"/>
            <DropdownOptions city="Abu Dhabi"/>
            <DropdownOptions city="Sharjah"/>
            <DropdownOptions city="Doha"/>
            <DropdownOptions city="Jeddah"/>
            <DropdownOptions city="Riyadh"/>
            <DropdownOptions city="Kuwait"/>
            <DropdownOptions city="Bahrain"/>
            <DropdownOptions city="Dammam"/>
            <DropdownOptions city="Muscat"/>
          </select>
          <input className="w-full py-2 px-4 outline-none" type="text" placeholder="Start typing to find a service" />
          <button className="py-2 px-4 bg-gray-100 rounded-t-md rounded-b-md">
            <IoSearchSharp className="sm:text-2xl" />
          </button>
        </form>
        <img className=" w-32 md:w-40 mt-6 float-right sm:absolute left-3/4 top-36 md:top-28" src={stamp} alt="" />
      </section>
      <section className="w-full hidden md:block py-6 bg-[#01788E]">
        <section className="w-11/12 mx-auto flex justify-between gap-5 text-white">
            <ReusableSection icon={<IoPersonSharp/>} description="150,000+ happy customers"/>
            <ReusableSection icon={<BiSolidMessageRounded/>} description="Over 15,000 reviews"/>
            <ReusableSection icon={<FaStar/>} description="Rated 4.8 out of 5"/>
            <ReusableSection icon={<FaShieldAlt/>} description="Trusted service professionals"/>
            <ReusableSection icon={<IoCall/>} description="Live customer support"/>
        </section>
      </section>
    </header>
  );
};

export default Header;
