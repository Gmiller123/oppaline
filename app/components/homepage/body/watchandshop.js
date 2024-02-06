"use client";
import React from "react";
import Image from "next/image";
import { IoEyeSharp } from "react-icons/io5";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WatchAndShop = () => {
  return (
    <div className="watchSection pt-[30px] md:pt-[60px] pb-[60px] md:pb-[120px] w-full bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20">
      <div className=" max-w-[1390px] mx-auto px-5 lg:px-10">
        <div className=" flex flex-row items-center justify-center gap-5 mb-[30px] md:mb-[60px]">
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

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem
                key={index}
                className=" basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="relative">
                  <div>
                    <div>
                      <Image
                        width={345}
                        height={400}
                        src="/card-img.gif"
                        alt="card-img"
                        className="object-cover w-full h-[420px]"
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2  bg-[#FBEFFF] border-[#7A0999] size-10 text-[#000]/80" />
          <CarouselNext className="absolute -right-5 top-1/2 -translate-y-1/2  bg-[#FBEFFF] border-[#7A0999] size-10 text-[#000]/80" />
        </Carousel>
      </div>
    </div>
  );
};

export default WatchAndShop;
