import React from "react";
import servicesBg from "../../assets/footer-bg.avif";
import appstore from "../../assets/appstore.svg";
import playstore from "../../assets/playstore.avif";
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Masonry from "react-layout-masonry";

const Category = ({ heading, links }) => {
  return (
    <section className="mb-8 text-sm md:text-base">
      <h1 className="text-base md:text-2xl font-bold mb-4">{heading}</h1>
      <section className="flex flex-col gap-1">
        {links.map((link, idx) => (
          <a href="" key={idx} className="inline hover:underline">
            {link}
          </a>
        ))}
      </section>
    </section>
  );
};

const ServicesLinks = () => {
  const links = [
    "Local moving in Dubai",
    "International moving from Dubai",
    "Villa moving in Dubai",
    "Furniture moving in Dubai",
    "Office moving in Dubai",
    "Storage in Dubai",
    "Furniture Storage in Dubai",
    "Self Storage in Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
    "Car shipping in Dubai",
    "Moving to Australia from Dubai",
  ];
  const links1 = ["Local moving in Dubai", "International moving from Dubai"];
  const links2 = [
    "Local moving in Dubai",
    "International moving from Dubai",
    "Villa moving in Dubai",
    "Furniture moving in Dubai",
    "Office moving in Dubai",
    "Storage in Dubai",
    "Furniture Storage in Dubai",
    "Self Storage in Dubai",
    "Car shipping in Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
    "Moving to Australia from Dubai",
  ];
  const links3 = [
    "Local moving in Dubai",
    "International moving from Dubai",
    "Villa moving in Dubai",
    "Furniture moving in Dubai",
    "Office moving in Dubai",
  ];
  return (
    <section className="footer w-auto h-full relative text-white pb-4">
      <section className="w-11/12 md:w-3/4 pt-16 mx-auto">
        <Masonry columns={{
            0: 2,
            1024: 4,
          }}
          gap={40}>
          <Category heading="Moving & Storage" links={links} />
          <Category heading="Cooking" links={links1} />
          <Category heading="Cleaning Services" links={links1} />
          <Category heading="Moving & Storage" links={links2} />
          <Category heading="Healthcare" links={links1} />
          <Category heading="Gardening" links={links} />
          <Category heading="Pet Services" links={links3} />
        </Masonry>
      </section>
    </section>
  );
};

const Footer = () => {
  const footerLinks = [
    "FAQs",
    "The Home Project Blog",
    "Write a Review",
    "Service Compaints",
  ];
  const footerLinks2 = [
    "About Us",
    "Payment and refund policy",
    "Careers",
    "About us",
  ];
  const footerLinks3 = ["Become a partner"];
  return (
    <section className="w-full mt-12">
      <ServicesLinks />
      <section className="py-16 bg-[#054351] text-gray-100 text-sm sm:text-lg">
        <section className="w-11/12 md:w-3/4 mx-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
          <Category heading="Resources" links={footerLinks} />
          <Category heading="About Us" links={footerLinks2} />
          <Category heading="Partners" links={footerLinks3} />
          <section className="col-span-2 sm:col-span-3 xl:col-span-1">
            <h1 className="mb-5 text-2xl font-bold">Get in touch</h1>
            <section className="">
              <section>
                <p className="flex gap-12">
                  <span>Address:</span>
                  <span>
                    1403, Fortune Executive Tower, Cluster T, JLT, Dubai, UAE.
                  </span>
                </p>
                <p className="flex gap-12">
                  <span>Phone:</span>
                  <span>+971 4 506 1500</span>
                </p>
                <p className="flex gap-12">
                  <span>Fax:</span>
                  <span>+971 4 422 9823</span>
                </p>
                <p className="flex gap-12">
                  <span>Email:</span>
                  <span>
                    <a
                      href="mailto:support@servicemarket.com"
                      className="hover:underline"
                    >
                      support@servicemarket.com
                    </a>
                  </span>
                </p>
              </section>
            </section>
          </section>
        </section>
        <section className="w-11/12 md:w-3/4 mx-auto my-12 flex flex-col sm:flex-row gap-10 sm:gap-8 justify-between">
          <section>
            <h1 className="text-2xl font-bold mb-5">Download App</h1>
            <section className="flex gap-1 mb-4">
              <img className="w-32 sm:w-40" src={appstore} alt="" />
              <img className="w-32 sm:w-40" src={playstore} alt="" />
            </section>
          </section>
          <section className="md:w-1/4">
            <h1 className="text-2xl font-bold mb-5">Follow Us</h1>
            <section className="flex gap-2">
              <section className="w-10 p-3 bg-white rounded-full text-black">
                <FaFacebookF />
              </section>
              <section className="w-10 p-3 bg-white rounded-full text-black">
                <FaInstagram />
              </section>
              <section className="w-10 p-3 bg-white rounded-full text-black">
                <FaLinkedin />
              </section>
              <section className="w-10 p-3 bg-white rounded-full text-black">
                <FaGoogle />
              </section>
              <section className="w-10 p-3 bg-white rounded-full text-black">
                <FaXTwitter />
              </section>
            </section>
          </section>
        </section>
        <section className="w-11/12 md:w-3/4 mx-auto">
          <p>
            Service Souk DMCC is licensed by Dubai Health Authority (DHA) under
            License No. 8357061.
          </p>
          <p className="mt-4 font-semibold">
            © Copyright 2013 – 2024 |{" "}
            <a href="" className="hover:underline">
              Terms and Conditions
            </a>{" "}
            |{" "}
            <a href="" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </section>
      </section>
    </section>
  );
};

export default Footer;
