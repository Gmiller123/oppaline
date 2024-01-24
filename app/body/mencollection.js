"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const MenCollection = () => {
  const menCollectionSlider = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px]  w-full px-5 md:px-8 lg:px-0">
      <div className="relative mb-[40px]">
        <div>
          <Image
            width={1280}
            height={1280}
            src="/mencollection-hero.png"
            alt="men-hero-img"
            className=" object-cover w-full min-h-[400px]"
          />
        </div>
        <div className="flex items-center justify-center flex-col absolute top-[70%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h1 className=" text-white text-center text-[36px] font-bold mb-[26px]">
            Men Collection
          </h1>

          <button className=" bg-[#9504A2] hover:text-[#9504A2] hover:border-[#9504A2] hover:border transition-all hover:bg-[#fff] text-white border-[0.804px] border-solid border-[#fff] px-[40px] py-[10px] font-black rounded-md">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className=" max-w-[1385px] mx-auto ">
        <div className="relative max-w-[1390px] mx-auto">
          <button
            onClick={() => menCollectionSlider.current.slickPrev()}
            className=" absolute z-10 top-[50%] translate-y-[-50%] left-0"
          >
            <MdKeyboardArrowLeft className=" text-[40px] text-[#7A0999] bg-[#FBEFFF] border hover:bg-[#7A0999] hover:text-white border-[#7A0999] rounded-full transition-all" />
          </button>
          <div>
            <Slider
              ref={menCollectionSlider}
              className="feedback"
              {...settings}
            >
              <div className="">
                <div className=" w-full relative">
                  <Image
                    src="/mencollection-1.png"
                    width={467}
                    height={700}
                    alt="women with white dress"
                    className=" object-cover w-full h-auto"
                  />
                  <div className="flex items-center justify-center flex-col absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className=" text-white text-[36px] font-bold mb-2">
                      Short
                    </h1>

                    <button className=" bg-[#fff] hover:text-[#fff] text-[10px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[20px] py-[6px] font-black rounded-md">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" w-full relative">
                  <Image
                    src="/mencollection-2.png"
                    width={467}
                    height={700}
                    alt="women with white dress"
                    className=" object-cover w-full h-auto"
                  />
                  <div className="flex items-center justify-center flex-col absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className=" text-white text-[36px] font-bold mb-2">
                      T-shirt
                    </h1>

                    <button className=" bg-[#fff] hover:text-[#fff] text-[10px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[20px] py-[6px] font-black rounded-md">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" w-full relative">
                  <Image
                    src="/mencollection-3.png"
                    width={467}
                    height={700}
                    alt="women with white dress"
                    className=" object-cover w-full h-auto"
                  />
                  <div className="flex items-center justify-center flex-col absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className=" text-white text-[36px] font-bold mb-2">
                      Shirts
                    </h1>

                    <button className=" bg-[#fff] hover:text-[#fff] text-[10px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[20px] py-[6px] font-black rounded-md">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" w-full relative">
                  <Image
                    src="/mencollection-4.png"
                    width={467}
                    height={700}
                    alt="women with white dress"
                    className=" object-cover w-full h-auto"
                  />
                  <div className="w-full flex items-center justify-center flex-col absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className=" text-white text-[36px] font-bold mb-2">
                      Vneck T-shirt
                    </h1>

                    <button className=" bg-[#fff] hover:text-[#fff] text-[10px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[20px] py-[6px] font-black rounded-md">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" w-full relative">
                  <Image
                    src="/mencollection-1.png"
                    width={467}
                    height={700}
                    alt="women with white dress"
                    className=" object-cover w-full h-auto"
                  />
                  <div className="flex items-center justify-center flex-col absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className=" text-white text-[36px] font-bold mb-2">
                      Short
                    </h1>

                    <button className=" bg-[#fff] hover:text-[#fff] text-[10px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[20px] py-[6px] font-black rounded-md">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" w-full relative">
                  <Image
                    src="/mencollection-2.png"
                    width={467}
                    height={700}
                    alt="women with white dress"
                    className=" object-cover w-full h-auto"
                  />
                  <div className="flex items-center justify-center flex-col absolute top-[75%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                    <h1 className=" text-white text-[36px] font-bold mb-2">
                      T-shirt
                    </h1>

                    <button className=" bg-[#fff] hover:text-[#fff] text-[10px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[20px] py-[6px] font-black rounded-md">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
            <button
              onClick={() => menCollectionSlider.current.slickNext()}
              className=" absolute z-10 top-[50%] translate-y-[-50%] right-0"
            >
              <MdKeyboardArrowRight className=" text-[40px] text-[#7A0999] bg-[#FBEFFF] border border-[#7A0999] hover:bg-[#7A0999] hover:text-white rounded-full transition-all " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenCollection;
