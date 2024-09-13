import React from "react";
import Image from "next/image";
// import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useRouter } from "next/router";
import Link from "next/link";

import UOM from "../public/assets/uom.jpg";

const Hero = () => {
  // const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  // const router = useRouter();

  // className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-2 py-6 sm:py-16"
  return (
    <div
      className="max-w-screen-xl mt-24 px-8 md:py-14 xl:px-16 mx-auto"
      id="home"
    >
      <div className="flex flex-col gap-4 md:flex-row items-center">
        <div className="flex flex-col justify-center items-start py-4">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            ERU Symposium 2024
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            ERU Symposium, organized by Faculty of Engineering, University of
            Moratuwa, provides a platform for researchers to showcase their
            latest research and innovations. The symposium brings academics,
            industry professionals, and students together for knowledge sharing
            and future collaboration.
          </p>

          <h4 className="py-4 text-xl font-semibold">
            December 10-11, 2024 | University of Moratuwa
          </h4>

          <Link
            href="https://cmt3.research.microsoft.com/ERUS2024"
            target="_blank"
          >
            <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none">
              Submit Extended Abstract
            </button>
          </Link>
          <p className="mt-2 text-sm">
            * You may have to create a CMT account prior to submitting the paper
          </p>
        </div>
        <div className="flex w-full">
          <div className="w-full">
            <Image
              src={UOM}
              alt="University of Moratuwa"
              quality={100}
              width={700}
              height={450}
              layout="responsive"
            />
          </div>
          {/* <motion.div
            className="h-full w-full"
            variants={scrollAnimation}
          ></motion.div> */}
        </div>
      </div>
      {/* <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        ></motion.div>
      </ScrollAnimationWrapper> */}
      {/* <div className="relative w-full flex">
        <ScrollAnimationWrapper className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div> */}
    </div>
  );
};

export default Hero;
