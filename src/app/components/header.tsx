import Image from "next/image";
import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="hero-bg flex justify-between items-center px-8 md:px-14 lg:px-20 xl:px-32 pt-7  cursor-pointer sticky top-0 z-30 py-3  ">
      <section>
        <Link href={"/"}>
          <span className="logo text-2xl xl:text-3xl font-semibold text-white ">
            Mohammad Tanzeel <span className="text-yellow-400">.</span>
          </span>
        </Link>
      </section>

      <section>
        <ul className=" gap-x-7 text-lg  text-white font-mono hidden md:flex">
          <li>
            
            <Link href={"#services"}> Services </Link>
          </li>
          <Link href={"#about"}>
          
            <li>About</li>
          </Link>
          <Link href={"#projects"}>
            
            <li>Projects</li>
          </Link>
          <Link href={"#contact"}>
            
            <li>Contact</li>
          </Link>
          <Link href={"https://resume-m1.vercel.app/"} target="_blank">
            
            <li className="hover:border-b  hover:border-solid hover:border-white duration-100">Resume</li>
          </Link>
        </ul>

        <Sheet>
          <SheetTrigger className=" block md:hidden text-white ">
            <AlignJustify size={34} strokeWidth={3} />
          </SheetTrigger>
          <SheetContent className="ul-bg   border-none h-[400px] w-[300px] rounded-2xl mx-auto mt-8">
            <SheetHeader>
              <SheetDescription>
                <ul className=" nav gap-x-5 text-lg py-7 font-semibold mr-32 text-white">
                  <li>Services</li>
                  <li>About</li>
                  <li>Projects</li>
                  <li>Contact</li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>
    </header>
  );
};

export default Header;
