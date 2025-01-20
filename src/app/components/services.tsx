import { Hammer, MessageSquareMore, Pen } from "lucide-react";
import React from "react";

const Service = () => {
  return (
    <div id="services" className="max-w-screen-2xl mx-auto mt-40  scroll-smooth">
      <div className="text-center mt-20">
        <span className="logo text-4xl  font-semibold text-black leading-none">
          {" "}
          My Services <span className="text-yellow-400">.</span>{" "}
        </span>
      </div>

      <section className="flex justify-evenly flex-wrap px-8 md:px-14 lg:px-20  cursor-default mt-12">
        <div className="parent w-[350px] h-[450px] bg-white hover:bg-cyan-500 duration-300 hover:text-white text-center pt-12 px-7 mx-2 my-2 rounded-xl shadow-2xl border-b-8 border-cyan-500 hover:scale-105">
          <div className="py-3 px-3  flex justify-center ">
            <MessageSquareMore
              size={85}
              strokeWidth={2}
              className="icon bg-cyan-200  text-cyan-600  text-4xl  py-4  rounded-lg "
            />
          </div>
          <br />
          <span className="text-4xl font-bold font-sans mt-10 ">
            Web <br /> Development
          </span>{" "}
          <br />
          <div className="text-center pt-5">
            <span className="text-lg ">
              Efficient, innovative website <br /> development bringing your
              ideas to life with cutting-edge technology and design.
            </span>
          </div>
        </div>

        {/* 2nd card */}

        <div className="parent w-[350px] h-[450px] bg-white hover:bg-yellow-500 duration-300 hover:text-white text-center pt-12 px-7 mx-2 my-2  rounded-xl shadow-2xl border-b-8 border-yellow-500 hover:scale-105">
          <div className="py-3 px-3  flex justify-center">
            <Hammer
              size={85}
              strokeWidth={2}
              className="icon bg-yellow-200 text-yellow-600  text-4xl  py-4  rounded-lg  "
            />
          </div>
          <br />
          <span className="text-4xl font-bold font-sans mt-10 ">
            Creative <br /> Designing
          </span>{" "}
          <br />
          <div className="text-center pt-5">
            <span className="text-lg ">
              Transforming ideas into stunning visuals - your partner for
              creative, impactful, and tailored graphic designs.
            </span>
          </div>
        </div>

        {/* 3rd */}

        <div className="parent w-[350px] h-[450px] bg-white  hover:bg-green-500 duration-300 hover:text-white text-center pt-12 px-7 mx-2 my-2 rounded-xl shadow-2xl border-b-8 border-green-500 hover:scale-105">
          <div className="py-3 px-3  flex justify-center">
            <Pen
              size={85}
              strokeWidth={2}
              className="icon bg-green-200 text-green-600  text-4xl  py-4   rounded-lg "
            />
          </div>
          <br />
          <span className="text-4xl font-bold font-sans mt-10 ">
            UI/UX <br /> Desgining
          </span>{" "}
          <br />
          <div className="text-center pt-5">
            <span className="text-lg ">
              Crafting seamless experiences and intuitive interfaces – your
              go-to for creative, user-centered UI/UX design solutions
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
