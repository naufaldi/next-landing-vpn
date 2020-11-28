import React from "react";
import Image from "next/image";
import UserIcon from "../public/assets/Icon/heroicons_sm-user.svg";
const Hero = () => {
  return (
    <>
      <div className="grid grid-flow-col grid-cols-2 gap-8 py-16 ">
        <div className=" flex flex-col justify-center items-start">
          <h1 className="text-5xl font-medium text-black-600 leading-normal">
            Want anything to be easy with <strong>LaslesVPN</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </p>
          <button className="py-4 px-16 text-white-500 font-semibold rounded-lg bg-orange-500">
            Get Started
          </button>
        </div>
        <div className="flex w-full">
          <Image
            src="/assets/Illustration1.png"
            alt="VPN Illustrasi"
            width={612}
            height={383}
          />
        </div>
      </div>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-cols-3 py-9 divide-x-2 divide-gray-100 bg-white-500 z-10">
          <div className="flex items-center justify-center py-6">
            <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
              <UserIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-black-600 font-bold">90+</p>
              <p className="text-lg text-black-500">Users</p>
            </div>
          </div>
          <div className="flex items-center justify-center py-6">
            <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
              <UserIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-black-600 font-bold">90+</p>
              <p className="text-lg text-black-500">Users</p>
            </div>
          </div>
          <div className="flex items-center justify-center py-6">
            <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
              <UserIcon className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-black-600 font-bold">90+</p>
              <p className="text-lg text-black-500">Users</p>
            </div>
          </div>
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </>
  );
};

export default Hero;
