"use client";

import React, { useEffect, useState } from "react";
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
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const SinglePage = ({ data }) => {
  const [value, setValue] = useState(2);
  const [currentImage, setCurrentImage] = useState(null);
  const [colorName, setColorName] = useState(null);
  const [sumQuantityPrice, setSumQuantityPrice] = useState(1);
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();

  const showSize = (newSize) => {
    if (size && size.includes(newSize)) {
      return setSize(size.filter((size) => size !== newSize));
    }
    setSize([...size, newSize]);
  };

  useEffect(() => {
    if (data) {
      setCurrentImage(
        data.image.map((item) => ({
          original: "http://192.168.10.66:8000/images/" + item,
          thumbnail: "http://192.168.10.66:8000/images/" + item,
        }))
      );
    }
  }, [data]);

  const handleColorId = (color) => {
    setColorName(color.name);
    if (color.image.length > 0) {
      setCurrentImage(
        color.image.map((item) => ({
          original: "http://192.168.10.66:8000/images/" + item,
          thumbnail: "http://192.168.10.66:8000/images/" + item,
        }))
      );
    } else {
      setCurrentImage(
        data.image.map((item) => ({
          original: "http://192.168.10.66:8000/images/" + item,
          thumbnail: "http://192.168.10.66:8000/images/" + item,
        }))
      );
    }
  };

  const increment = () => {
    setSumQuantityPrice(Math.abs(sumQuantityPrice + 1));
  };

  const decrement = () => {
    setSumQuantityPrice(Math.max(1, sumQuantityPrice - 1));
  };

  const priceCalculation = (data) => {
    const price = data?.price * sumQuantityPrice;
    setPrice(price);
    return price;
  };
  const discountCalculation = (data) => {
    const discount = data?.price - data?.discount * sumQuantityPrice;
    setDiscount(discount);
    return discount;
  };

  const addToCart = (data) => {
    let preparedProduct = {
      product_id: data?._id,
      product_name: data?.name,
      discounted_price: discount,
      product_price: price,
      product_quantity: sumQuantityPrice,
      product_size: size,
      product_image: currentImage,
      product_color: colorName,
    };

    localStorage.setItem("preparedProduct", JSON.stringify(preparedProduct));
  };

  return (
    <>
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
            {currentImage && (
              <ImageGallery
                lazyLoad={true}
                thumbnailPosition="left"
                showPlayButton={false}
                items={currentImage}
                slideInterval="1000"
                thumbnailHeight="100"
                showFullscreenButton={false}
                additionalClass=""
              />
            )}
          </div>
          <div className=" *:mb-[8px]  md:*:mb-[15px]">
            <h6 className=" text-[#890DAB] text-sm md:text-xl font-medium uppercase">
              {data?.name}
            </h6>
            <h3 className="text-[#333] text-sm md:text-[16px] font-medium">
              {data?.content}
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
              {/* <Link
                href="#"
                className="bg-[#FCEBFF] hover:bg-[#B13CCD] px-[15px] py-2 rounded-[6px] text-[12px] md:text-sm hover:text-white ml-5 transition"
              >
                Add your review
              </Link> */}
            </div>
            <div className="space-y-3">
              <h4 className="capitalize">Colors: {colorName}</h4>
              <span className=" flex items-center gap-[10px]">
                {data?.color.map((color) => {
                  return (
                    <button
                      key={color?._id}
                      onClick={() => handleColorId(color)}
                      className={`bg-[${color.color_code}] size-[22px] hover:outline hover:outline-1 hover:outline-offset-2 rounded-full  cursor-pointer`}
                    ></button>
                  );
                })}
              </span>
            </div>

            <UsualMeasurement
              priceCalculation={priceCalculation}
              discountCalculation={discountCalculation}
              size={size}
              showSize={showSize}
              sumQuantityPrice={sumQuantityPrice}
              data={data}
              price={price}
              discount={discount}
            />
            {/* <CustomMeasurement /> */}

            <div>
              <h4>QTY</h4>
              <div className="flex items-center justify-center gap-5 h-full">
                <div className=" flex flex-col items-start space-y-1">
                  <div className="flex divide-x-2 border border-[#EAECF0]">
                    <div
                      onClick={() => decrement()}
                      className=" flex items-center justify-center size-10 cursor-pointer"
                    >
                      <LuMinus className=" text-lg  active:scale-75" />
                    </div>
                    <div className="font-bold flex items-center justify-center size-10">
                      {sumQuantityPrice}
                    </div>
                    <div
                      onClick={() => increment()}
                      className=" flex items-center justify-center size-10  cursor-pointer"
                    >
                      <GoPlus className=" text-lg  active:scale-75" />
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(data)}
                  // href="/products/singlepage/checkout"
                  className="capitalize text-center flex-1 bg-black text-white font-bold py-3.5"
                >
                  add to cart
                </button>
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
        {/* <Feedback />
        <ReviewForm /> */}
        <RecentView />
      </div>
    </>
  );
};

export default SinglePage;
