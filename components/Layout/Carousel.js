import React from "react";
import Image from "next/image";
import ButtonPrimary from "../misc/ButtonPrimary";
import Slider from "react-slick";

const Carousel = ({
  carouselContent = [
    {
      title: "Diseño y Desarollo Web",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/undraw_building_websites.svg"
    },
    {
      title: "Mantenimiento e Instalacion de CCTV",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/undraw_illustration.svg"
    },
    {
      title: "Control de Acceso",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/assets/Free.png"
    }
  ]
}) => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 1000,

    customPaging: function (i) {
      return (
        <a href className="/">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all"></span>
        </a>
      );
    }
  };
  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        className="max-w-screen-xl px-8 xl:px-16 mx-auto"
      >
        {carouselContent.map((carouselContent) => (
          <div
            className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
            id="about"
          >
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
              <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                  {carouselContent.title}
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                  {carouselContent.excerpt}
                </p>
                <ButtonPrimary>Saber mas</ButtonPrimary>
              </div>
              <div className="flex w-full">
                <div className="h-full w-full">
                  <Image
                    src={carouselContent.image}
                    alt="VPN Illustrasi"
                    quality={100}
                    width={612}
                    height={383}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
