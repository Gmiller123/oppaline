import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineFitScreen } from "react-icons/md";
import { PiHandCoins } from "react-icons/pi";

const TopFooter = () => {
  return (
    <div className=" border-b border-[#7A0999]/10 py-5">
      <div className=" max-w-[1350px] mx-auto px-5 md:px-8 lg:px-0">
        <div className=" flex flex-col lg:gap-0 gap-5 lg:flex-row items-center justify-between">
          <div className=" flex flex-row items-center">
            <h3 className=" text-[20px] text-[#666666]">Follow Us :</h3>
            <div className=" flex flex-row pl-3 gap-5 *:text-[#7A0999]">
              <FaInstagram className="size-6" />
              <FaYoutube className="size-6" />
              <FaFacebook className="size-6" />
              <FaTwitter className="size-6" />
            </div>
          </div>

          <div className=" flex items-center justify-center gap-20">
            <span className=" flex flex-col items-center justify-center gap-1">
              <Image
                src="/new-arrival.png"
                width={1500}
                height={800}
                alt="new-arrival-logo"
                className=" size-10"
              />
              <h3 className=" text-[#333333] text-[10px]">New Arrival</h3>
            </span>
            <span className=" flex flex-col items-center justify-center gap-1">
              <MdOutlineFitScreen className=" size-10" />
              <h3 className="text-[#333333] text-[10px]">Custom Fit</h3>
            </span>
            <span className=" flex flex-col items-center justify-center gap-1">
              <PiHandCoins className=" size-10" />
              <h3 className="text-[#333333] text-[10px]">Custom Fit</h3>
            </span>
          </div>

          <div className=" flex flex-row items-center gap-3">
            <h3 className="text-[14px] text-[#666666]">Our APP ON MOBILE</h3>
            <img
              width={120}
              height={120}
              src="/appstore.png"
              alt="appstore-logo"
            />
            <img
              src="/googlepay.png"
              width={120}
              height={120}
              alt="googlepay-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
