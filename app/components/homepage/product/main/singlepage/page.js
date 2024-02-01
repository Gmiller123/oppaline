"use client";

import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import UsualMeasurement from "./usual";
import CustomMeasurement from "./custom";

const images = [
  {
    original: "/product-img-fs.png",
    thumbnail: "/product-img.png",
  },
  {
    original: "/product-img1-fs.png",
    thumbnail: "/product-img1.png",
  },
  {
    original: "/product-img3-fs.png",
    thumbnail: "/product-img2.png",
  },
  {
    original: "/product-img2-fs.png",
    thumbnail: "/product-img3.png",
  },
];

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#890DAB",
  },
  "& .MuiRating-iconHover": {
    color: "#890DAB",
  },
});

const label = { inputProps: { "aria-label": "terms and conditions" } };

const SinglePage = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div className="">
      <div className="max-w-[1390px] mx-auto px-5">
        <Breadcrumbs className="pt-5" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="#">
            Home
          </Link>
          <Typography color="text.primary">Lehenga</Typography>
        </Breadcrumbs>

        <div className="pt-5 grid md:grid-cols-2 grid-cols-1 gap-10 pb-[72px]">
          <div
            className="abc"
            style={{
              color: "red",
              "& .image-gallery-left-nav .image-gallery-svg": {
                height: "30px",
                width: "30px",
              },
            }}
          >
            <ImageGallery
              lazyLoad={true}
              thumbnailPosition="left"
              showPlayButton={false}
              items={images}
              slideInterval="1000"
              thumbnailHeight="100"
              showFullscreenButton={false}
              additionalClass=""
            />
          </div>
          <div className="*:mb-[15px]">
            <h6 className=" text-[#890DAB] text-lg font-medium">LEHENGA</h6>
            <h3 className="text-[#000] text-[22px] font-bold">
              GEORGETTE EMBROIDERY SALWAR KAMEEZ
            </h3>
            <h5 className=" text-lg text-[#000] font-medium">NEW IN</h5>

            <div className=" flex items-center border-b-2 pb-4 border-[#000]/5">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>

              <h5 className="text-sm text-[#98A2B3] pl-[5px]">(120)</h5>
              <Link
                href="#"
                className="bg-[#FCEBFF] hover:bg-[#B13CCD] px-[15px] py-2 rounded-[6px] text-sm hover:text-white ml-5 transition"
              >
                Add your review
              </Link>
            </div>
            <div className="space-y-3">
              <h4>Colors: Red</h4>
              <span className=" flex items-center gap-[10px]">
                <div className=" bg-[#C4320A] size-[22px] hover:outline hover:outline-1 hover:outline-offset-4 rounded-full  cursor-pointer"></div>
                <div
                  value="red"
                  className=" bg-[#4E5BA6] size-[22px] hover:outline hover:outline-1 hover:outline-offset-4 rounded-full  cursor-pointer"
                ></div>
                <div
                  value="red"
                  className=" bg-[#000] size-[22px] hover:outline hover:outline-1 hover:outline-offset-4 rounded-full  cursor-pointer"
                ></div>
                <div
                  value="red"
                  className=" bg-[#FDB022] size-[22px] hover:outline hover:outline-1 hover:outline-offset-4 rounded-full  cursor-pointer"
                ></div>
              </span>
            </div>

            <UsualMeasurement />
            {/* <CustomMeasurement /> */}

            <div>
              <h4>QTY</h4>
              <div className="flex items-center justify-center gap-5 h-full">
                <input
                  placeholder="0"
                  type="number"
                  className="w-16 p-3 border-2 border-[#98A2B3]"
                />
                <Link
                  href="/components/homepage/product/main/singlepage/checkout"
                  className="text-center flex-1 bg-black text-white font-bold py-3.5"
                >
                  Check Out
                </Link>
                <button className="flex items-center justify-center p-3 border border-[#98A2B3]">
                  <Image
                    width={24}
                    height={24}
                    src="/love.svg"
                    alt="heart logo"
                  />
                </button>
              </div>
            </div>

            <Accordion type="multiple" collapsible="true" className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger className="text-lg">Details</AccordionTrigger>
                <AccordionContent>
                  <h4 className=" text-sm text-[#1D2939]">Fabric & works</h4>
                  <ul className=" list-inside list-disc text-[12px] text-[#667085]">
                    <li className="">Top: Embriodered Premium Chiffon</li>
                    <li>Bottomm: Dyed Grip</li>
                    <li>Dupatta: Chiffon</li>
                  </ul>

                  <h4 className=" text-sm mt-[17px] text-[#1D2939]">
                    Fabric & works
                  </h4>
                  <span className=" text-[12px] text-[#667085]">
                    <Link href="#" className="underline">
                      Salwar Kameez
                    </Link>{" "}
                    /
                    <Link href="#" className="underline">
                      Pakistani Dress
                    </Link>
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="delivery">
                <AccordionTrigger className="text-lg">
                  Delivery & Returns
                </AccordionTrigger>
                <AccordionContent>
                  <h4 className=" text-sm">Delivery</h4>
                  <p className="text-[12px] text-[#667085]">
                    Australian Standard Delivery $99.9 | 4-8 Business Days
                  </p>
                  <p className="text-[12px] text-[#667085] mb-1">
                    Australian Next Business Day/Express Delivery $14.99 | 1-3
                    Business Days
                  </p>
                  <Link
                    href="#"
                    className="underline text-[15px] text-[#667085] hover:text-[#333]"
                  >
                    View full delivery information
                  </Link>

                  <h4 className=" text-sm mt-5">Returns</h4>
                  <p className="text-[12px] text-[#667085]">
                    Australian Standard Delivery $99.9 | 4-8 Business Days
                  </p>
                  <p className="text-[12px] text-[#667085] mb-1">
                    Australian Next Business Day/Express Delivery $14.99 | 1-3
                    Business Days
                  </p>

                  <Link
                    href="#"
                    className="underline text-[15px] text-[#667085] hover:text-[#333]"
                  >
                    View full delivery information
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex items-center gap-2">
              <h3>Share:</h3>
              <Image width={28} height={28} src="/tiktok.svg" alt="tiktok" />
              <Image width={28} height={28} src="/fb.svg" alt="facebook" />
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:divide-x-2 md:divide-y-0 divide-y-2 border-b pb-5">
          <div className="flex flex-col justify-between space-y-[10px] md:pr-10 md:pb-0 pb-6">
            <div>
              <div className=" flex items-center gap-3 mb-3">
                <h2 className="text-lg font-bold">4.5</h2>
                <span>
                  <div className="bg-[#890DAB] flex items-center gap-2 px-3 py-2">
                    <FaStar className="text-[#FCEBFF] size-6" />
                    <h4 className=" text-[#FCEBFF] text-lg">Top Rated</h4>
                  </div>
                </span>
              </div>

              <Box
                sx={{
                  "& > legend": { mt: 0 },
                }}
                className="flex flex-col space-y-[10px]"
              >
                <StyledRating
                  className="space-x-1"
                  name="customized-color"
                  defaultValue={5}
                  getLabelText={(value) =>
                    `${value} Heart${value !== 1 ? "s" : ""}`
                  }
                  precision={0.5}
                  icon={<FaStar fontSize="22px" />}
                  emptyIcon={<FaStar fontSize="22px" />}
                />
                <Typography
                  className=" text-[#475467] text-[22px] font-bold"
                  component="legend"
                >
                  291 ratings
                </Typography>
              </Box>
            </div>
            <Link className=" text-[#475467] text-sm" href="">
              Click to rate
            </Link>
          </div>
          <div className="md:pl-10 md:pt-0 pt-6">
            <h2 className=" text-[#475467] text-[22px] mb-[10px] font-bold">
              Overall rating
            </h2>

            <div className=" space-y-[10px]">
              <div>
                <div className="flex items-center gap-3">
                  <h4 className=" text-lg">291</h4>
                  <Box
                    sx={{
                      "& > legend": { mt: 0 },
                    }}
                    className="flex space-y-[10px]"
                  >
                    <StyledRating
                      className="space-x-1"
                      name="customized-color"
                      defaultValue={5}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FaStar fontSize="22px" />}
                      emptyIcon={<FaStar fontSize="22px" />}
                    />
                  </Box>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className=" text-lg">156</h4>
                  <Box
                    sx={{
                      "& > legend": { mt: 0 },
                    }}
                    className="flex space-y-[10px]"
                  >
                    <StyledRating
                      className="space-x-1"
                      name="customized-color"
                      defaultValue={4}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FaStar fontSize="22px" />}
                      emptyIcon={<FaStar fontSize="22px" />}
                    />
                  </Box>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h4 className=" text-lg">125</h4>
                  <Box
                    sx={{
                      "& > legend": { mt: 0 },
                    }}
                    className="flex space-y-[10px]"
                  >
                    <StyledRating
                      className="space-x-1"
                      name="customized-color"
                      defaultValue={3}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FaStar fontSize="22px" />}
                      emptyIcon={<FaStar fontSize="22px" />}
                    />
                  </Box>
                </div>
              </div>
              <div>
                <div className="flex md:justify-between items-center gap-3">
                  <h4 className=" text-lg">16</h4>
                  <Box
                    sx={{
                      "& > legend": { mt: 0 },
                    }}
                    className="flex space-y-[10px]"
                  >
                    <StyledRating
                      name="customized-color"
                      defaultValue={2}
                      className="space-x-1"
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FaStar fontSize="22px" />}
                      emptyIcon={<FaStar fontSize="22px" />}
                    />
                  </Box>
                </div>
              </div>
              <div>
                <div className="flex md:justify-between items-center gap-3">
                  <h4 className=" text-lg">8</h4>
                  <Box
                    sx={{
                      "& > legend": { mt: 0 },
                    }}
                    className="flex space-y-[10px]"
                  >
                    <StyledRating
                      className="space-x-1"
                      name="customized-color"
                      defaultValue={1}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FaStar fontSize="22px" />}
                      emptyIcon={<FaStar fontSize="22px" />}
                    />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 space-y-5 border-b">
          <div>
            <span className=" flex items-center gap-5">
              <Image
                width={52}
                height={52}
                src="/boy-avatar.svg"
                alt="avatar"
              />
              <span className=" space-y-[8px]">
                <span className=" flex items-center gap-[10px]">
                  <h3 className=" font-bold">Aashish G.</h3>
                  <Box
                    sx={{
                      "& > legend": { mt: 0 },
                    }}
                    className="flex space-y-[10px]"
                  >
                    <StyledRating
                      className="space-x-1"
                      name="customized-color"
                      defaultValue={3}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FaStar fontSize="22px" />}
                      emptyIcon={<FaStar fontSize="22px" />}
                    />
                  </Box>
                </span>
                <p className=" text-[#000] text-[12px]">
                  et deserunt elit do laboris ea nulla ea magna Lorem voluptate
                  reprehenderit velit id irure non exercitation excepteur magna
                  eiusmod nisi ut ex{" "}
                </p>
              </span>
            </span>
          </div>
          <div>
            <span className=" flex items-center gap-[20px]">
              <Image
                width={52}
                height={52}
                src="/girl-avatar.svg"
                alt="avatar"
              />
              <span className=" space-y-[8px]">
                <span className=" flex items-center gap-[10px]">
                  <h3 className=" font-bold">Aashish G.</h3>
                  <Box
                    sx={{
                      "& > legend": { mt: 0 },
                    }}
                    className="flex space-y-[10px]"
                  >
                    <StyledRating
                      className="space-x-1"
                      name="customized-color"
                      defaultValue={3}
                      getLabelText={(value) =>
                        `${value} Heart${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      icon={<FaStar fontSize="22px" />}
                      emptyIcon={<FaStar fontSize="22px" />}
                    />
                  </Box>
                </span>
                <p className=" text-[#000] text-[12px]">
                  et deserunt elit do laboris ea nulla ea magna Lorem voluptate
                  reprehender
                </p>
              </span>
            </span>
          </div>
        </div>
        <div className="mb-[111px]">
          <p className=" text-[12px] text-[#000] py-5">
            You will be able to receive emails in connection with this review
            (eg if others comment on your review). All emails contain the option
            to unsubscribe. We can use the text and star rating from your review
            in other marketing.
          </p>

          <form className=" space-y-5" action="">
            <span className=" flex flex-col gap-1.5">
              <label className=" text-sm font-medium" htmlFor="review title">
                Review Title
              </label>
              <input
                type="text"
                placeholder="Example: Easy to use"
                className=" placeholder:text-[#98A2B3] indent-2 text-[12px] border-[#D0D5DD] rounded-[6px] py-[15px] p-3 border focus:outline-none focus:ring-2 focus:shadow-md focus:ring-[#B13CCD]"
              />
            </span>
            <h4 className=" text-[#475467] text-base font-bold">
              Would you recommend this product to a friend?
            </h4>

            <span className=" flex flex-col gap-1.5">
              <label className=" text-sm font-medium" htmlFor="review title">
                Review Title
              </label>
              <textarea
                rows={5}
                type="textarea"
                placeholder="Example: Easy to use"
                className=" resize-none placeholder:text-[#98A2B3] indent-2 text-[12px] border-[#D0D5DD] rounded-[6px] py-[15px] p-3 border focus:outline-none focus:ring-2 focus:shadow-md focus:ring-[#B13CCD]"
              />
            </span>

            <div className=" grid grid-cols-4 gap-5">
              <div className=" md:col-span-1 col-span-5">
                <span className=" flex flex-col gap-1.5">
                  <label
                    className=" text-sm font-medium"
                    htmlFor="review title"
                  >
                    Nickname
                  </label>
                  <input
                    type="text"
                    placeholder="Example: Bob28"
                    className=" placeholder:text-[#98A2B3] indent-2 text-[12px] border-[#D0D5DD] rounded-[6px] py-[15px] p-3 border focus:outline-none focus:ring-2 focus:shadow-md focus:ring-[#B13CCD]"
                  />
                </span>
              </div>
              <div className=" md:col-span-1 col-span-5">
                <span className=" flex flex-col gap-1.5">
                  <label
                    className=" text-sm font-medium whitespace-nowrap"
                    htmlFor="review title"
                  >
                    Email Address (will not be published)
                  </label>
                  <input
                    type="text"
                    placeholder="Example: you@email.com"
                    className=" placeholder:text-[#98A2B3] indent-2 text-[12px] border-[#D0D5DD] rounded-[6px] py-[15px] p-3 border focus:outline-none focus:ring-2 focus:shadow-md focus:ring-[#B13CCD]"
                  />
                </span>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <Checkbox
                className="p-0"
                required
                defaultChecked={false}
                {...label}
                sx={{
                  color: "#6E0586",
                  "&.Mui-checked": {
                    color: "#6E0586",
                  },
                }}
              />

              <p className="text-[12px]">I accept terms & conditions</p>
            </div>
            <p className=" text-[12px] max-w-[650px]">
              You will be able to receive emails in connection with this review
              (eg if others comment on your review). All emails contain the
              option to unsubscribe. We can use the text and star rating from
              your review in other marketing.
            </p>
            <button className=" bg-[#6E0586] rounded-[6px] text-white p-[10px] text-base">
              Submit product review
            </button>
          </form>
        </div>

        <div className="border-right-container ">
          <h1 className=" font-bold lg:text-[28px] md:text-[25px] text-xl mb-10">
            Recently Viewed
          </h1>

          <div className=" grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 pb-20">
            <Carousel className="relative">
              <CarouselContent>
                <CarouselItem className="flex flex-col">
                  <Image
                    width={600}
                    height={849}
                    src="/pant-img2.png"
                    alt="pant image"
                    className="w-full h-auto"
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                    className="w-full h-auto"
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                    className="w-full h-auto"
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                    className="w-full h-auto"
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
                        <h5 className=" text-[12px] text-[#000]">+8 COLOURS</h5>
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
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
