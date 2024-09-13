import React, { useMemo } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import getScrollAnimation from "../utils/getScrollAnimation";

import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

import MedalAward from "../public/assets/medal_award.png";

// Icons
import { Check } from "lucide-react";

const Awards = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div id="awards">
      <div className="pb-12 max-w-screen-xl mt-28 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Awards
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="mt-12 flex flex-col gap-4">
            <div className="flex flex-row items-center justify-center">
              <Check className="w-6 h-6 mr-2" />
              <p className="text-lg font-semibold">
                Proceedings will be published with ISSN: 3051-4894
              </p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <Check className="w-6 h-6 mr-2" />
              <p className="text-lg font-semibold text-orange-500">
                The abstracts will be published with a DOI in the University of
                Moratuwa Library Website
              </p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <Check className="w-6 h-6 mr-2" />
              <p className="text-lg font-semibold">
                A valuable certificate will be awarded.
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 mx-auto">
            <AwardCard title="Best Extended Abstract" />
            <AwardCard title="Best Poster" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;

const AwardCard = ({ title }) => {
  return (
    <div className="relative shadow-md rounded-xl px-8 py-6">
      <Image
        src={MedalAward}
        alt="Medal Award"
        width={150}
        objectFit="contain"
      />
      <p className="text-2xl font-semibold">{title}</p>
    </div>
  );
};
