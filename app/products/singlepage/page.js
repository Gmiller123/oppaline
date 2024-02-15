"use client";

import React from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import Box from "@mui/material/Box";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import UsualMeasurement from "./usual";
import CustomMeasurement from "./custom";
import ProductDetails from "./productdetails";
import Ratings from "./ratings";
import Feedback from "./feedback";
import ReviewForm from "./reviewform";
import RecentView from "./recentlyview";
import BreadcrumbsLink from "./breadcrumb";

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

const SinglePage = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div className="">
      <div className="max-w-[1390px] mx-auto px-5">
        <BreadcrumbsLink />
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
          <div className=" *:mb-[8px]  md:*:mb-[15px]">
            <h6 className=" text-[#890DAB] text-sm md:text-lg font-medium">
              LEHENGA
            </h6>
            <h3 className="text-[#000] text-lg md:text-[22px] font-bold">
              GEORGETTE EMBROIDERY SALWAR KAMEEZ
            </h3>
            <h5 className=" text-sm md:text-lg text-[#000] font-medium">
              NEW IN
            </h5>

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
                className="bg-[#FCEBFF] hover:bg-[#B13CCD] px-[15px] py-2 rounded-[6px] text-[12px] md:text-sm hover:text-white ml-5 transition"
              >
                Add your review
              </Link>
            </div>
            <div className="space-y-3">
              <h4 className="">Colors: Red</h4>
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

            {/* <UsualMeasurement /> */}
            <CustomMeasurement />

            <div>
              <h4>QTY</h4>
              <div className="flex items-center justify-center gap-5 h-full">
                <input
                  placeholder="0"
                  type="number"
                  className="w-16 p-3 border-2 border-[#98A2B3]"
                />
                <Link
                  href="/products/singlepage/checkout"
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

            <ProductDetails />

            <div className="flex items-center gap-2">
              <h3>Share:</h3>
              <Image width={28} height={28} src="/tiktok.svg" alt="tiktok" />
              <Image width={28} height={28} src="/fb.svg" alt="facebook" />
            </div>
          </div>
        </div>

        <Ratings />
        <Feedback />
        <ReviewForm />
        <RecentView />
      </div>
    </div>
  );
};

export default SinglePage;
