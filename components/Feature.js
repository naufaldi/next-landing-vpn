import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full">
      <div className="max-w-screen-xl mt-24 px-16 mx-auto flex flex-col w-full text-center justify-center">
        <h3 className="text-4xl font-medium text-black-600 leading-relaxed">
          Choose Your Plan
        </h3>
        <p className="leading-normal w-6/12 mx-auto">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
        <div className="grid grid-flow-col grid-cols-3 gap-12 py-8 ">
          <div className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-16">
            <div className="mt-16">
              <Image src="/assets/Free.png" width={145} height={165} />
            </div>
            <p className="text-lg text-black-600 font-medium capitalize my-7">
              Free Plan
            </p>
            <ul className="flex flex-col justify-start text-left text-black-500">
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
            <div className="flex flex-col w-full justify-center mb-8 mt-auto">
              <p className="text-2xl text-black-600 text-center mb-4 mt-auto">
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
            <ul className="flex flex-col justify-start text-left text-black-500">
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
            <div className="flex flex-col w-full justify-center mb-8 mt-auto">
              <p className="text-2xl text-black-600 text-center mb-4 mt-auto">
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
            <ul className="flex flex-col justify-start text-left text-black-500">
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
            <div className="flex flex-col w-full justify-center mb-8 mt-auto">
              <p className="text-2xl text-black-600 text-center mb-4 mt-auto">
                Free
              </p>
              <button className="font-medium tracking-wide py-2 px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full uppercase">
                {" "}
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
