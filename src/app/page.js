"use client"

import NavBarr from "@/components/NavBarr";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { GoArrowRight } from "react-icons/go";
import heroImg from "../../public/heroImg.jpg"

export default function Home() {

  useGSAP(() => {
    gsap.to("#heroImg", {
      duration: 2,
      x: -800,
    })
    gsap.to(".getStarted",{
      duration: 2,
      x: 800,
    })
  })
  return (
   <div className="w-full absolute">
    <NavBarr/>
    <div className="h-screen w-full flex justify-center items-center">
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
    <div className="w-full h-screen">

    </div>
   </div>
  );
}
