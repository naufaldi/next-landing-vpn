import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (

    <div class="container my-24 px-6 mx-auto" id="feature">
      <section class="mb-32 text-gray-800">
        <div class="flex justify-center">
          <div class="text-center max-w-[700px]">
            <p class="uppercase text-green-500 font-bold mb-6">Our Aim</p>
            <h2 class="text-3xl font-bold mb-6">Why?</h2>
            <p class="text-black-500 mb-12">
              Our aim is to create a network of JAT students who are empowered to become leaders in their communities and make a positive impact on society. By providing mentorship and guidance, we hope to help students achieve their goals and contribute to a brighter future for all.
        </p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
          <div class="mb-12">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">One Platform</p>
                <p class="text-black-500">We are Connectting all Hostels on One Platform</p>
              </div>
            </div>
          </div>

          <div class="mb-12">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Mentorship</p>
                <p class="text-black-500">Provide mentorship in different field by domain expert.</p>
              </div>
            </div>
          </div>

          <div class="mb-12">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Career Guidance</p>
                <p class="text-black-500">Provide Career guidance to the students.</p>
              </div>
            </div>
          </div>

          <div class="mb-12">
            <div class="flex">
              <div class="shrink-0 mt-1">
                <svg class="w-4 h-4 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z">
                  </path>
                </svg>
              </div>
              <div class="grow ml-4">
                <p class="font-bold mb-1">Empower Youth</p>
                <p class="text-black-500">Empowering youth to build better society.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
