import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const FilterSection = () => {
  return (
    <div className="">
      <div className="max-w-[1390px] mx-auto px-5 md:px-8 lg:px-5">
        <Breadcrumbs className="pt-5" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="#">
            Product
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>

        <div className="grid grid-cols-5 pt-5 gap-5">
          <div className=" md:col-span-2 lg:col-span-1 col-span-5">
            <div className=" divide-y-2">
              <h3 className=" font-bold pb-4">Filter</h3>

              <Accordion
                collapsible="true"
                type="multiple"
                className="w-full"
                defaultValue={[
                  "category",
                  "subCategory",
                  "color",
                  "size",
                  "material",
                ]}
              >
                <AccordionItem value="category">
                  <AccordionTrigger className="AccordionTrigger font-bold">
                    Category
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Shirts <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Pants <span className="pl-1">(105)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Tshirts <span className="pl-1">(135)</span>
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="subCategory">
                  <AccordionTrigger className="AccordionTrigger font-bold">
                    Sub-Category
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        box-shirt <span className="pl-1">(145)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Jeans-Pants <span className="pl-1">(75)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Tshirts <span className="pl-1">(125)</span>
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="size">
                  <AccordionTrigger className="AccordionTrigger font-bold">
                    Size
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Small <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Medium <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Large <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        XL <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        XXL <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        XXXL <span className="pl-1">(195)</span>
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="color">
                  <AccordionTrigger className="AccordionTrigger font-bold">
                    Color
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        className="bg-red-300 border-red-300 rounded-full"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Red <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        className="bg-blue-300 border-blue-300 rounded-full"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Blue <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        className="bg-orange-300 border-orange-300 rounded-full"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Orange <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        className="bg-yellow-300 border-yellow-300  rounded-full"
                        id="terms"
                      />
                      <label
                        htmlFor="terms"
                        className="  text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Yellow <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        className="bg-green-300 border-green-300 rounded-full"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Green <span className="pl-1">(195)</span>
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="material">
                  <AccordionTrigger className="AccordionTrigger font-bold">
                    Material
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Cotton <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Polyster <span className="pl-1">(195)</span>
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Cargo <span className="pl-1">(195)</span>
                      </label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className=" md:col-span-3 lg:col-span-4 col-span-5">
            <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10">
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Link href="/components/homepage/product/main/singlepage">
                      <Image
                        width={600}
                        height={849}
                        src="/pant-img2.png"
                        alt="pant image"
                        className="w-full h-auto"
                      />
                    </Link>

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img2.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>

              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img2.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
              <Carousel className="relative">
                <CarouselContent>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex flex-col">
                    <Image
                      width={600}
                      height={849}
                      src="/pant-img1.png"
                      alt="pant image"
                      className=""
                    />

                    <div>
                      <div className="flex items-center justify-between pt-5">
                        <span className=" flex flex-col gap-2">
                          <h4 className="text-base font-semibold text-[#000]">
                            Ursula Milano Tank
                          </h4>
                          <span className=" flex gap-1">
                            <h5 className="text-[#667085] font-semibold">
                              <strike>$79.95</strike>
                            </h5>
                            <h5 className=" font-semibold">$79.95</h5>
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
                          <div className="bg-[#D92D20] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#4E5BA6] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#000000] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                          <div className="bg-[#FDB022] size-4 rounded-full hover:outline-offset-2 hover:outline hover:outline-[#EAECF0] cursor-pointer"></div>
                        </span>
                        <span>
                          <h5 className=" text-[12px] text-[#000]">
                            +8 COLOURS
                          </h5>
                        </span>
                      </span>
                      <h3 className=" text-[#890DAB] text-sm pt-[8px]">
                        50% Off. Shop Today
                      </h3>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-5 top-[40%]" />
                <CarouselNext className="absolute right-5 top-[40%]" />
              </Carousel>
            </div>
            <div className="flex items-center justify-between py-10">
              <span className="">
                <p>Product:1 - 48 of 207</p>
              </span>
              <span className=" flex-1 flex items-center justify-center">
                <button className="bg-[#000] text-sm lg:px-28 lg:py-3 md:px-20 px-10 text-white font-semibold">
                  SHOW 48 MORE
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
