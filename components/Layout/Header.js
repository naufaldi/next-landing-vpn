import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

import Image from "next/image";
import NextLink from "next/link";

import Logo from "../../public/assets/Logo.png";

// icons
import {
  Home,
  HelpCircle,
  ScrollText,
  Trophy,
  CalendarDays,
  Users,
} from "lucide-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center cursor-pointer">
            <NextLink href="https://uom.lk/eru" target="_blank">
              <Image
                src={Logo}
                alt="ERU Symposium Logo"
                width={200}
                height={60}
              />
            </NextLink>

            {/* <LogoVPN className="h-8 w-auto" /> */}
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {HeaderNavLinks.map((link) => (
              <LinkScroll
                key={link.label}
                activeClass="active"
                to={link.href}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(link.href);
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === link.href
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 a")
                }
              >
                {link.label}
              </LinkScroll>
            ))}
          </ul>
          {/* <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                  Sign In
              </a>
            </Link>
            <ButtonOutline>Sign Up</ButtonOutline>
          </div> */}
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {HeaderNavLinks.map((link) => (
              <LinkScroll
                key={link.href}
                activeClass="active"
                to={link.href}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(link.href);
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === link.href
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent")
                }
              >
                <link.icon className="w-6 h-6 mr-2" />
                {link.label}
              </LinkScroll>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;

const HeaderNavLinks = [
  {
    label: "Home",
    href: "home",
    icon: Home,
  },
  {
    label: "About",
    href: "about",
    icon: HelpCircle,
  },
  {
    label: "Timeline",
    href: "timeline",
    icon: CalendarDays,
  },
  {
    label: "Guidelines",
    href: "guidelines",
    icon: ScrollText,
  },
  {
    label: "Awards",
    href: "awards",
    icon: Trophy,
  },
  {
    label: "Team",
    href: "team",
    icon: Users,
  },
];
