import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div id="projects">
      <div className="text-center mt-60  scroll-smooth">
        <span className="logo text-4xl  font-semibold text-black leading-none">
          {" "}
          Projects {`I've`} Worked On <span className="text-yellow-400">
            .
          </span>{" "}
        </span>
      </div>

      <section className="flex justify-evenly flex-wrap   cursor-default mt-12">
        <Link
          href={"http://e-commerce-hackathon-69.vercel.app"}
          target="_blank"
        >
          <div className="parent-pic shadow-2xl border-2 h-[350px] py-5 px-4 hover:scale-95 duration-150 my-6 rounded-2xl mx-2">
            <div className="child-pic">
              <Image src={"/nike.png"} alt="" width={400} height={100} />
            </div>
            <div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-sm font-sans">
                  Next.Js | Tailwind CSS
                </span>
                <span>
                  <Link
                    href="https://github.com/Tanzeel-Azeem/E-Commerce-Hackathon"
                    target="_blank"
                  >
                    <Github className="hover:text-black text-gray-500" />
                  </Link>
                </span>
              </div>

              <div className="flex justify-between items-center ">
                <div className="pb-3">
                  <span className="px-5  text-xl font-semibold">
                    Nike Store Clone
                  </span>
                </div>
                <div>
                  <span className="px-5">2024</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* 2nd card */}

        <Link href={"http://expertizo-clone-69.vercel.app"} target="_blank">
          <div className="parent-pic shadow-2xl border-2 h-[350px] py-5  hover:scale-95 duration-150 my-6 px-4 rounded-2xl">
            <div className="child-pic">
              <Image src={"/expertizo.png"} alt="" width={400} height={100} />
            </div>
            <div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-sm font-sans">HTML | CSS</span>
                <span>
                  <Link
                    href="https://github.com/Tanzeel-Azeem/expertizo-clone"
                    target="_blank"
                  >
                    <Github className="hover:text-black text-gray-500" />
                  </Link>
                </span>
              </div>

              <div className="flex justify-between items-center ">
                <div className="pb-3">
                  <span className="px-5  text-xl font-semibold">
                    Expertizo Website Clone
                  </span>
                </div>
                <div>
                  <span className="px-5">2024</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* 3rd card */}
        <Link
          href={"https://saylani-login-page-69.netlify.app/"}
          target="_blank"
        >
          <div className="parent-pic shadow-2xl border-2 h-[350px] py-5  hover:scale-95 duration-150 my-6 px-4 rounded-2xl mx-2">
            <div className="child-pic">
              <Image
                src={"/saylani-login.png"}
                alt=""
                width={400}
                height={100}
              />
            </div>
            <div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-sm font-sans">
                  HTML | CSS | JavaScript
                </span>
                <span>
                  <Link
                    href="https://github.com/Tanzeel-Azeem/saylani-login-page"
                    target="_blank"
                  >
                    <Github className="hover:text-black text-gray-500" />
                  </Link>
                </span>
              </div>

              <div className="flex justify-between items-center ">
                <div className="pb-3">
                  <span className="px-5  text-xl font-semibold">
                    Saylani Login Page Clone{" "}
                  </span>
                </div>
                <div>
                  <span className="px-5">2024</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* 4th card */}

        <Link href={"http://rivo-69.vercel.app"} target="_blank">
          <div className="parent-pic shadow-2xl border-2 h-[350px] py-5  hover:scale-95 duration-150 my-6 px-4 rounded-2xl mx-2">
            <div className="child-pic">
              <Image src={"/rivo.png"} alt="" width={400} height={100} />
            </div>
            <div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-sm font-sans">HTML | CSS</span>
                <span>
                  <Link
                    href="https://github.com/Tanzeel-Azeem/Rivo"
                    target="_blank"
                  >
                    <Github className="hover:text-black text-gray-500" />
                  </Link>
                </span>
              </div>

              <div className="flex justify-between items-center ">
                <div className="pb-3">
                  <span className="px-5  text-xl font-semibold">
                    E-Commerce Website for <br />
                    <span className="px-5">Shopping</span> 
                  </span>
                </div>
                <div>
                  <span className="px-5 relative bottom-5">2024</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* 5th card */}

        <Link href={"https://portfolio-css-res.vercel.app/"} target="_blank">
          <div className="parent-pic shadow-2xl border-2 h-[350px] py-5  hover:scale-95 duration-150 my-6 px-4 rounded-2xl ">
            <div className="child-pic">
              <Image
                src={"/portfolio-css.png"}
                alt=""
                width={400}
                height={100}
              />
            </div>
            <div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-sm font-sans">
                  Next.Js | Tailwind CSS
                </span>
                <span>
                  <Link
                    href="https://github.com/Tanzeel-Azeem/portfolio-css-responsive"
                    target="_blank"
                  >
                    <Github className="hover:text-black text-gray-500" />
                  </Link>
                </span>
              </div>

              <div className="flex justify-between items-center ">
                <div className="pb-3">
                  <span className="px-5  text-xl font-semibold">
                    My Portfolio made by <br />{" "}
                    <span className="px-5">Next.Js and custom CSS</span>
                  </span>
                </div>
                <div>
                  <span className="px-5">2024</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* 6th card */}

        <Link href={"https://food-panda-clone-69.vercel.app/"} target="_blank">
          <div className="parent-pic shadow-2xl border-2 h-[350px] py-5  hover:scale-95 duration-150 my-6 px-4 rounded-2xl mx-2">
            <div className="child-pic">
              <Image src={"/food-panda.png"} alt="" width={400} height={100} />
              <span className="bg-red-600 text-white px-5 py-2 rounded-full relative bottom-48">
                NOT RESPONSIVE
              </span>
            </div>
            <div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-sm font-sans">HTML | CSS</span>
                <span>
                  <Link
                    href="https://github.com/Tanzeel-Azeem/Food-panda-clone"
                    target="_blank"
                  >
                    <Github className="hover:text-black text-gray-500" />
                  </Link>
                </span>
              </div>

              <div className="flex justify-between items-center ">
                <div className="pb-3">
                  <span className="px-5  text-xl font-semibold">
                    Food Panda Website <br /> <span className="px-5">Clone</span> 
                  </span>
                </div>
                <div>
                  <span className="px-5 relative bottom-5">2024</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Portfolio;
