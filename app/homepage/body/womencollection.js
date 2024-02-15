import React from "react";
import Image from "next/image";

const WomenCollection = () => {
  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full ">
      <div className="max-w-[1390px] mx-auto px-5 lg:px-10">
        <div className=" flex flex-row items-center gap-5 mb-[20px] md:mb-[60px]">
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
          <h2 className=" text-[28px] md:text-[36px] text-[#57066D] ">
            Women Collection
          </h2>
        </div>

        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className=" relative">
            <Image width={874} height={960} src="/sari.png" alt="sari" />
            <h1 className=" absolute top-[75%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[36px]">
              Sari
            </h1>
          </div>
          <div className=" relative">
            <Image width={874} height={960} src="/lehenga.png" alt="saree" />
            <h1 className=" absolute top-[75%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[36px]">
              Lehenga
            </h1>
          </div>
          <div className=" relative">
            <Image
              width={874}
              height={960}
              src="/traditional.png"
              alt="traditional"
            />
            <h1 className=" absolute top-[75%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[36px]">
              Traditional
            </h1>
          </div>
          <div className=" relative">
            <Image width={874} height={960} src="/sari.png" alt="saree" />
            <h1 className=" absolute top-[75%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[36px]">
              Sari
            </h1>
          </div>
          <div className=" relative">
            <Image width={874} height={960} src="/lehenga.png" alt="lehenga" />
            <h1 className=" absolute top-[75%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[36px]">
              Lehenga
            </h1>
          </div>
          <div className=" relative">
            <Image width={874} height={960} src="/sari.png" alt="saree" />
            <h1 className=" absolute top-[75%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[36px]">
              Sari
            </h1>
          </div>
          <div className=" relative">
            <Image
              width={874}
              height={960}
              src="/traditional.png"
              alt="saree"
            />
            <h1 className=" absolute top-[75%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[36px]">
              Traditional
            </h1>
          </div>
          <div className=" relative">
            <Image width={874} height={960} src="/sari.png" alt="saree" />
            <h1 className=" absolute top-[75%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-[36px]">
              Saree
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenCollection;
