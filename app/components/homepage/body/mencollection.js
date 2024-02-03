"use client";

import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MenCollection = () => {
  const data = [
    {
      img: "/mencollection-4.png",
      description: "Short",
    },
    {
      img: "/mencollection-1.png",
      description: "Shirts",
    },
    {
      img: "/mencollection-2.png",
      description: "T-shirts",
    },
    {
      img: "/mencollection-3.png",
      description: "Vneck T-shirt",
    },
    {
      img: "/mencollection-4.png",
      description: "Short",
    },
    {
      img: "/mencollection-2.png",
      description: "Short",
    },
    {
      img: "/mencollection-1.png",
      description: "Shirts",
    },
    {
      img: "/mencollection-2.png",
      description: "T-shirts",
    },
    {
      img: "/mencollection-3.png",
      description: "Vneck T-shirt",
    },
    {
      img: "/mencollection-4.png",
      description: "Short",
    },
  ];

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
      <div className=" max-w-[1390px] mx-auto px-5 lg:px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent className="">
            {data.map((item, index) => (
              <CarouselItem
                key={index}
                className=" basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="relative">
                  <Image
                    width={345}
                    height={410}
                    src={item.img}
                    alt="men's dress type collections"
                    className="w-full h-full"
                  />
                  <div className=" absolute left-1/2 -translate-x-1/2 bottom-10 text-white text-4xl">
                    <h3 class="text-center">{item.description}</h3>
                    <button className="bg-white rounded-sm text-[#7A0999] border-[#7A0999] px-3 py-1 text-base font-bold">
                      SHOP MORE
                    </button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-15px] bg-[#FBEFFF] border-[#7A0999] size-10 text-[#000]/80" />
          <CarouselNext className="absolute right-[-15px] bg-[#FBEFFF] border-[#7A0999] size-10 text-[#000]/80" />
        </Carousel>
      </div>
    </div>
  );
};

export default MenCollection;
