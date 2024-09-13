import React, { useMemo } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import getScrollAnimation from "../utils/getScrollAnimation";

import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// Member Images
import GamageSir from "../public/Dr.JR_Gamage.jpg";
import KasunSir from "../public/Dr.Kasun.jpg";
import GayaniMadam from "../public/Dr.Gayani.jpg";
import PrabhathiyaSir from "../public/Mr.Prabhathiya.jpeg";
import Me from "../public/TharindaAnurajeewa.jpg";

const Team = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div id="team">
      <div className="pb-12 max-w-screen-xl mt-28 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Team
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 mx-auto">
            <MemberCard
              image={GamageSir}
              position="Chair"
              name="Dr JR Gamage"
            />
            <MemberCard
              image={GayaniMadam}
              position="Co-Chair"
              name="Dr Gayani Nandasiri"
            />
            <MemberCard
              image={KasunSir}
              position="Co-Chair"
              name="Dr Kasun De Silva"
            />
            <div className="flex flex-col justify-center items-center md:flex-row gap-6 md:col-start-1 md:col-span-3 md:row-start-2">
              <MemberCard
                image={PrabhathiyaSir}
                position="Local organizing Chair"
                name="Mr Prabhathiya Herath"
              />
              <MemberCard
                image={Me}
                position="Webmaster"
                name="Tharinda Anurajeewa"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

const MemberCard = ({ image, position, name }) => {
  return (
    <div className="shadow-md rounded-xl px-4 py-6">
      <div className="rounded-full">
        <Image
          className="rounded-full"
          src={image}
          alt="Member image"
          width={140}
          height={140}
          objectFit="fill"
        />
      </div>
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-lg">{position}</p>
    </div>
  );
};
