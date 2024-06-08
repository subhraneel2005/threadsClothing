import Image from 'next/image'
import React from 'react'
import aboutUs from "../../public/aboutUs.jpg"

function AboutUs() {
  return (
        <div id="aboutUs" className="min-h-screen w-full flex justify-center items-center">
            <div className="h-auto w-auto block space-y-3">
            <div className="flex justify-center items-center h-auto w-auto">
            <h1 className="text-[7vw] text-center">About Us</h1>
            <Image id="aboutUsImg" alt="aboutUS image" height={200} width={400} src={aboutUs} className="-z-10 rounded-[24px]"/>
            </div>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 text-xl px-6">Welcome to Threads, where fashion meets comfort. We are dedicated to curating a unique collection of clothing that blends contemporary trends with timeless classics. Our mission is to provide high-quality, stylish pieces that make you feel confident and look great every day. At Threads, we believe in effortless elegance and the power of a well-chosen wardrobe. Join us on a journey of discovering your personal style with our carefully selected range of apparel.</p>
            </div>
        </div>
  )
}

export default AboutUs