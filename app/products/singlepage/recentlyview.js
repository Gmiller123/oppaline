"use client";

import React, { useEffect, useState } from "react";
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
  const local_url = process.env.NEXT_PUBLIC_URL;
  const imgUrl = "http://192.168.10.77:8000";
  const [loading, setLoading] = useState(false);
  const [recentData, setRecentData] = useState([]);

  const fetchMostView = async () => {
    setLoading(true);
    try {
      const res = await fetch(local_url + "/product/most-viewed-products");
      const data = await res.json();
      setRecentData(data.data);
      setLoading(false);
    } catch (error) {
      console.error(error, "error while fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMostView();
  }, []);

  if (loading) return "Fetching the data";

  return (
    <>
      <div className="border-right-container mt-20">
        <h1 className=" font-bold lg:text-[28px] md:text-[25px] text-xl mb-10">
          Recently Viewed
        </h1>
      </div>
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 pb-20">
        {recentData &&
          recentData.map((data) => {
            console.log(imgUrl + "/images/" + data.image.map((img) => img));
            return (
              <Carousel key={data._id} className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src={imgUrl + "/images/" + data.image.map((img) => img)}
                      alt="pant image"
                      className="w-full h-auto"
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="capitalize text-base font-semibold text-[#000]">
                            {data.name}
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold mr-1">
                              <strike> Rs.{data.discount}</strike>
                            </h5>
                            <h5 className=" font-semibold">{` ${
                              data.price &&
                              "Rs." + (data?.price - data?.discount)
                            } `}</h5>
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
                          {data.color.map((color) => {
                            return (
                              <div
                                className={` bg-[${color.color_code}] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer`}
                              ></div>
                            );
                          })}
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            {data.color.map((color) => {
                              color.color_name;
                            })}
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        {`${
                          data.discount &&
                          ((data.discount / data.price) * 100).toFixed(2) + "%"
                        } `}{" "}
                        Off today, Shop Now
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
            );
          })}
      </div>
    </>
  );
};

export default RecentView;
