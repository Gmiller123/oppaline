import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RecentView = () => {
  const recentproducts = [
    {
      image: "/pant-img2.png",
      image2: "/pant-img1.png",
      description: {
        name: "Ursula Milano Tank",
        discountPrice: "$79",
        offeredPrice: "$54",
        color: "+8 colors",
        offerdiscount: "50% Off, Shop Today",
      },
    },
    {
      image: "/pant-img2.png",
      image2: "/pant-img1.png",
      description: {
        name: "Ursula Milano Tank",
        discountPrice: "$79",
        offeredPrice: "$54",
        color: "+8 colors",
        offerdiscount: "50% Off, Shop Today",
      },
    },
    {
      image: "/pant-img2.png",
      image2: "/pant-img1.png",
      description: {
        name: "Ursula Milano Tank",
        discountPrice: "$79",
        offeredPrice: "$54",
        color: "+8 colors",
        offerdiscount: "50% Off, Shop Today",
      },
    },
    {
      image: "/pant-img2.png",
      image2: "/pant-img1.png",
      description: {
        name: "Ursula Milano Tank",
        discountPrice: "$79",
        offeredPrice: "$54",
        color: "+8 colors",
        offerdiscount: "50% Off, Shop Today",
      },
    },
  ];
  return (
    <>
      <div className="border-right-container mt-20">
        <h1 className=" font-bold lg:text-[28px] md:text-[25px] text-xl mb-10">
          Recently Viewed
        </h1>
      </div>
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 pb-20">
        {recentproducts.map(({ image, description }, index) => (
          <Carousel key={index} className="relative">
            <CarouselContent>
              <CarouselItem className="flex flex-col">
                <Image
                  width={600}
                  height={849}
                  src={image}
                  alt="pant image"
                  className="w-full h-auto"
                />

                <div>
                  <div className="flex items-center justify-between pt-5">
                    <span className=" flex flex-col gap-2">
                      <h4 className="text-base font-semibold text-[#000]">
                        {description.name}
                      </h4>
                      <span className=" flex gap-1">
                        <h5 className="text-[#667085] font-semibold">
                          <strike>{description.discountPrice}</strike>
                        </h5>
                        <h5 className=" font-semibold">
                          {description.offeredPrice}
                        </h5>
                      </span>
                    </span>
                    <span className=" flex items-center gap-[10px] pr-[10px]">
                      <Link href="#">
                        <Image
                          width={24}
                          height={24}
                          src="/addtocart-icon.svg"
                          alt="add to card icon"
                          className=" text-[#344054]"
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          width={24}
                          height={24}
                          src="/love.svg"
                          alt="add to card icon"
                          className=" text-[#344054]"
                        />
                      </Link>
                    </span>
                  </div>
                  <span className=" flex items-center gap-[10px] pt-[8px]">
                    <span className=" flex items-center gap-[10px] pl-[6px]">
                      <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    </span>
                    <span>
                      <h5 className=" text-[12px] text-[#000]">
                        {description.color}
                      </h5>
                    </span>
                  </span>
                  <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                    {description.offerdiscount}
                  </h3>
                </div>
              </CarouselItem>
              <CarouselItem className="flex flex-col">
                <Image
                  width={600}
                  height={849}
                  src="/pant-img1.png"
                  alt="pant image"
                  className=""
                />

                <div>
                  <div className="flex items-center justify-between pt-5">
                    <span className=" flex flex-col gap-2">
                      <h4 className="text-base font-semibold text-[#000]">
                        Ursula Milano Tank
                      </h4>
                      <span className=" flex gap-1">
                        <h5 className="text-[#667085] font-semibold">
                          <strike>$79.95</strike>
                        </h5>
                        <h5 className=" font-semibold">$79.95</h5>
                      </span>
                    </span>
                    <span className=" flex items-center gap-[10px] pr-[10px]">
                      <Link href="#">
                        <Image
                          width={24}
                          height={24}
                          src="/addtocart-icon.svg"
                          alt="add to card icon"
                          className=" text-[#344054]"
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          width={24}
                          height={24}
                          src="/love.svg"
                          alt="add to card icon"
                          className=" text-[#344054]"
                        />
                      </Link>
                    </span>
                  </div>
                  <span className=" flex items-center gap-[10px] pt-[8px]">
                    <span className=" flex items-center gap-[10px] pl-[6px]">
                      <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    </span>
                    <span>
                      <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
                    </span>
                  </span>
                  <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                    50% Off. Shop Today
                  </h3>
                </div>
              </CarouselItem>
              <CarouselItem className="flex flex-col">
                <Image
                  width={600}
                  height={849}
                  src="/pant-img2.png"
                  alt="pant image"
                  className=""
                />

                <div>
                  <div className="flex items-center justify-between pt-5">
                    <span className=" flex flex-col gap-2">
                      <h4 className="text-base font-semibold text-[#000]">
                        Ursula Milano Tank
                      </h4>
                      <span className=" flex gap-1">
                        <h5 className="text-[#667085] font-semibold">
                          <strike>$79.95</strike>
                        </h5>
                        <h5 className=" font-semibold">$79.95</h5>
                      </span>
                    </span>
                    <span className=" flex items-center gap-[10px] pr-[10px]">
                      <Link href="#">
                        <Image
                          width={24}
                          height={24}
                          src="/addtocart-icon.svg"
                          alt="add to card icon"
                          className=" text-[#344054]"
                        />
                      </Link>
                      <Link href="#">
                        <Image
                          width={24}
                          height={24}
                          src="/love.svg"
                          alt="add to card icon"
                          className=" text-[#344054]"
                        />
                      </Link>
                    </span>
                  </div>
                  <span className=" flex items-center gap-[10px] pt-[8px]">
                    <span className=" flex items-center gap-[10px] pl-[6px]">
                      <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                      <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                    </span>
                    <span>
                      <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
                    </span>
                  </span>
                  <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                    50% Off. Shop Today
                  </h3>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-5 top-[40%]" />
            <CarouselNext className="absolute right-5 top-[40%]" />
          </Carousel>
        ))}
      </div>
    </>
  );
};

export default RecentView;
