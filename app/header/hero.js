import React from "react";
import Carousel from "./carousel";
import { PiCodesandboxLogo } from "react-icons/pi";
import Image from "next/image";
import { MdOutlineFitScreen } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiHandCoins } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-[url('/hero-bg.png')] bg-cover bg-no-repeat bg-center relative z-0 px-5 md:px-8 lg:px-0">
        <span className="h-full w-full bg-no-repeat bg-left bg-[url('/flower-left.png')] absolute left-0 md:block hidden"></span>
        <span className="h-full w-full bg-no-repeat bg-right bg-[url('/flower-right.png')] absolute right-0 md:block hidden"></span>

        <div className=" max-w-[1350px] mx-auto md:pt-32 pt-20 ">
          <Carousel />
        </div>
      </div>
      <div className=" flex flex-row flex-wrap px-5 md:px-8 lg:px-0 items-center justify-center gap-10 lg:gap-20 py-5">
        <span className=" flex flex-col items-center justify-center gap-1">
          <PiCodesandboxLogo className=" size-9" />
          <h3 className=" text-[10px] text-center">Express Delivery</h3>
        </span>
        <span className=" flex flex-col items-center justify-center gap-1">
          <Image
            src="/new-arrival.png"
            width={1500}
            height={800}
            alt="new-arrival-logo"
            className=" size-8"
          />
          <h3 className=" text-[10px] text-center">New Arrival</h3>
        </span>
        <span className=" flex flex-col items-center justify-center gap-1">
          <MdOutlineFitScreen className=" size-9" />
          <h3 className=" text-[10px] text-center">Custom Fit</h3>
        </span>
        <span className=" flex flex-col items-center justify-center gap-1">
          <PiHandCoins className=" size-9" />
          <h3 className=" text-[10px] text-center">Custom Fit</h3>
        </span>
        <span className=" flex flex-col items-center justify-center gap-1">
          <LiaShippingFastSolid className=" size-9" />
          <h3 className=" text-[10px] text-center">Free Shipping</h3>
        </span>
      </div>
    </>
  );
};

export default Hero;
