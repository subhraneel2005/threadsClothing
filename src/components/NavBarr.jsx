import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { CiShoppingCart } from "react-icons/ci";

function NavBarr() {
  return (
    <div className="sticky top-0 px-2 py-6 bg-transparent md:px-2 flex justify-evenly">
        <div className="flex items-center justify-center">
           <ul><li className="font-bold">Threads Clothing</li></ul>
        </div>
        <ul className="flex gap-5 font-bold">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <ul className="flex gap-1 font-bold">
        <li>Cart</li>
        <CiShoppingCart size={30} className="pb-2"/>
        </ul>
    </div>
  )
}

export default NavBarr