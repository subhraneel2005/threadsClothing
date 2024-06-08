import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { CiShoppingCart } from "react-icons/ci";

function NavBarr() {
  const navRef = useRef(null);
  let lastScrollY = 0;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      lastScrollY = window.scrollY;
      
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
          // User is scrolling down, hide the navbar
          gsap.to(navRef.current, { y: '-100%', opacity: 0, duration: 0.5 });
        } else {
          // User is scrolling up, show the navbar
          gsap.to(navRef.current, { y: '0%', opacity: 1, duration: 0.5 });
        }
        lastScrollY = currentScrollY;
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={navRef} className="sticky bg-gray-950 bg-opacity-80 top-0 px-2 py-6 bg-transparent md:px-2 flex justify-evenly">
      <div className="flex items-center justify-center">
        <ul><li className="font-bold">Threads Clothing</li></ul>
      </div>
      <ul className="flex gap-5 font-bold">
        <li className="cursor-pointer" onClick={() => scrollToSection('homePage')}>Home</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('collections')}>Collections</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('aboutUs')}>About Us</li>
      </ul>
      <ul className="flex gap-1 font-bold">
        <li>Cart</li>
        <CiShoppingCart size={30} className="pb-2 cursor-pointer"/>
      </ul>
    </div>
  );
}

export default NavBarr;
