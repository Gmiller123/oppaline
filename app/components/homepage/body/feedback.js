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

const CustomerFeedback = () => {
  const sliderImg = [
    {
      img: "/white-dress.png",
      feedbackDescription: {
        feedback:
          "  Thanks to Opaline Shop, I found the perfect fit for my costume—a truly excellent purchase overall.",
        personName: "Aditya Lamsal",
        country: "Kavre, Nepal",
      },
    },
    {
      img: "/white-dress.png",
      feedbackDescription: {
        feedback:
          "  Thanks to Opaline Shop, I found the perfect fit for my costume—a truly excellent purchase overall.",
        personName: "Ajay Shresta",
        country: "Kathmandu, Nepal",
      },
    },
    {
      img: "/white-dress.png",
      feedbackDescription: {
        feedback:
          "  Thanks to Opaline Shop, I found the perfect fit for my costume—a truly excellent purchase overall.",
        personName: "Jhonny Sah",
        country: "Chennai, india",
      },
    },
    {
      img: "/white-dress.png",
      feedbackDescription: {
        feedback:
          "  Thanks to Opaline Shop, I found the perfect fit for my costume—a truly excellent purchase overall.",
        personName: "Ajay Shresta",
        country: "Kathmandu, Nepal",
      },
    },
  ];

  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full">
      <div className=" max-w-[1390px] mx-auto px-5 lg:px-10">
        <div className=" flex flex-row items-center gap-[21px] mb-[61px]">
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
          <h1 className=" text-[36px] text-[#57066D]">Customer Feedback</h1>
        </div>
      </div>
      <div className=" max-w-[1390px] mx-auto px-5 lg:px-10">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className=" relative w-full"
        >
          <CarouselContent className="-ml-10">
            {sliderImg.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-10 basis-full lg:basis-1/2"
              >
                <div className=" flex md:flex-row flex-col items-center gap-[45px] border border-[#000000]/15 p-[28px] rounded-lg bg-[#fff]/40">
                  <Image
                    src={item.img}
                    width={225}
                    height={300}
                    alt="women with white dress"
                    className=" object-cover w-full"
                  />
                  <div>
                    <p className=" text-base text-[#666] mb-[24px]">
                      {item.feedbackDescription.feedback}
                    </p>
                    <h3 className=" text-base text-[#222]">
                      {" "}
                      {item.feedbackDescription.personName}
                    </h3>
                    <h4 className=" text-base text-[#666]">
                      {item.feedbackDescription.country}
                    </h4>
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

export default CustomerFeedback;
