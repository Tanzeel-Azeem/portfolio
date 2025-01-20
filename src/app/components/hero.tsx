import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div id="home" className="hero-bg flex justify-between flex-wrap flex-col lg:flex-row px-8 md:px-14 lg:px-20 xl:px-32 cursor-default  scroll-smooth">
      <div className="mt-20 lg:mt-28 text-center justify-center lg:text-left">
        <div className="my-3">
          <span className="text-2xl text-yellow-400 font-semibold ">
            My name is Tanzeel
          </span>
        </div>
        <span className="text-5xl font-semibold text-white leading-none">
          {`I'm`} a Creative <br />
          <span className="text-yellow-400"> Front-End-Developer</span> <br />
          From Karachi
          <span className="text-yellow-400">.</span>
        </span>{" "}
        <br />
        <div className="mt-7 flex justify-center lg:block">
          <Link href={'mailto:azeemtanzeel39@gmail.com'}>
          <button className="btn  px-6 py-2 rounded-lg font-medium hover:scale-105">
            Contact Me
          </button> 
           </Link>
          
      
        </div>
      </div>

      <div className="flex justify-center mt-10 lg:mt-0">
        <Image src="/picture2.jpeg" width={300} height={600} alt="" />
      </div>
      
    </div>
  );
};

export default Hero;
