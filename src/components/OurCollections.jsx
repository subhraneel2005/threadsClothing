import React from 'react';
import col1 from "../../public/col1.jpg";
import col2 from "../../public/col2.jpg";
import col3 from "../../public/col3.jpg";
import Image from 'next/image';

function OurCollections() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center" id="collections">
        <h1 className="text-[7vw]">Our Collections</h1>
        <Image height={300} width={200} alt="heroImg" src={col1} id="col1" className="-z-10 rounded-[24px]"/>
        <Image height={300} width={200} alt="heroImg" src={col2} id="col2" className="-z-10 rounded-[24px]"/>
        <Image height={300} width={200} alt="heroImg" src={col3} id="col3" className="-z-10 rounded-[24px]"/>
    </div>
  )
}

export default OurCollections