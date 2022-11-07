import React from "react";
import LogoVPN from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className='bg-white-300 pt-44 pb-24'>
      <div className='max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4'>
        <div className='row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start '>
          <LogoVPN className='h-8 w-auto mb-6' />
          <p className='mb-4'>
            <strong className='font-medium'>LaslesVPN</strong> is a
            private virtual network that has unique features and has
            high security.
          </p>
          <div className='flex w-full mt-2 mb-8 -mx-2'>
            <div className='socialLink'>
              <Facebook className='h-6 w-6' />
            </div>
            <div className='socialLink'>
              <Twitter className='h-6 w-6' />
            </div>
            <div className='socialLink'>
              <Instagram className='h-6 w-6' />
            </div>
          </div>
          <p className='text-gray-400'>
            ©{new Date().getFullYear()} - LaslesVPN
          </p>
        </div>
        <div className=' row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col'>
          <p className='text-black-600 mb-4 font-medium text-lg'>
            Product
          </p>
          <ul className='text-black-500 '>
            <li className='footerLink'>Download </li>
            <li className='footerLink'>Pricing </li>
            <li className='footerLink'>Locations </li>
            <li className='footerLink'>Server </li>
            <li className='footerLink'>Countries </li>
            <li className='footerLink'>Blog </li>
          </ul>
        </div>
        <div className='row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col'>
          <p className='text-black-600 mb-4 font-medium text-lg'>
            Engage
          </p>
          <ul className='text-black-500'>
            <li className='footerLink'>LaslesVPN ? </li>
            <li className='footerLink'>FAQ </li>
            <li className='footerLink'>Tutorials </li>
            <li className='footerLink'>About Us </li>
            <li className='footerLink'>Privacy Policy </li>
            <li className='footerLink'>Terms of Service </li>
          </ul>
        </div>
        <div className='row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col'>
          <p className='text-black-600 mb-4 font-medium text-lg'>
            Earn Money
          </p>
          <ul className='text-black-500'>
            <li className='footerLink'>Affiliate </li>
            <li className='footerLink'>Become Partner </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
