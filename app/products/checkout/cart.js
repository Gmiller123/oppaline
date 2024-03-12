"use client";
import React, { useEffect, useState } from "react";
import CartComponent from "./cartcomponent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AsidePayment from "./aside";

const Cart = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const preparedProductData = JSON.parse(
      localStorage.getItem("preparedProduct")
    );

    if (preparedProductData) {
      setProductData([...productData, preparedProductData]);
    }
  }, []);

  console.log(productData, "product Data");

  return (
    <div className="pt-5 pb-[50px] md:pb-[100px]">
      <div className=" max-w-[1390px] mx-auto px-5">
        <Breadcrumbs className="pb-5 mb-5" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Cart</Typography>
        </Breadcrumbs>

        <div className=" grid grid-cols-3 md:divide-x divide-y">
          <div className=" lg:col-span-2 col-span-3 md:pr-5">
            <div className=" flex items-center gap-5">
              <h1 className=" font-bold text-[22px]">Shopping Bag</h1>
              <h5 className=" text-[#667085] text-sm">
                items {productData && productData.length}
              </h5>
            </div>
            <div className=" divide-y">
              {productData?.map((item) => {
                console.log(item, "from 45");
                return (
                  <CartComponent
                    name={item.product_name}
                    price={item.product_price}
                    discountedPrice={item.discounted_price}
                    color={item.product_color}
                    size={item.product_size}
                    quantity={item.product_quantity}
                    image={item.product_image}
                    key={item.product_id}
                  />
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1 col-span-3 max-sm:pt-5 lg:pl-5">
            <AsidePayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
