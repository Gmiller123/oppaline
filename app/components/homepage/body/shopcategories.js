import React from "react";
import Image from "next/image";

const ShopCategories = () => {
  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full">
      <div className=" max-w-[1350px] mx-auto px-5 md:px-8 lg:px-0">
        <div className=" flex flex-row items-center mb-[20px] gap-5  md:mb-[60px]">
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
            Shop By Category
          </h2>
        </div>

        <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-full">
          <div className=" relative">
            <Image
              width={874}
              height={960}
              src="/mencollection.png"
              alt="mencollection"
              className=" object-cover h-[450px] w-full"
            />
            <div className="w-full flex items-center justify-center flex-col absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className=" text-white text-[24px] font-bold mb-4">
                Men Wear Collection
              </h1>

              <button className=" bg-[#fff] hover:text-[#fff] text-[14px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[40px] py-[12px] font-black rounded-md">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className=" relative">
            <Image
              width={874}
              height={960}
              src="/lehenga.png"
              alt="saree"
              className=" object-cover h-[450px] w-full"
            />
            <div className="w-full flex items-center justify-center flex-col absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className=" text-white text-[24px] font-bold mb-4">
                Women Wear Collection
              </h1>

              <button className=" bg-[#fff] hover:text-[#fff] text-[14px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[40px] py-[12px] font-black rounded-md">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className=" relative">
            <Image
              width={874}
              height={960}
              src="/traditional.png"
              alt="traditional"
              className=" object-cover h-[450px] w-full"
            />
            <div className="w-full flex items-center justify-center flex-col absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className=" text-white text-[24px] font-bold mb-4">
                Traditional Collection
              </h1>

              <button className=" bg-[#fff] hover:text-[#fff] text-[14px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[40px] py-[12px] font-black rounded-md">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className=" relative">
            <Image
              width={874}
              height={960}
              src="/craft.png"
              alt="Craft Collection"
              className=" object-cover h-[450px] w-full"
            />
            <div className="w-full flex items-center justify-center flex-col absolute top-[80%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className=" text-white text-[24px] font-bold mb-4">
                Craft Collection
              </h1>

              <button className=" bg-[#fff] hover:text-[#fff] text-[14px] hover:border-[#fff] hover:border transition-all hover:bg-[#9504A2] text-[#9504A2] border-[0.804px] border-solid border-[#9504A2] px-[40px] py-[12px] font-black rounded-md">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCategories;
