import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const TEAMDATA = [
  {
    name: "ABCD",
    description: "speaker",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
  },{
    name: "ABCD",
    description: "speaker",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
  },{
    name: "ABCD",
    description: "speaker",
    image: "https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
  }
]

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Our People
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              “Alone we can do so little; <br/> together we can do so much.”
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="flex flex-wrap justify-between">
            <ScrollAnimationWrapper className="flex justify-center">
              {
                TEAMDATA.map((item, key)=>{
                  return(
                    <motion.div
                      variants={scrollAnimation}
                      className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 w-full lg:w-1/3 lg:px-12 xl:px-20"
                      whileHover={{
                        scale : 1.1,
                        transition: {
                          duration: .2
                        }
                      }}
                    >
                      <div class="w-full flex flex-col text-center">
                        <div class="w-full">
                          <div class="w-full px-8">
                            <img
                              src={item.image}
                              class="w-24 rounded-full shadow-lg dark:shadow-black/30" />
                          </div>
                          <p class="my-4 text-xl text-neutral-500 w-full">
                            {item.description}
                          </p>
                          <p class="italic w-full">{item.name}</p>
                        </div>
                      </div> 
                    </motion.div>
                    )
                  })
                }
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
