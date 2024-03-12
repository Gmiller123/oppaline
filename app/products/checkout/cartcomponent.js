"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const CartComponent = ({
  name,
  price,
  discountedPrice,
  color,
  size,
  quantity,
  image,
  key,
}) => {
  console.log(color, "from name 18");
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(Math.abs(counter + 1));
  };

  const decrement = () => {
    setCounter(Math.max(0, counter - 1));
  };

  return (
    <div className="flex md:flex-row flex-col md:items-center md:space-y-0 space-y-3 justify-between py-5">
      <div className="basis-2/3 flex items-center justify-start gap-5">
        <Image src="" width={120} height={160} alt="cart imgs example" />
        <div className=" flex flex-col justify-around gap-2">
          <h2 className=" max-w-[250px] font-semibold text-base capitalize  md:text-lg leading-5 md:leading-6">
            {name && name}
          </h2>
          <ul className=" *:md:text-[12px] *:text-[11px] text-[#475467]">
            <li key={key} className=" leading-4">
              Line:
            </li>
            <li key={key} className=" leading-4">
              Color: {color && color}
            </li>
            <li key={key} className=" leading-4">
              Size: {size && size.join(", ")}
            </li>
            <li key={key} className=" leading-4">
              Unit: {quantity && quantity}
            </li>
          </ul>
          <div className=" flex gap-[11px] md:*:text-[12px] *:text-[11px]">
            <Link
              href="/components/homepage/product/main/singlepage"
              className="underline"
            >
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

      <div className=" basis-1/2 flex items-center justify-between">
        <div className="basis-1/2 flex flex-col items-start space-y-1">
          <h3 className=" text-[12px] text-[#475467]">Quantity</h3>

          <div className="flex divide-x-2 border border-[#EAECF0]">
            <div
              onClick={() => decrement()}
              className=" flex items-center justify-center size-10 cursor-pointer"
            >
              <LuMinus className=" text-lg  active:scale-75" />
            </div>
            <div className="font-bold flex items-center justify-center size-10">
              {counter}
            </div>
            <div
              onClick={() => increment()}
              className=" flex items-center justify-center size-10  cursor-pointer"
            >
              <GoPlus className=" text-lg  active:scale-75" />
            </div>
          </div>
        </div>

        <div className="basis-1/2 flex items-center justify-end gap-1 *:text-base">
          <p className=" mr-1 text-[#475467]">
            <strike>${price && price}</strike>
          </p>

          <p>${discountedPrice && discountedPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
