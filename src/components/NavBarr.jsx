import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CiShoppingCart } from "react-icons/ci";

function NavBarr() {

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutUs");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToCollections = () => {
    const contactUsSection = document.getElementById("collections");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("homePage");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sticky bg-gray-950 bg-opacity-80 top-0 px-2 py-6 bg-transparent md:px-2 flex justify-evenly">
      <div className="flex items-center justify-center">
        <ul><li className="font-bold">Threads Clothing</li></ul>
      </div>
      <ul className="flex gap-5 font-bold">
        <li className="cursor-pointer" onClick={scrollToHomePage}>Home</li>
        <li className="cursor-pointer" onClick={scrollToCollections}>Collections</li>
        <li className="cursor-pointer" onClick={scrollToAboutUs}>About Us</li>
      </ul>
      <ul className="flex gap-1 font-bold">
        <li>Cart</li>
        <CiShoppingCart size={30} className="pb-2 cursor-pointer"/>
      </ul>
    </div>
  );
}

export default NavBarr;
