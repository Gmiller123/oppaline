import React from "react";
import Image from "next/image";

const Category = () => {
  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full">
      <div className=" max-w-[1390px] mx-auto px-5 lg:px-10">
        <div className=" grid grid-cols-2 gap-[21px]">
          <div className=" col-span-2 w-full relative ">
            <Image
              width={1667}
              height={1110}
              src="/category-1.png"
              alt="Craft"
              className=" object-cover w-full h-[350px]"
            />

            <div className="flex items-center justify-center flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className=" text-white text-[44px] font-bold mb-9">Craft</h1>
              <button className=" bg-[#9504A2] hover:text-[#9504A2] hover:border-[#9504A2] hover:border transition-all hover:bg-[#fff] text-white border-[0.804px] border-solid border-[#fff] px-[40px] py-[10px] font-black rounded-md">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className=" md:col-span-1 col-span-2 w-full relative">
            <Image
              width={800}
              height={400}
              src="/category-2.png"
              alt="Traditional women cloths"
              className=" object-cover w-full h-[500px]"
            />

            <div className="flex items-center justify-center flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className=" text-white text-[44px] font-bold">Craft</h1>
              <h2 className=" text-white text-[36px] text-center mb-9 lg:whitespace-nowrap">
                Women Clothes Collection
              </h2>
              <button className=" bg-[#9504A2] hover:text-[#9504A2] hover:border-[#9504A2] hover:border transition-all hover:bg-[#fff] text-white border-[0.804px] border-solid border-[#fff] px-[40px] py-[10px] font-black rounded-md">
                SHOP NOW
              </button>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 relative w-full">
            <Image
              width={800}
              height={400}
              src="/category-3.png"
              alt="Traditional men cloths"
              className=" object-cover w-full h-[500px]"
            />

            <div className="flex items-center justify-center flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className=" text-white text-[44px] font-bold">Traditional</h1>
              <h2 className=" text-white text-center text-[36px] mb-9 lg:whitespace-nowrap">
                Men Clothes Collection
              </h2>
              <button className=" bg-[#9504A2] hover:text-[#9504A2] hover:border-[#9504A2] hover:border transition-all hover:bg-[#fff] text-white border-[0.804px] border-solid border-[#fff] px-[40px] py-[10px] font-black rounded-md">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
