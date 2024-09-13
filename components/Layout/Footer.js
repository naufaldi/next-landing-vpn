import React from "react";

import Image from "next/image";

import Logo from "../../public/assets/Logo.png";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image src={Logo} alt="ERU Logo" width={150} height={40} />
          <p className="my-4 text-sm">
            <strong>Engineering Research Unit (ERU)</strong> of the University
            of Moratuwa was set up in the late 80s with a view to disseminate
            the knowledge gained through research carried out at the Faculty of
            Engineering to the Scientific Community at large, and to promote
            research among Faculty members and Graduate Students.
          </p>
          {/* <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div> */}
          <p className="text-gray-400">©{new Date().getFullYear()} - ERU</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Links</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Home{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Guidelines{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Timeline{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Awards{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Team{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Contact</p>
          <div className="text-sm">
            <p>Engineering Research Unit,</p>
            <p>Faculty of Engineering,</p>
            <p>University of Moratuwa,</p>
            <p>Sri Lanka</p>
          </div>

          <div className="mt-4 text-sm">
            <p>+94 77 113 7559</p>
            <p>+94 11 265 0301 Ext: 4531</p>
          </div>
          <p className="mt-4 text-sm">herathrp@uom.lk</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
