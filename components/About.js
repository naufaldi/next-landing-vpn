import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="max-w-screen-xl mt-14 mb-14 px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-col grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-9/12">
          <h3 className="text-4xl font-medium leading-relaxed text-black-600">
            We Provide Many Features You Can Use
          </h3>
          <p className="my-2 text-black-500">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              Powerfull online protection.
            </li>
            <li className="relative circle-check custom-list">
              Internet without borders.
            </li>
            <li className="relative circle-check custom-list">
              Supercharged VPN
            </li>
            <li className="relative circle-check custom-list">
              No specific time limits.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
