import React, { useMemo } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import getScrollAnimation from "../utils/getScrollAnimation";

import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import Logo from "../public/assets/Logo.png";

const About = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div
        className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
        id="about"
      >
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div
              className="h-full w-full p-4"
              variants={scrollAnimation}
            >
              <Image
                src={Logo}
                alt="ERU Symposium Logo"
                layout="responsive"
                quality={100}
                height={100}
                width={300}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
              variants={scrollAnimation}
            >
              <p className="text-lg">
                ERU Research Symposium-2024 is organized as an event parallel to
                the <strong>University of Moratuwa Research Week.</strong> ERU
                Symposium provides an excellent opportunity for academics,
                industry practitioners, and students to showcase their research.
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default About;
