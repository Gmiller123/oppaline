"use client";
import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Slider from "react-slick";
import Image from "next/image";

const TrendingWomenCollection = () => {
  const newArrival = useRef(null);
  const newArrival1 = useRef(null);
  const newArrival2 = useRef(null);
  const newArrival3 = useRef(null);
  const newArrival4 = useRef(null);
  const newArrival5 = useRef(null);
  const newArrival6 = useRef(null);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    draggable: false,
    arrows: false,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings1 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings1: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings1: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings1: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full">
      <div className=" max-w-[1350px] mx-auto px-5 md:px-8 lg:px-0">
        <div className=" relative divide-y-2">
          <div className=" flex flex-row items-center gap-5 pb-3">
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
                  stroke-width="2.58824"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h2 className=" text-[28px] md:text-[36px] text-[#57066D]">
              Trending women collection
            </h2>
          </div>

          <div>
            <button
              onClick={() => newArrival.current.slickPrev()}
              className=" absolute z-10 top-[65%] md:top-[50%] translate-y-[-50%] right-[60px]"
            >
              <MdKeyboardArrowLeft className=" text-[40px] text-[#7A0999] bg-[#FBEFFF] border hover:bg-[#7A0999] hover:text-white border-[#7A0999] rounded-full transition-all" />
            </button>

            <button
              onClick={() => newArrival.current.slickNext()}
              className=" absolute z-10 top-[65%] md:top-[50%] translate-y-[-50%] right-0"
            >
              <MdKeyboardArrowRight className=" text-[40px] text-[#7A0999] bg-[#FBEFFF] border border-[#7A0999] hover:bg-[#7A0999] hover:text-white rounded-full transition-all " />
            </button>
          </div>
        </div>
      </div>

      <div className=" max-w-[1370px] mx-auto pt-6 px-5 md:px-7 lg:px-0">
        <Slider className="arrival" ref={newArrival} {...settings}>
          <div className=" relative">
            <button
              onClick={() => newArrival1.current.slickPrev()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] left-1.5"
            >
              <MdKeyboardArrowLeft className=" bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all" />
            </button>

            <Slider ref={newArrival1} {...settings1}>
              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress2.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress3.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress4.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress5.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>
            </Slider>
            <button
              onClick={() => newArrival1.current.slickNext()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] right-1.5"
            >
              <MdKeyboardArrowRight className="bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all " />
            </button>
          </div>

          <div className=" relative">
            <button
              onClick={() => newArrival2.current.slickPrev()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] left-1.5"
            >
              <MdKeyboardArrowLeft className=" bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all" />
            </button>
            <Slider ref={newArrival2} {...settings1}>
              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress2.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress3.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress4.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress5.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>
            </Slider>
            <button
              onClick={() => newArrival2.current.slickNext()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] right-1.5"
            >
              <MdKeyboardArrowRight className="bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all " />
            </button>
          </div>

          <div className=" relative">
            <button
              onClick={() => newArrival3.current.slickPrev()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] left-1.5"
            >
              <MdKeyboardArrowLeft className=" bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all" />
            </button>
            <Slider ref={newArrival3} {...settings1}>
              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress3.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress4.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress5.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress2.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>
            </Slider>
            <button
              onClick={() => newArrival3.current.slickNext()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] right-1.5"
            >
              <MdKeyboardArrowRight className="bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all " />
            </button>
          </div>

          <div className=" relative">
            <button
              onClick={() => newArrival4.current.slickPrev()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] left-1.5"
            >
              <MdKeyboardArrowLeft className=" bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all" />
            </button>
            <Slider ref={newArrival4} {...settings1}>
              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress4.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress5.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress2.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress3.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>
            </Slider>
            <button
              onClick={() => newArrival4.current.slickNext()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] right-1.5"
            >
              <MdKeyboardArrowRight className="bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all " />
            </button>
          </div>

          <div className=" relative">
            <button
              onClick={() => newArrival5.current.slickPrev()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] left-1.5"
            >
              <MdKeyboardArrowLeft className=" bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all" />
            </button>
            <Slider ref={newArrival5} {...settings1}>
              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress5.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress2.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress3.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress4.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>
            </Slider>
            <button
              onClick={() => newArrival5.current.slickNext()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] right-1.5"
            >
              <MdKeyboardArrowRight className="bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all " />
            </button>
          </div>

          <div className=" relative">
            <button
              onClick={() => newArrival6.current.slickPrev()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] left-1.5"
            >
              <MdKeyboardArrowLeft className=" bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all" />
            </button>
            <Slider ref={newArrival6} {...settings1}>
              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>

              <div className="w-full">
                <div className="flex w-full flex-col gap-2">
                  <div>
                    <Image
                      width={600}
                      height={800}
                      src="/tab-dress.png"
                      alt="yellow full dress"
                      className="object-cover h-[350px] w-full"
                    />
                  </div>
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" mr-8 text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                  <span className="pb-1.5 flex items-center gap-4">
                    <div className=" flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                      <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                      <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#D9D9D9] cursor-pointer hover:ring-offset-4"></div>
                    </div>
                    <p className=" uppercase text-[14px] text-[#000000]">
                      +8 colors
                    </p>
                  </span>
                </div>
              </div>
            </Slider>
            <button
              onClick={() => newArrival6.current.slickNext()}
              className=" absolute z-10 top-[40%] translate-y-[-50%] right-1.5"
            >
              <MdKeyboardArrowRight className="bg-[#909090] hover:bg-[#7c7c7c] text-white h-9 text-[25px] transition-all " />
            </button>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TrendingWomenCollection;
