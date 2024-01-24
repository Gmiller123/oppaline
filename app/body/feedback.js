"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/imagae";

const CustomerFeedback = () => {
  const feedbackSlider = useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    customPaging: function () {
      return <div className="custom-slick-indicator-feedback"></div>;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full">
      <div className=" max-w-[1350px] mx-auto px-5 md:px-8 lg:px-12">
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
      <div className=" max-w-[1385px] mx-auto px-5 md:px-8 lg:px-0">
        <div className=" relative">
          <button
            onClick={() => feedbackSlider.current.slickPrev()}
            className=" absolute z-10 top-[50%] translate-y-[-50%] left-0"
          >
            <MdKeyboardArrowLeft className=" text-[40px] text-[#7A0999] bg-[#FBEFFF] border hover:bg-[#7A0999] hover:text-white border-[#7A0999] rounded-full transition-all" />
          </button>
          <Slider ref={feedbackSlider} className="feedback" {...settings}>
            <div className="slide-through">
              <div className="card flex md:flex-row flex-col items-center gap-[45px] border border-[#000000]/15 p-[28px] rounded-lg bg-[#fff]/40">
                <Image
                  src="/white-dress.png"
                  width={225}
                  height={300}
                  alt="women with white dress"
                  className=" object-cover w-full"
                />
                <div>
                  <p className=" text-base text-[#666] mb-[24px]">
                    Thanks to Opaline Shop, I found the perfect fit for my
                    costume—a truly excellent purchase overall.
                  </p>
                  <h3 className=" text-base text-[#222]">Durga Lamsal</h3>
                  <h4 className=" text-base text-[#666]">Nepal</h4>
                </div>
              </div>
            </div>
            <div className="slide-through">
              <div className="card flex md:flex-row flex-col items-center gap-[45px] border border-[#000000]/15 p-[28px] rounded-lg bg-[#fff]/40">
                <Image
                  src="/white-dress.png"
                  width={225}
                  height={300}
                  alt="women with white dress"
                  className=" object-cover w-full"
                />
                <div>
                  <p className=" text-base text-[#666] mb-[24px]">
                    Thanks to Opaline Shop, I found the perfect fit for my
                    costume—a truly excellent purchase overall.
                  </p>
                  <h3 className=" text-base text-[#222]">Durga Lamsal</h3>
                  <h4 className=" text-base text-[#666]">Nepal</h4>
                </div>
              </div>
            </div>
            <div className="slide-through">
              <div className="card flex md:flex-row flex-col items-center gap-[45px] border border-[#000000]/15 p-[28px] rounded-lg bg-[#fff]/40">
                <Image
                  src="/white-dress.png"
                  width={225}
                  height={300}
                  alt="women with white dress"
                  className=" object-cover w-full"
                />
                <div>
                  <p className=" text-base text-[#666] mb-[24px]">
                    Thanks to Opaline Shop, I found the perfect fit for my
                    costume—a truly excellent purchase overall.
                  </p>
                  <h3 className=" text-base text-[#222]">Durga Lamsal</h3>
                  <h4 className=" text-base text-[#666]">Nepal</h4>
                </div>
              </div>
            </div>
          </Slider>
          <button
            onClick={() => feedbackSlider.current.slickNext()}
            className=" absolute z-10 top-[50%] translate-y-[-50%] right-0"
          >
            <MdKeyboardArrowRight className=" text-[40px] text-[#7A0999] bg-[#FBEFFF] border border-[#7A0999] hover:bg-[#7A0999] hover:text-white rounded-full transition-all " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
