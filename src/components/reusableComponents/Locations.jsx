import React from "react";
import map from "../../assets/map.png";

const Country = ({ heading,cities,idx }) => {
  return (
    <section>
      <h1 className="text-lg font-semibold">{heading}</h1>
      {cities[idx].map((e,index) => (
        <section key={index} className="">
          <a className="hover:underline" href="">{e}</a>
        </section>
      ))}
    </section>
  );
};

const Locations = () => {
  const cities = [
    ["Abu Dhabi", "Dubai", "Sharjah"],
    ["Doha"],
    ["Jeddah", "Riyadh", "Dammam"],
    ["Muscaat"],
    ["Kuwait City"],
    ["Manama"],
  ];
  return (
    <section className="w-11/12 md:w-5/6 mx-auto">
      <section className="flex items-center gap-2 sm:gap-4 mt-12">
        <h1 className="text-md sm:text-2xl font-semibold text-[#212529]">
          Service Market locations
        </h1>
        <div className="w-10 sm:w-16 h-[2px] bg-[#01788E] "></div>
      </section>
      <p className="mt-2">We are currently available in:</p>
      <section className="flex">
      <section className="md:w-2/3 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 sm:gap-12">
        <Country heading="United Arab Emirates" cities={cities} idx={0}/>
        <Country heading="Qatar" cities={cities} idx={1}/>
        <Country heading="Saudi Arabia" cities={cities} idx={2}/>
        <Country heading="Oman" cities={cities} idx={3}/>
        <Country heading="Kuwait" cities={cities} idx={4}/>
        <Country heading="Bahrain" cities={cities} idx={5}/>
      </section>
      <img className="hidden md:block" src={map} alt="" />
      </section>
    </section>
  );
};

export default Locations;
