"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const FlashSale = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    arrows: false,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" bg-[#230B34] w-full">
      <div className=" max-w-[1390px] mx-auto px-5 lg:px-10 h-full py-[84px]">
        <div className=" grid grid-cols-8">
          <div className=" lg:col-span-3 col-span-8">
            <Slider className="flash-slide" {...settings}>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className=" lg:col-span-2 col-span-8 mx-3 h-full lg:py-0 py-10">
            <div className="flex flex-col border-y-2 border-[#7A0999] items-center py-[29px]">
              <div className=" mb-[35px] text-center">
                <h1 className=" text-[#FFFFFF] text-[39px] leading-none tracking-wider">
                  Flash Sale
                </h1>
                <h4 className=" text-[#EC18FF] text-lg">On Sale Now</h4>
              </div>
              <div className="w-full">
                <h3 className=" text-white text-lg mb-[11px] text-center font-semibold">
                  ENDING IN
                </h3>
                <span className=" flex items-center justify-center gap-4">
                  <span className=" flex flex-col items-center justify-center gap-1 ">
                    <div className=" text-[#fff] text-xl font-semibold bg-[#720191] px-[10px] py-[10px]">
                      02
                    </div>
                    <h3 className=" text-white  text-[15px] text-semibold">
                      Days
                    </h3>
                  </span>
                  <span className=" flex flex-col items-center justify-center gap-1 ">
                    <div className=" text-[#fff] text-xl font-semibold bg-[#720191] px-[10px] py-[10px]">
                      06
                    </div>
                    <h3 className=" text-white  text-[15px] text-semibold">
                      Hours
                    </h3>
                  </span>
                  <span className=" flex flex-col items-center justify-center gap-1 ">
                    <div className=" text-[#fff] text-xl font-semibold bg-[#720191] px-[10px] py-[10px]">
                      48
                    </div>
                    <h3 className=" text-white  text-[15px] text-semibold">
                      Mins
                    </h3>
                  </span>
                  <span className=" flex flex-col items-center justify-center gap-1">
                    <div className=" text-[#fff] text-xl font-semibold bg-[#720191] px-[10px] py-[10px]">
                      34
                    </div>
                    <h3 className="  text-white text-[15px] text-semibold">
                      Sec
                    </h3>
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className=" mt-9 text-[#720191] bg-[white] hover:bg-[#720191] hover:text-white transition-all px-6 py-3 font-semibold border border-solid rounded border-[#7A0999]25">
                SHOP MORE
              </button>
            </div>
          </div>
          <div className=" lg:col-span-3 col-span-8">
            <Slider className="flash-slide" {...settings}>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
              <div className=" relative">
                <div className=" flex flex-col gap-2">
                  <Image
                    src="/flashsaleimg2.png"
                    width={258}
                    height={307}
                    alt="girl with a dress"
                    className=" object-cover w-full h-auto"
                  />
                  <p className="text-white text-sm md:text-base">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <div className=" flex items-center justify-between">
                    <p className=" bg-[#7A0999] lg:px-2 px-1 rounded py-1 text-[12px] text-white">
                      30% OFF
                    </p>
                    <span className=" flex items-center gap-2 md:text-[15px] text-sm">
                      <h4 className=" font-bold text-[#F9E3FF] ">
                        <strike>79.95</strike>
                      </h4>
                      <h4 className=" font-bold   text-white">79.95</h4>
                    </span>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
