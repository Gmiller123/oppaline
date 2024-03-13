"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import UsualMeasurement from "./usual";
import CustomMeasurement from "./custom";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import ProductDetails from "./productdetails";
import "react-image-gallery/styles/css/image-gallery.css";
import { useToast } from "@/components/ui/use-toast";

const AddToCart = ({ product }) => {
  const [value, setValue] = useState(2);
  const [currentImage, setCurrentImage] = useState(null);
  const [colorName, setColorName] = useState([]);
  const [sumQuantityPrice, setSumQuantityPrice] = useState(1);
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const { toast } = useToast();
  const [localStorageData, setLocalStorageData] = useState([]);
  const [changeStates, setChangeState] = useState(null);

  /** for fetching single data details */
  const local_url = process.env.NEXT_PUBLIC_URL;
  const [data, setData] = useState(null);

  const fetchSinglePageData = async () => {
    try {
      const res = await fetch(local_url + `/product/${product}`);
      const { data } = await res.json();
      setData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (product) {
      fetchSinglePageData();
    }
  }, [product]);

  const showSize = (newSize) => {
    if (size && size.includes(newSize)) {
      return setSize(size.filter((prevSize) => prevSize !== newSize));
    }
    setSize([...size, newSize]);
  };

  useEffect(() => {
    if (data) {
      setCurrentImage(
        data.image.map((item) => ({
          original: "http://192.168.10.77:8000/images/" + item,
          thumbnail: "http://192.168.10.77:8000/images/" + item,
        }))
      );
    }
  }, [data]);

  const handleColorId = (color) => {
    if (colorName && colorName.includes(color.name)) {
      return setColorName(
        colorName.filter((prevColor) => prevColor !== color.name)
      );
    }
    setColorName([...colorName, color.name]);

    if (color.image.length > 0) {
      setCurrentImage(
        color.image.map((item) => ({
          original: "http://192.168.10.77:8000/images/" + item,
          thumbnail: "http://192.168.10.77:8000/images/" + item,
        }))
      );
    } else {
      setCurrentImage(
        data.image.map((item) => ({
          original: "http://192.168.10.77:8000/images/" + item,
          thumbnail: "http://192.168.10.77:8000/images/" + item,
        }))
      );
    }
  };

  const increment = () => {
    setSumQuantityPrice((prevSum) => Math.abs(prevSum + 1));
  };

  const decrement = () => {
    setSumQuantityPrice((prevDecre) => Math.max(1, prevDecre - 1));
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

  useEffect(() => {
    if (localStorage.getItem("preparedProduct")) {
      let data = JSON.parse(localStorage.getItem("preparedProduct"));
      setLocalStorageData(data);
    }
  }, [changeStates]);

  const addToCart = (data) => {
    setChangeState({ triggered: "success" });
    let preparedProduct = {
      product_id: data?._id,
      product_quantity: sumQuantityPrice,
      product_size: size,
      product_color: colorName,
    };

    if (
      localStorageData.length > 0 &&
      localStorageData.filter((item) => item.product_id === data._id).length > 0
    ) {
      // Shallow copy to modify array
      let tempCartltems = [...localStorageData];

      let tempData = [...tempCartltems];

      // let do filter data, fnd last in index, last ndex data get
      const currentIndex =
        tempData.filter((item) => item.product_id === data._id).length - 1;

      // get the available product by id
      const filteredData = tempData.at(currentIndex);

      // object qty, size and product color update gareko
      preparedProduct.product_quantity =
        parseInt(filteredData.product_quantity) + parseInt(sumQuantityPrice);

      //Size condition
      preparedProduct.product_size =
        size.length === 0
          ? []
          : filteredData.product_size.filter((item) => size.includes(item))
              .length > 0
          ? [
              ...filteredData.product_size.filter((item) =>
                size.includes(!item)
              ),
              ...size,
            ]
          : [...filteredData.product_size, ...size];

      //Color condition

      preparedProduct.product_color =
        colorName.length === 0
          ? []
          : filteredData.product_color.filter((item) =>
              colorName.includes(item)
            ).length > 0
          ? [
              ...filteredData.product_color.filter((item) =>
                colorName.includes(!item)
              ),
              ...colorName,
            ]
          : [...filteredData.product_color, ...colorName];

      // update object array add gareko
      tempCartltems.push(preparedProduct);

      // finallay up[date in the local storag

      tempCartltems.forEach((element, index) => {
        if (element.product_id === preparedProduct.product_id) {
          tempCartltems[index] = preparedProduct;
        }
      });

      let uniqueArray = tempCartltems.filter(function (item, pos) {
        return tempCartltems.indexOf(item) == pos;
      });

      localStorage.setItem("preparedProduct", JSON.stringify(uniqueArray));
    } else {
      preparedProduct && localStorageData.push(preparedProduct);
      localStorage.setItem("preparedProduct", JSON.stringify(localStorageData));
    }

    toast({
      title: "Successfully Added!!",
    });
  };

  return (
    <div className="pt-5 grid md:grid-cols-2 grid-cols-1 gap-10 pb-[4.5rem]">
      <div
        className="abc"
        style={{
          color: "red",
          "& .image-gallery-left-nav .image-gallery-svg": {
            height: "1.875rem",
            width: "1.875rem",
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
      <div className=" *:mb-[.5rem]  md:*:mb-[.9375rem]">
        <h6 className=" text-[#890DAB] text-sm md:text-xl font-medium uppercase">
          {data?.name}
        </h6>
        <h3 className="text-[#333] text-sm md:text-[1rem] font-medium">
          {data?.content}
        </h3>
        <h5 className=" text-sm md:text-lg text-[#000] font-medium">NEW IN</h5>

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

          <h5 className="text-sm text-[#98A2B3] pl-[.3125rem]">(120)</h5>
          {/* <Link
        href="#"
        className="bg-[#FCEBFF] hover:bg-[#B13CCD] px-[.9375rem] py-2 rounded-[.375rem] text-[.75rem] md:text-sm hover:text-white ml-5 transition"
      >
        Add your review
      </Link> */}
        </div>
        <div className="space-y-3">
          <h4 className="capitalize">Colors: {colorName.join(", ")} </h4>
          <span className=" flex items-center gap-[.625rem]">
            {data?.color.map((color) => {
              return (
                <button
                  key={color?._id}
                  onClick={() => handleColorId(color)}
                  className={`bg-[${color.color_code}]  size-[1.375rem] hover:outline hover:outline-1 hover:outline-offset-2 rounded-full  cursor-pointer`}
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
              className="capitalize text-center flex-1 bg-black text-white font-bold py-3.5 active:scale-95"
            >
              add to cart
            </button>
            <button className="flex items-center justify-center p-3 border border-[#98A2B3]">
              <Image width={24} height={24} src="/love.svg" alt="heart logo" />
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
  );
};

export default AddToCart;
