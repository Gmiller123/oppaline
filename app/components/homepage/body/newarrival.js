import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const NewArrival = () => {
  return (
    <div className=" bg-gradient-to-r from-[#fdfbff] to-[#f9e2ff] bg-opacity-20 py-[64px] w-full">
      <div className=" max-w-[1350px] mx-auto px-5 md:px-8 lg:px-0">
        <Tabs defaultValue="women" className="w-full divide-y-2">
          <div className=" flex lg:flex-row flex-col lg:items-end gap-5 pb-3">
            <div className=" flex flex-row items-center gap-5">
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
              <h2 className=" text-[36px] text-[#57066D] ">New Arrival</h2>
            </div>
            <TabsList className="md:*:text-[17.2px] *:text-[14.2px] bg-transparent text-[#666666] gap-5 justify-start lg:justify-center">
              <TabsTrigger
                className=" shadow-sm:data[state=active]:box-shadow-none  data-[state=active]:bg-transparent data-[state=active]:text-[#65077F] data-[state=active]:border-b-4 data-[state=active]:border-[#65077F] hover:border-b-4 border-b-4 border-transparent hover:border-[#65077F] transition-all duration-500"
                value="women"
              >
                Women
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-transparent data-[state=active]:text-[#65077F] hover:border-b-4 border-b-4 border-transparent hover:border-[#65077F] transition-all duration-500 data-[state=active]:border-b-4 data-[state=active]:border-[#65077F]"
                value="men"
              >
                Men
              </TabsTrigger>
              <TabsTrigger
                className=" data-[state=active]:bg-transparent data-[state=active]:text-[#65077F] hover:border-b-4 border-b-4 border-transparent hover:border-[#65077F] transition-all duration-500 data-[state=active]:border-b-4 data-[state=active]:border-[#65077F]"
                value="traditional"
              >
                Traditional
              </TabsTrigger>
              <TabsTrigger
                className="data-[state=active]:bg-transparent data-[state=active]:text-[#65077F] hover:border-b-4 border-b-4 border-transparent hover:border-[#65077F] transition-all duration-500 data-[state=active]:border-b-4 data-[state=active]:border-[#65077F]"
                value="craft"
              >
                Craft
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="pt-3">
            <TabsContent value="women">
              <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress2.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress3.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress4.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress5.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="men">
              <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress2.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress3.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress4.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress5.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="traditional">
              <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress3.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress4.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress5.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress2.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="craft">
              <div className=" grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-8">
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress4.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress5.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress2.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
                <div className=" flex flex-col gap-1">
                  <Image
                    width={600}
                    height={800}
                    src="/tab-dress3.png"
                    alt="yellow full dress"
                    className="object-cover h-[350px] w-full"
                  />
                  <p className=" text-sm capitalize text-[#333]">
                    Red Bandhani Silk Woven Saree With Unstitched Blouse Piece
                  </p>
                  <span className=" flex items-center justify-between">
                    <span className=" flex gap-1 text-[15.366px]">
                      <h4 className="text-[#808285]">
                        <strike>$79.95</strike>
                      </h4>
                      <h4 className="">$79.95</h4>
                    </span>
                    <button className=" text-[12px] bg-[#7A0999] px-[8px] py-[4px] rounded text-white hover:border-[#7A0999] hover:border border hover:bg-white hover:text-[#7A0999]">
                      SHOP NOW
                    </button>
                  </span>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default NewArrival;
