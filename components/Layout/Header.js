import React from "react";
import Link from "next/link";
import LogoVPN from "../../public/assets/Logo.svg";
const Header = () => {
  return (
    <header className="fixed top-0 w-full pt-4 z-30 bg-white-500">
      <nav className="max-w-screen-xl px-16 mx-auto grid grid-flow-col py-4">
        <div className="col-start-1 col-end-2 flex items-center">
          <LogoVPN className="h-8 w-auto" />
        </div>
        <ul className="col-start-4 col-end-8 flex text-black-500 items-center">
          <li className="mx-4 px-1">About</li>
          <li className="mx-4 px-1">Feature</li>
          <li className="mx-4 px-1">Pricing</li>
          <li className="mx-4 px-1">Testimonial</li>
          <li className="mx-4 px-1">Help</li>
        </ul>
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
          <Link href="/">
            <a className="text-black-600 mx-4 capitalize tracking-wide">
                Sign In
            </a>
          </Link>
          <button className="font-medium tracking-wide py-2 px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full">
            {" "}
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
