import Image from "next/image";
import React from "react";
import Maps from "../public/assets/HugeGlobal.svg";
import Netflix from "../public/assets/Icon/netflix.svg";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-next-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-back-fill.svg";
const Feature = () => {
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="text-4xl font-medium text-black-600 leading-relaxed">
            Choose Your Plan
          </h3>
          <p className="leading-normal w-6/12 mx-auto my-2">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
          <div className="grid grid-flow-col grid-cols-3 gap-12 py-12 px-4">
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-16">
              <div className="mt-16">
                <Image src="/assets/Free.png" width={145} height={165} />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-7">
                Free Plan
              </p>
              <ul className="flex flex-col justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  Free
                </p>
                <button className="font-medium tracking-wide py-2 px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full uppercase">
                  {" "}
                  Select
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-16">
              <div className="mt-16">
                <Image src="/assets/Free.png" width={145} height={165} />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-7">
                Free Plan
              </p>
              <ul className="flex flex-col justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Connect Anyware{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  $9 <span className="text-black-500">/ mo</span>
                </p>
                <button className="font-medium tracking-wide py-2 px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full uppercase">
                  {" "}
                  Select
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-16">
              <div className="mt-16">
                <Image src="/assets/Free.png" width={145} height={165} />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-7">
                Free Plan
              </p>
              <ul className="flex flex-col justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Connect Anyware{" "}
                </li>
                <li className="relative check custom-list my-2">
                  Get New Features{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                  $12 <span className="text-black-500">/ mo</span>
                </p>
                <button className="font-medium tracking-wide py-2 px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full uppercase">
                  {" "}
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <h3 className="text-4xl font-medium text-black-600 leading-relaxed w-4/12 mx-auto">
            Huge Global Network of Fast VPN{" "}
          </h3>
          <p className="leading-normal w-6/12 mx-auto my-2 w-6/12">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
          <div className="py-12 w-full px-8 mt-16">
            <Maps className="w-full h-auto" />
          </div>
          <div className="w-full flex justify-evenly items-center">
            {/* <Netflix className="h-18 w-auto" /> */}
            <img
              src="/assets/Icon/amazon.png"
              className="h-36 mt-2 w-auto"
              alt=""
            />
            <img
              src="/assets/Icon/netflix.png"
              className="h-20 w-auto"
              alt=""
            />
            <img src="/assets/Icon/reddit.png" className="h-12 w-auto" alt="" />
            <img
              src="/assets/Icon/discord.png"
              className="h-14 w-auto"
              alt=""
            />
            <img
              src="/assets/Icon/spotify.png"
              className="h-12 w-auto"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <h3 className="text-4xl font-medium text-black-600 leading-relaxed w-4/12 mx-auto">
            Trusted by Thousands of Happy Customer{" "}
          </h3>
          <p className="leading-normal mx-auto mb-2 mt-4 w-6/12">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
          <div className="py-12 w-full grid grid-flow-col grid-cols-3 gap-8">
            <div className="border border-gray-500 rounded-lg p-8 flex flex-col">
              <div className="flex w-full items-center">
                <Image
                  src="/assets/people-1.png"
                  height={50}
                  width={50}
                  alt="Icon People"
                />
                <div className="flex flex-col ml-5 text-left">
                  <p className="text-lg text-black-600">Viezh Robert</p>
                  <p className="text-sm text-black-500">Warsaw,Poland</p>
                </div>
                <div className="flex flex-none items-center ml-auto">
                  <p className="text-sm">4.5</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
            <div className="border border-gray-500 rounded-lg p-8 flex flex-col">
              <div className="flex w-full items-center">
                <Image
                  src="/assets/people-2.png"
                  height={50}
                  width={50}
                  alt="Icon People"
                />
                <div className="flex flex-col ml-5 text-left">
                  <p className="text-lg text-black-600">Viezh Robert</p>
                  <p className="text-sm text-black-500">Warsaw,Poland</p>
                </div>
                <div className="flex flex-none items-center ml-auto">
                  <p className="text-sm">4.5</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
            <div className="border border-gray-500 rounded-lg p-8 flex flex-col">
              <div className="flex w-full items-center">
                <Image
                  src="/assets/people-3.png"
                  height={50}
                  width={50}
                  alt="Icon People"
                />
                <div className="flex flex-col ml-5 text-left">
                  <p className="text-lg text-black-600">Viezh Robert</p>
                  <p className="text-sm text-black-500">Warsaw,Poland</p>
                </div>
                <div className="flex flex-none items-center ml-auto">
                  <p className="text-sm">4.5</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">
                “Wow... I am very happy to use this VPN, it turned out to be
                more than my expectations and so far there have been no
                problems. LaslesVPN always the best”.
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <div className="flex">
              <span className="mx-2 bg-orange-500 rounded-l-full rounded-r-full h-4 w-12"></span>
              <span className="mx-2 bg-gray-500 rounded-l-full rounded-r-full h-4 w-4"></span>
              <span className="mx-2 bg-gray-500 rounded-l-full rounded-r-full h-4 w-4"></span>
              <span className="mx-2 bg-gray-500 rounded-l-full rounded-r-full h-4 w-4"></span>
            </div>
            <div className="flex flex-none justify-between w-auto">
              <div className="mx-4 flex items-center justify-center h-16 w-16 rounded-full bg-white border-orange-500 border">
                <ArrowBack className="h-8 w-8 text-orange-500" />
              </div>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-white border-orange-500 border">
                <ArrowNext className="h-8 w-8" fill="#F53838" />
              </div>
            </div>
          </div>
          <div className="relative w-full mt-16">
            <div className="absolute rounded-xl  py-14 px-16 w-full flex justify-between items-center z-10 bg-white-500">
              <div className="flex flex-col text-left w-5/12">
                <h5 className="text-black-600 text-3xl leading-relaxed font-medium">
                  Subscribe Now for <br /> Get Special Features!
                </h5>
                <p>Let's subscribe with us and find the fun.</p>
              </div>
              <button className="py-4 px-16 text-white-500 font-semibold rounded-lg bg-orange-500">
                Get Started
              </button>
            </div>
            <div
              className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-56 top-0 mt-8 mx-auto left-0 right-0"
              style={{ filter: "blur(114px)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
