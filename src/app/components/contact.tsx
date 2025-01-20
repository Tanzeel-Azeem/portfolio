import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-screen-2xl mx-auto mt-40  scroll-smooth">
      <div className="text-center mt-20">
        <span className="logo text-4xl  font-semibold text-black leading-none">
          Get In Touch <span className="text-yellow-400">.</span>
        </span>
      </div>
      <div className="flex justify-center text-center mt-14">
        <span className="text-xl ">
          {`I'm`} currently looking for a{" "}
          <span className="text-yellow-500 font-bold text-2xl">Remote job</span>{" "}
          or any new job{" "}
          <span className="text-yellow-500 font-bold text-2xl">
            Opportunities
          </span>{" "}
          . <br />
          Whether you have a project to discuss or just want to say{" "}
          <span className="text-yellow-500 font-bold text-2xl">Hi</span> , my
          inbox is open for <br />{" "}
          <span className="text-yellow-500 font-bold text-2xl">all </span>!
        </span>{" "}
        <br />
      </div>
      <div className="flex justify-center text-center mt-9">
        <Link href={"mailto:azeemtanzeel39@gmail.com"}>
          <button className="btn hover:scale-105">Message Me</button>
        </Link>
      </div>

      <div className="mt-16">
        <div className="text-center">
          <span className=" logo text-2xl font-semibold leading-none">
            You can also <span className="text-yellow-500">Contact</span> me
            from :
          </span>
        </div>
        <div className="flex justify-center mx-10 flex-wrap my-6">
          <div>
            {" "}
            {/*github */}
            <Link href={"https://github.com/Tanzeel-Azeem"} target="_blank">
              {" "}
              <Github
                className="mx-12 hover:text-gray-500 duration-300 hover:scale-125"
                size={30}
                strokeWidth={2}
              />
            </Link>
          </div>

          <div className="">
            {" "}
            {/*linkedIN */}
            <Link
              href={"https://www.linkedin.com/in/tanzeel-azeem-463049303/"}
              target="_blank"
            >
              {" "}
              <Linkedin
                className="mx-12 hover:text-gray-500 duration-300 hover:scale-125"
                size={30}
                strokeWidth={2}
              />{" "}
            </Link>
          </div>
          <div>
            {" "}
            {/*fb */}
            <Link href={"https://www.instagram.com/tanjoo.69/"} target="_blank">
              {" "}
              <Instagram
                className="mx-12 hover:text-gray-500 duration-300 hover:scale-125"
                size={30}
                strokeWidth={2}
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
