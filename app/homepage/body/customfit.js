import React from "react";
import Image from "next/image";

const CustomFit = () => {
  return (
    <div className=" w-full bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 relative outline-dashed outline-[1.5px] outline-offset-8 outline-[#7A0999] ">
      <div className="  h-full flex flex-col justify-between gap-14 absolute w-full left-0 right-0">
        <div className="h-[131px] w-full bg-white border-2 border-dotted border-[#7A0999]"></div>
        <div className="h-[131px] w-full bg-white border-2 border-dotted border-[#7A0999]"></div>
        <div className="h-[131px] w-full bg-white border-2 border-dotted border-[#7A0999]"></div>
        <div className="h-[131px] w-full bg-white border-2 border-dotted border-[#7A0999]"></div>
      </div>
      <div className=" max-w-[1250px] mx-auto z-10 bg-white relative px-5 md:px-8 lg:px-0">
        <div className="grid grid-cols-8 border-2 border-dotted border-[#7A0999] relative px-5 md:px-8 lg:px-0">
          <div className=" lg:col-span-6 col-span-8 order-step-container md:pt-20 pt-6 pb-[40px] lg:pb-[118px] lg:px-20 ">
            <div className=" flex flex-row items-center gap-5 mb-[20px] md:mb-[55px]">
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
              <h2 className=" text-[28px] md:text-[36px] text-[#57066D] leading-8">
                Custom Outfit
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <div className=" flex items-center gap-2 md:gap-5 mb-[39px]">
                <Image
                  width={195.74}
                  height={53.38}
                  src="/dotted-left.png"
                  alt="dotted lines"
                  className="object-cover md:w-48 md:h-14 w-22 h-6"
                />
                <h2 className=" text-[#7A0999] text-[24px] md:text-[33px] max-w-[260px] text-center font-semibold leading-8 md:leading-10">
                  <span className=" text-black">Get your</span> out fit{" "}
                  <span className="text-black">on</span> your own size
                </h2>
                <Image
                  width={195.74}
                  height={53.38}
                  src="/dotted-right.png"
                  alt="dotted lines"
                  className="object-cover md:w-48 md:h-14 w-22 h-6"
                />
              </div>
            </div>
            <div className="order-steps flex items-center justify-between mb-10">
              <div className="step-container">
                <h5 className="step flex items-center text-lg md:text-[24px] gap-2 md:gap-3">
                  Step
                  <div className=" size-4 md:size-5 text-white text-[10px] md:text-[18px] rounded-full flex items-center justify-center font-bold bg-[#7A0999] outline-dotted  outline-offset-2 outline-2 outline-[#7A0999]">
                    1
                  </div>
                </h5>
              </div>
              <div className="step-container">
                <h5 className="step flex items-center text-lg md:text-[24px] gap-3">
                  Step
                  <div className=" size-4 md:size-5 text-white text-[10px] md:text-[18px] rounded-full flex items-center justify-center font-bold bg-[#7A0999] outline-dotted  outline-offset-2 outline-2 outline-[#7A0999]">
                    2
                  </div>
                </h5>
              </div>
              <div className="step-container">
                <h5 className="steps flex items-center text-lg md:text-[24px] gap-3">
                  Step
                  <div className=" size-4 md:size-5 text-white text-[10px] md:text-[18px] rounded-full flex items-center justify-center font-bold bg-[#7A0999] outline-dotted  outline-offset-2 outline-2 outline-[#7A0999]">
                    3
                  </div>
                </h5>
              </div>
            </div>
            <div className="flex items-center justify-between gap-10">
              <div className=" flex flex-col items-center gap-5">
                <Image
                  src="/orderimg1.png"
                  width={512}
                  height={484}
                  alt="order img logo"
                  className=" md:size-16 size-8"
                />
                <h4 className=" text-[12px] md:text-base text-center">
                  CHOOSE AN OUTFIT
                </h4>
              </div>
              <div className=" flex flex-col items-center gap-5">
                <Image
                  src="/orderimg2.png"
                  width={450}
                  height={489}
                  alt="order img logo"
                  className=" md:size-16 size-8"
                />
                <h4 className="text-[12px] md:text-base text-center">
                  GIVE YOUR MEASUREMENT
                </h4>
              </div>
              <div className=" flex flex-col items-center gap-5">
                <Image
                  src="/orderimg3.png"
                  width={478}
                  height={478}
                  alt="order img logo"
                  className=" md:size-16 size-8"
                />
                <h4 className=" text-[12px] md:text-base text-center">
                  CHECKOUT AND PAY
                </h4>
              </div>
            </div>
            <div className=" flex justify-between w-full mt-10">
              <button className="py-2 text-sm md:text-base md:py-4 w-full text-white bg-[#7A0999] hover:bg-white active:scale-95 hover:text-[#7A0999] font-bold transition-all border-2 hover:border-[#7A0999]">
                ORDER NOW
              </button>
            </div>
          </div>
          <div className=" lg:col-span-2 col-span-8 w-full bg-white h-full">
            <div className=" relative z-20 lg:block hidden">
              <div className="absolute h-full w-full">
                <Image
                  src="/bg-shape.png"
                  width={453}
                  height={772}
                  alt="custom image"
                  className=""
                />
              </div>
              <div>
                <Image
                  src="/custom-img.png"
                  width={239}
                  height={692}
                  alt="custom image"
                  className="absolute left-[50%] translate-x-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFit;
