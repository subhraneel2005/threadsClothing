"use client"

import NavBarr from "@/components/NavBarr";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GoArrowRight } from "react-icons/go";
import heroImg from "../../public/heroImg.jpg"
import OurCollections from "@/components/OurCollections";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutUs from "@/components/AboutUs";
import BottomBarr from "@/components/BottomBarr";

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#heroImg", {
      duration: 2,
      x: -800,
    })
    gsap.to(".getStarted",{
      duration: 1.4,
      x: 800,
    })
    
    gsap.to("#col1", {
      scrollTrigger: {
        trigger: "#collections",
        start: "top center",
      },
      duration: 2,
      x: -700,
    });

    gsap.to("#col2", {
      scrollTrigger: {
        trigger: "#collections",
        start: "top center",
      },
      duration: 2,
      x: -400,
    });

    gsap.to("#col3", {
      scrollTrigger: {
        trigger: "#collections",
        start: "top center",
      },
      duration: 2,
      x: -200,
    });
    gsap.to("#aboutUsImg", {
      scrollTrigger: {
        trigger: "#aboutUs",
        start: "top center",
      },
      duration: 2,
      x: -200,
    })
  })
  return (
   <div className="w-full absolute select-none">
    <NavBarr/>
    <div className="h-screen w-full flex justify-center items-center" id="homePage">
    <div className="getStarted border border-slate-200 rounded-lg cursor-pointer flex gap-3 justify-center items-center px-3 py-2">
      <p>Get Started</p>
      <GoArrowRight size={30} className="hover:rotate-90 transition-transform duration-300" />
    </div>
    <div className="block">
    <h1 className="text-[7vw] text-center">Threads!</h1>
    <p className="text-xl">Where style meets comfort.</p>
    <p className="text-xl"> Discover timeless fashion essentials curated just for you.</p>
    </div>
    <Image height={400} width={300} alt="heroImg" src={heroImg} id="heroImg" className="-z-10 rounded-[24px]"/>
    </div>
    <OurCollections/>
    <AboutUs/>
    <BottomBarr/>
   </div>
  );
}
