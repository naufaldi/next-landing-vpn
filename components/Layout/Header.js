import React, { useState, useEffect } from "react";
import Link from "next/link";
import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all pt-4"
        }
      >
        <nav className="px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <LogoVPN className="h-8 w-auto" />
            <div className="pl-4 pr-4 text-xl">
              Kaigen<b>AI</b>
            </div>
          </div>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="https://calendly.com/andrew_bass/30min">
              <div className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange">Talk to Us</div>
            </Link>
          </div>
        </nav>
      </header >
    </>
  );
};

export default Header;
