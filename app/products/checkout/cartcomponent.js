"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const CartComponent = ({ productData }) => {
  const local_url = process.env.NEXT_PUBLIC_URL;

  const [counter, setCounter] = useState();

  const productId = productData.map((product) => product.product_id);
  const multipleId = productId.join(",");

  const increment = () => {
    setCounter(Math.abs(counter + 1));
  };

  const decrement = () => {
    setCounter(Math.max(0, counter - 1));
  };

  const removeProduct = (product_id) => {
    product_id.filter((prevProductId) => prevProductId !== product_id);
  };

  const [singleProductData, setsingleProductData] = useState(null);

  const fetchSingleProduct = async () => {
    try {
      const res = await fetch(local_url + `/product?product_id=${multipleId}`);
      const { data } = await res.json();
      setsingleProductData(data);

      console.log(data, "this is data");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (multipleId) {
      fetchSingleProduct();
    }
  }, [multipleId]);

  return (
    <>
      {productData?.map(
        ({ product_color, product_size, product_id, product_quantity }) => (
          <div className="flex md:flex-row flex-col md:items-center md:space-y-0 space-y-3 justify-between py-5">
            <div className="basis-2/3 flex items-center justify-start gap-5">
              <Image src="" width={120} height={160} alt="cart imgs example" />
              <div className=" flex flex-col justify-around gap-2">
                <h2 className=" max-w-[250px] font-semibold text-base capitalize  md:text-lg leading-5 md:leading-6">
                  {name && name}
                </h2>
                <ul className=" *:md:text-[12px] *:text-[11px] text-[#475467] *:capitalize">
                  <li className=" leading-4">Line:</li>
                  <li className=" leading-4 ">
                    Color: {product_color && product_color.join(", ")}
                  </li>
                  <li className=" leading-4">
                    Size: {product_size && product_size.join(", ")}
                  </li>
                  <li className=" leading-4">Unit: {product_quantity}</li>
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
                  <button
                    onClick={() => removeProduct(product_id)}
                    className="underline"
                  >
                    Remove
                  </button>
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
                    {product_quantity}
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
                  <strike>Rs. 150</strike>
                </p>

                <p>Rs. 10</p>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default CartComponent;
