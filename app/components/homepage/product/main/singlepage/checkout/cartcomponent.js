"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const CartComponent = ({ productImage, productDetails }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(Math.abs(counter + 1));
  };
  const decrement = () => {
    setCounter(Math.max(0, counter - 1));
  };

  return (
    <div className="flex items-center justify-between py-5">
      <div className=" flex items-center justify-center gap-5">
        <Image
          src={productImage}
          width={120}
          height={160}
          alt="cart imgs example"
        />
        <div className=" flex flex-col justify-around gap-2">
          {productDetails && (
            <h2 className=" max-w-[250px] font-semibold text-lg leading-6">
              {" "}
              {productDetails.name}
            </h2>
          )}
          <ul className=" *:text-[12px] text-[#475467]">
            {productDetails && (
              <li className=" leading-4">Line: {productDetails.line}</li>
            )}
            {productDetails && (
              <li className=" leading-4">Color: {productDetails.color}</li>
            )}
            {productDetails && (
              <li className=" leading-4">Size: {productDetails.size}</li>
            )}
            {productDetails && (
              <li className=" leading-4">Unit: {productDetails.unitPrice}</li>
            )}
          </ul>
          <div className=" flex gap-[11px] *:text-[12px]">
            <Link className="underline" href="/">
              Edit
            </Link>
            <Link className="underline" href="/">
              Save For Later
            </Link>
            <Link className="underline" href="/">
              Remove
            </Link>
          </div>
        </div>
      </div>
      <div className=" space-y-1">
        <h3>Quantity</h3>
        <div className=" flex divide-x-2 border border-[#EAECF0]">
          <div
            onClick={decrement}
            className=" flex items-center justify-center size-10 cursor-pointer"
          >
            <LuMinus className=" text-lg  active:scale-75" />
          </div>
          <div className="font-bold flex items-center justify-center size-10">
            {counter}
          </div>
          <div
            onClick={increment}
            className=" flex items-center justify-center size-10  cursor-pointer"
          >
            <GoPlus className=" text-lg  active:scale-75" />
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-1 *:text-base">
        {productDetails && (
          <p className=" text-[#475467]">
            {" "}
            <strike>${productDetails.originalPrice}</strike>
          </p>
        )}

        {productDetails && <p>${productDetails.discountedPrice}</p>}
      </div>
    </div>
  );
};

export default CartComponent;
