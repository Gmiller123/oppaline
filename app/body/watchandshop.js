"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const WatchAndShop = () => {
  const sliderCarousel = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 824,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="watchSection pt-[60px] md:pb-[120px] w-full bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20">
      <div className=" max-w-[1360px] px-5 md:px-8 lg:px-0 mx-auto">
        <div className=" flex flex-row items-center justify-center gap-5 mb-[60px]">
          <div className="border border-[#FBD2FF] w-fit px-1.5 py-2.5 rounded-lg bg-white">
            <svg
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M23.9998 2.17636L14.294 11.8822L9.11749 6.70577L1.35278 14.4705M18.1763 1.5293H24.5822V7.99989"
                stroke="#7A0999"
                strokeWidth="2.58824"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className=" text-[36px] text-[#57066D] ">Watch and Shop</h2>
        </div>
        <div className=" relative">
          <button
            onClick={() => sliderCarousel.current.slickPrev()}
            className=" absolute z-10 top-[40%] left-0"
          >
            <MdKeyboardArrowLeft className=" text-[40px] text-[#7A0999] bg-white border hover:bg-[#7A0999] hover:text-white border-[#7A0999] rounded-full transition-all" />
          </button>
          <Slider
            ref={sliderCarousel}
            {...settings}
            className="trending-slider"
          >
            <div className="relative">
              <div className="card">
                <div className="card-img">
                  <Image
                    width={250}
                    height={300}
                    src="/card-img.gif"
                    alt="card-img"
                    className="object-cover w-full h-[400px]"
                  />
                </div>
                <div className=" absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#333]"></div>
                <div className=" absolute top-0 w-full flex flex-row items-center justify-between p-4">
                  <div className=" bg-[#5C5C5C]/80 px-3 py-1 rounded-md flex items-center gap-2">
                    <IoEyeSharp className=" text-white" />
                    <h5 className=" text-white text-sm">250</h5>
                  </div>
                  <div className=" flex items-center gap-2 px-3 py-1 rounded-md bg-[#fff]/70">
                    <h5 className="text-[#7A0999] text-[12px]">Trending</h5>
                    <span className="border border-[#FBD2FF] w-fit px-0.5 py-0.5 rounded-lg bg-white/70">
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-3"
                      >
                        <path
                          id="Vector"
                          d="M23.9998 2.17636L14.294 11.8822L9.11749 6.70577L1.35278 14.4705M18.1763 1.5293H24.5822V7.99989"
                          stroke="#7A0999"
                          strokeWidth="2.58824"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className=" absolute bottom-0 flex items-center justify-between p-4">
                  <div className=" border-4 border-white">
                    <Image
                      width={120}
                      height={120}
                      src="/yellow-dreses.png"
                      alt="yellow-dress"
                    />
                  </div>
                  <h4 className=" text-white ml-6">
                    Light Blue Floral Printed Pure Cotton Suit
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card">
                <div className="card-img">
                  <Image
                    width={250}
                    height={300}
                    src="/card-img.gif"
                    alt="card-img"
                    className="object-cover w-full h-[400px]"
                  />
                </div>
                <div className=" absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#333]"></div>
                <div className=" absolute top-0 w-full flex flex-row items-center justify-between p-4">
                  <div className=" bg-[#5C5C5C]/80 px-3 py-1 rounded-md flex items-center gap-2">
                    <IoEyeSharp className=" text-white" />
                    <h5 className=" text-white text-sm">250</h5>
                  </div>
                  <div className=" flex items-center gap-2 px-3 py-1 rounded-md bg-[#fff]/70">
                    <h5 className="text-[#7A0999] text-[12px]">Trending</h5>
                    <span className="border border-[#FBD2FF] w-fit px-0.5 py-0.5 rounded-lg bg-white/70">
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-3"
                      >
                        <path
                          id="Vector"
                          d="M23.9998 2.17636L14.294 11.8822L9.11749 6.70577L1.35278 14.4705M18.1763 1.5293H24.5822V7.99989"
                          stroke="#7A0999"
                          strokeWidth="2.58824"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className=" absolute bottom-0 flex items-center justify-between p-4">
                  <div className=" border-4 border-white">
                    <Image
                      width={120}
                      height={120}
                      src="/yellow-dreses.png"
                      alt="yellow-dress"
                    />
                  </div>
                  <h4 className=" text-white ml-6">
                    Light Blue Floral Printed Pure Cotton Suit
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card">
                <div className="card-img">
                  <Image
                    width={250}
                    height={300}
                    src="/card-img.gif"
                    alt="card-img"
                    className="object-cover w-full h-[400px]"
                  />
                </div>
                <div className=" absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#333]"></div>
                <div className=" absolute top-0 w-full flex flex-row items-center justify-between p-4">
                  <div className=" bg-[#5C5C5C]/80 px-3 py-1 rounded-md flex items-center gap-2">
                    <IoEyeSharp className=" text-white" />
                    <h5 className=" text-white text-sm">250</h5>
                  </div>
                  <div className=" flex items-center gap-2 px-3 py-1 rounded-md bg-[#fff]/70">
                    <h5 className="text-[#7A0999] text-[12px]">Trending</h5>
                    <span className="border border-[#FBD2FF] w-fit px-0.5 py-0.5 rounded-lg bg-white/70">
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-3"
                      >
                        <path
                          id="Vector"
                          d="M23.9998 2.17636L14.294 11.8822L9.11749 6.70577L1.35278 14.4705M18.1763 1.5293H24.5822V7.99989"
                          stroke="#7A0999"
                          strokeWidth="2.58824"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className=" absolute bottom-0 flex items-center justify-between p-4">
                  <div className=" border-4 border-white">
                    <Image
                      width={120}
                      height={120}
                      src="/yellow-dreses.png"
                      alt="yellow-dress"
                    />
                  </div>
                  <h4 className=" text-white ml-6">
                    Light Blue Floral Printed Pure Cotton Suit
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card">
                <div className="card-img">
                  <Image
                    width={250}
                    height={300}
                    src="/card-img.gif"
                    alt="card-img"
                    className="object-cover w-full h-[400px]"
                  />
                </div>
                <div className=" absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#333]"></div>
                <div className=" absolute top-0 w-full flex flex-row items-center justify-between p-4">
                  <div className=" bg-[#5C5C5C]/80 px-3 py-1 rounded-md flex items-center gap-2">
                    <IoEyeSharp className=" text-white" />
                    <h5 className=" text-white text-sm">250</h5>
                  </div>
                  <div className=" flex items-center gap-2 px-3 py-1 rounded-md bg-[#fff]/70">
                    <h5 className="text-[#7A0999] text-[12px]">Trending</h5>
                    <span className="border border-[#FBD2FF] w-fit px-0.5 py-0.5 rounded-lg bg-white/70">
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-3"
                      >
                        <path
                          id="Vector"
                          d="M23.9998 2.17636L14.294 11.8822L9.11749 6.70577L1.35278 14.4705M18.1763 1.5293H24.5822V7.99989"
                          stroke="#7A0999"
                          strokeWidth="2.58824"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className=" absolute bottom-0 flex items-center justify-between p-4">
                  <div className=" border-4 border-white">
                    <Image
                      width={120}
                      height={120}
                      src="/yellow-dreses.png"
                      alt="yellow-dress"
                    />
                  </div>
                  <h4 className=" text-white ml-6">
                    Light Blue Floral Printed Pure Cotton Suit
                  </h4>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="card">
                <div className="card-img">
                  <Image
                    width={250}
                    height={300}
                    src="/card-img.gif"
                    alt="card-img"
                    className="object-cover w-full h-[400px]"
                  />
                </div>
                <div className=" absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-[#333]"></div>
                <div className=" absolute top-0 w-full flex flex-row items-center justify-between p-4">
                  <div className=" bg-[#5C5C5C]/80 px-3 py-1 rounded-md flex items-center gap-2">
                    <IoEyeSharp className=" text-white" />
                    <h5 className=" text-white text-sm">250</h5>
                  </div>
                  <div className=" flex items-center gap-2 px-3 py-1 rounded-md bg-[#fff]/70">
                    <h5 className="text-[#7A0999] text-[12px]">Trending</h5>
                    <span className="border border-[#FBD2FF] w-fit px-0.5 py-0.5 rounded-lg bg-white/70">
                      <svg
                        width="26"
                        height="16"
                        viewBox="0 0 26 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" size-3"
                      >
                        <path
                          id="Vector"
                          d="M23.9998 2.17636L14.294 11.8822L9.11749 6.70577L1.35278 14.4705M18.1763 1.5293H24.5822V7.99989"
                          stroke="#7A0999"
                          strokeWidth="2.58824"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className=" absolute bottom-0 flex items-center justify-between p-4">
                  <div className=" border-4 border-white">
                    <Image
                      width={120}
                      height={120}
                      src="/yellow-dreses.png"
                      alt="yellow-dress"
                    />
                  </div>
                  <h4 className=" text-white ml-6">
                    Light Blue Floral Printed Pure Cotton Suit
                  </h4>
                </div>
              </div>
            </div>
          </Slider>
          <button
            onClick={() => sliderCarousel.current.slickNext()}
            className=" absolute z-10 top-[40%] right-0"
          >
            <MdKeyboardArrowRight className=" text-[40px] text-[#7A0999] bg-white border border-[#7A0999] hover:bg-[#7A0999] hover:text-white rounded-full transition-all " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchAndShop;
