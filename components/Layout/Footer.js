import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-8 lg:px-16 grid grid-flow-col grid-cols-12 gap-4">
        <div className="col-span-4 col-start-1 col-end-5 flex flex-col items-start ">
          <LogoVPN className="h-8 w-auto mb-6" />
          <p className="mb-4">
            <strong className="font-medium">LaslesVPN</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">©2020LaslesVPN</p>
        </div>
        <div className="col-span-2 col-start-7 col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Product</p>
          <ul className="text-black-500 ">
            <li className="my-2">Download </li>
            <li className="my-2">Pricing </li>
            <li className="my-2">Locations </li>
            <li className="my-2">Server </li>
            <li className="my-2">Countries </li>
            <li className="my-2">Blog </li>
          </ul>
        </div>
        <div className="col-span-2 col-start-9 col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2">LaslesVPN ? </li>
            <li className="my-2">FAQ </li>
            <li className="my-2">Tutorials </li>
            <li className="my-2">About Us </li>
            <li className="my-2">Privacy Policy </li>
            <li className="my-2">Terms of Service </li>
          </ul>
        </div>
        <div className="col-span-2 col-start-11 col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2">Affiliate </li>
            <li className="my-2">Become Partner </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
