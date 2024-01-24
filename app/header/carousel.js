"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    customPaging: function () {
      return <div className="custom-slick-indicator"></div>;
    },
  };

  return (
    <div className="lg:pb-0 pb-20">
      <Slider {...settings}>
        <div className="">
          <div className=" *:text-white flex md:flex-row flex-col md:items-start items-center justify-between">
            <div className=" flex flex-col items-center justify-center md:mb-0 mb-6">
              <h1 className=" text-center lg:text-[60px] md:text-[50px] text-[40px] leading-[50px] text-[#DE95F2]">
                Year-End Fashion Deals
              </h1>
              <span className="flex flex-col items-center leading-[100px]">
                <h1 className=" text-[30px] lg:text-[42px] md:text-[35px]">
                  BUY 1
                </h1>
                <span className=" relative">
                  <h1 className="lg:text-[174px] md:text-[140px] text-[110px] font-extrabold">
                    GET 2
                  </h1>
                  <h3
                    id="overlappingText"
                    className="absolute left-[50%] translate-x-[-50%] lg:bottom-[-55px] bottom-[-40px] lg:text-[60px] md:text-[50px] text-[40px] font-black"
                  >
                    Free
                  </h3>
                </span>
              </span>
              <button className="mt-16 px-10 py-3 rounded-lg cursor-pointer bg-[#9504A2] text-base font-bold border border-white shadow-lg">
                SHOP NOW
              </button>
            </div>
            <div>
              <Image
                width={350}
                height={100}
                src="/hero-img1.png"
                alt="Hero Image"
                className=" h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" *:text-white flex md:flex-row flex-col items-start justify-between">
            <div className=" flex flex-col items-center justify-center">
              <h1 className=" text-center lg:text-[60px] md:text-[50px] text-[40px] leading-[50px] text-[#DE95F2]">
                Year-End Fashion Deals
              </h1>
              <span className="flex flex-col items-center leading-[100px]">
                <h1 className=" text-[30px] lg:text-[42px] md:text-[35px]">
                  BUY 1
                </h1>
                <span className=" relative">
                  <h1 className="lg:text-[174px] md:text-[140px] text-[110px] font-extrabold">
                    GET 2
                  </h1>
                  <h3
                    id="overlappingText"
                    className="absolute left-[50%] translate-x-[-50%] lg:bottom-[-55px] bottom-[-40px] lg:text-[60px] md:text-[50px] text-[40px] font-black"
                  >
                    Free
                  </h3>
                </span>
              </span>
              <button className="mt-16 px-10 py-3 rounded-lg cursor-pointer bg-[#9504A2] text-base font-bold border border-white shadow-lg">
                SHOP NOW
              </button>
            </div>
            <div>
              <Image
                width={350}
                height={100}
                src="/hero-img1.png"
                alt="Hero Image"
                className=" h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className=" *:text-white flex md:flex-row flex-col items-start justify-between">
            <div className=" flex flex-col items-center justify-center">
              <h1 className=" text-center lg:text-[60px] md:text-[50px] text-[40px] leading-[50px] text-[#DE95F2]">
                Year-End Fashion Deals
              </h1>
              <span className="flex flex-col items-center leading-[100px]">
                <h1 className=" text-[30px] lg:text-[42px] md:text-[35px]">
                  BUY 1
                </h1>
                <span className=" relative">
                  <h1 className="lg:text-[174px] md:text-[140px] text-[110px] font-extrabold">
                    GET 2
                  </h1>
                  <h3
                    id="overlappingText"
                    className="absolute left-[50%] translate-x-[-50%] lg:bottom-[-55px] bottom-[-40px] lg:text-[60px] md:text-[50px] text-[40px] font-black"
                  >
                    Free
                  </h3>
                </span>
              </span>
              <button className="mt-16 px-10 py-3 rounded-lg cursor-pointer bg-[#9504A2] text-base font-bold border border-white shadow-lg">
                SHOP NOW
              </button>
            </div>
            <div>
              <Image
                width={350}
                height={100}
                src="/hero-img1.png"
                alt="Hero Image"
                className=" h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
