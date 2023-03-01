import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="w-full p-8 flex justify-center">
        <div className="w-full text-center ">
          <Image
              src="/assets/rjh_logo.png"
              width={160}
              height={40}
              alt="RJH"
            />
          <p className="mb-4">
            <strong className="font-medium">Rajasthan Jat Hostels</strong>, a network of hostels run by community aimed at connecting students from all over Rajasthan and providing them with mentorship opportunities, career guidance and right direction to society.
          </p>
          <p className="mb-4">
            <strong className="font-medium">Address: </strong>Jat Chairitable Trust, Near first Raiway Crossing, Nehru Nagar, Barmer, Rajasthan 344001
          </p>
          <p className="mb-4">
            <strong className="font-medium">Email: </strong>rajasthanjathostel@gmail.com
          </p>
          <p className="mb-4">
            <strong className="font-medium">Phone: </strong>94138-10464
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2 justify-center">
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
          <p className="text-gray-400">©{new Date().getFullYear()} - Rajasthan Jat Hostel</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
