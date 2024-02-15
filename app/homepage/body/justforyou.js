"use client";
import React, { useState } from "react";
import Image from "next/image";

const JustForYou = () => {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(Math.abs(count + 1));
  }

  function decrement() {
    setCount(Math.max(0, count - 1));
  }

  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full">
      <div className=" max-w-[1390px] mx-auto px-5 lg:px-10 md:pb-[60px] w-full md:px-8">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-10 w-full">
          <div>
            <div className=" flex flex-col gap-3">
              <Image
                width={1600}
                height={1067}
                src="/justforyou.png"
                alt="foreign girls in traditinal dress"
              />
              <div className=" grid grid-cols-8 gap-2 h-full w-full">
                <Image
                  width={80}
                  height={100}
                  src="/box-img.png"
                  alt=""
                  className="w-full h-full"
                />
                <Image
                  width={80}
                  height={100}
                  src="/box-img.png"
                  alt=""
                  className="w-full h-full"
                />
                <Image
                  width={80}
                  height={100}
                  src="/box-img.png"
                  alt=""
                  className="w-full h-full"
                />
                <Image
                  width={80}
                  height={100}
                  src="/box-img.png"
                  alt=""
                  className="w-full h-full"
                />
                <Image
                  width={80}
                  height={100}
                  src="/box-img.png"
                  alt=""
                  className="w-full h-full"
                />
                <Image
                  width={80}
                  height={100}
                  src="/box-img.png"
                  alt=""
                  className="w-full h-full"
                />
                <Image
                  width={80}
                  height={100}
                  src="/box-img.png"
                  alt=""
                  className="w-full h-full"
                />
                <Image
                  width={80}
                  height={100}
                  src="/box-img.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className=" w-full flex flex-col justify-between">
            <div className=" flex flex-row items-center gap-5 mb-[20px]">
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
              <h2 className="  text-[28 px] md:text-[36px] text-[#57066D] leading-8">
                JUST FOR YOU
              </h2>
            </div>

            <div className=" w-full">
              <h2 className=" text-[32px] md:text-[44px] font-semibold mb-[20px] leading-tight">
                Light Blue Floral Printed Pure Cotton Suit
              </h2>
              <div className=" mb-[17px] flex items-center gap-[30px] md:gap-[50px]">
                <span className=" flex gap-[12px]">
                  <h6 className=" text-[18px] md:text-[24px] text-[#808285] font-bold">
                    <strike> $79.95</strike>
                  </h6>
                  <h6 className=" text-[18px] md:text-[24px] text-[#000] font-bold">
                    $79.95
                  </h6>
                </span>
                <span className=" text-white text-sm md:text-lg bg-[#7A0999] px-[12px] py-[6px] rounded font-semibold">
                  30% OFF
                </span>
              </div>
              <div className=" text-sm md:text-base flex flex-col mb-[24px]">
                <h6 className=" text-base text-[#000]/60">
                  Inclusive of all taxes
                </h6>
                <h6 className=" text-sm md:text-base text-[#000]/60">
                  Free Shipping
                </h6>
              </div>
              <div className=" divide-y divide-[#7A0999]/20">
                <span className="mb-[24px] flex items-center gap-4">
                  <p className=" text-base text-[#000000]">Colors:</p>
                  <div className=" flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EB4335] hover:ring-[1px] hover:ring-[#000] cursor-pointer hover:ring-offset-4 active:ring-[1px] active:ring-[#D9D9D9] active:ring-offset-4 "></div>
                    <div className="w-5 h-5 rounded-full bg-[#4D6995] hover:ring-[1px] hover:ring-[#000] cursor-pointer hover:ring-offset-4"></div>
                    <div className="w-5 h-5 rounded-full bg-[#000000] hover:ring-[1px] hover:ring-[#000] cursor-pointer hover:ring-offset-4"></div>
                    <div className="w-5 h-5 rounded-full bg-[#AB9246] hover:ring-[1px] hover:ring-[#000] cursor-pointer hover:ring-offset-4"></div>
                  </div>
                </span>
                <div className="pt-[24px] grid grid-cols-8 gap-2 w-full h-full mb-[24px]">
                  <Image
                    width={80}
                    height={100}
                    src="/box-img.png"
                    alt="traditional dress "
                    className="object-cover w-full h-full"
                  />
                  <Image
                    width={80}
                    height={100}
                    src="/box-img.png"
                    alt="traditional dress "
                    className="object-cover w-full h-full"
                  />
                  <Image
                    width={80}
                    height={100}
                    src="/box-img.png"
                    alt="traditional dress "
                    className="object-cover w-full h-full"
                  />
                  <Image
                    width={80}
                    height={100}
                    src="/box-img.png"
                    alt="traditional dress "
                    className="object-cover w-full h-full"
                  />
                  <Image
                    width={80}
                    height={100}
                    src="/box-img.png"
                    alt="traditional dress "
                    className="object-cover w-full h-full"
                  />
                  <Image
                    width={80}
                    height={100}
                    src="/box-img.png"
                    alt="traditional dress "
                    className="object-cover w-full h-full"
                  />
                  <Image
                    width={80}
                    height={100}
                    src="/box-img.png"
                    alt="traditional dress "
                    className="object-cover w-full h-full"
                  />
                  <Image
                    width={80}
                    height={100}
                    src="/box-img.png"
                    alt="traditional dress "
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className=" flex items-start md:items-center justify-between mb-[60px]">
                <span className=" flex flex-col">
                  <h6>Size:</h6>
                  <span className=" flex flex-wrap gap-[11px]">
                    <button className="px-[20px] py-[14px] text-base hover:border hover:border-[#000]/40 active:border-[#000] bg-[#FFFFFF] border border-[#CDCDCD] rounded">
                      S
                    </button>
                    <button className="px-[20px] py-[14px] text-base hover:border hover:border-[#000]/40 active:border-[#000] bg-[#FFFFFF] border border-[#CDCDCD] rounded">
                      M
                    </button>
                    <button className="px-[20px] py-[14px] text-base hover:border hover:border-[#000]/40 active:border-[#000] bg-[#FFFFFF] border border-[#CDCDCD] rounded">
                      L
                    </button>
                    <button className="px-[20px] py-[14px] text-base hover:border hover:border-[#000]/40 active:border-[#000] bg-[#FFFFFF] border border-[#CDCDCD] rounded">
                      XL
                    </button>
                    <button className="px-[20px] py-[14px] text-base hover:border hover:border-[#000]/40 active:border-[#000] bg-[#FFFFFF] border border-[#CDCDCD] rounded">
                      XXL
                    </button>
                    <button className="px-[20px] py-[14px] text-base hover:border hover:border-[#000]/40 active:border-[#000] bg-[#FFFFFF] border border-[#CDCDCD] rounded">
                      3XL
                    </button>
                  </span>
                </span>
                <span className=" flex flex-col">
                  <h6>QTY:</h6>
                  <span className="flex gap-5 bg-white border border-solid border-[#D2D2D2] px-[30px] py-[14px]">
                    <button onClick={decrement}>-</button>
                    <h4>{count}</h4>
                    <button onClick={increment}>+</button>
                  </span>
                </span>
              </div>
              <div className=" flex items-center justify-between lg:gap-0 gap-6">
                <button className="xl:text-lg lg:text-base text-sm border bg-[#FFFFFF] border-solid border-[#686868]/50 lg:py-[24px] lg:px-[87px] md:py-[18px] md:px-[60px] rounded py-[14px] px-[40px]">
                  ADD TO WISHLIST
                </button>
                <button className="text-white  xl:text-lg lg:text-base text-sm  border border-solid bg-[#7A0999] border-[#686868]/50 lg:py-[24px] lg:px-[87px] md:py-[18px] md:px-[60px] py-[14px] px-[40px] rounded ">
                  BUY IT NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JustForYou;
