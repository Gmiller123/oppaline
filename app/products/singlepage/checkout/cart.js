"use client";
import React, { useState } from "react";
import CartComponent from "./cartcomponent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AsidePayment from "./aside";

const Cart = () => {
  const [productInfo, setProductInfo] = useState([
    {
      productId: 1,
      quantity: 0,
      productImage: "/cart1.png",
      productDetails: {
        name: "Zosia Puff Sleeve Midi Dress 30% Off. Shop Today",
        line: "123456",
        color: "Turkish Bloom Grey",
        size: "1 - in Stock",
        unitPrice: 539.96,
        originalPrice: 799.0,
        discountedPrice: 599.5,
      },
    },
    {
      productId: 2,
      quantity: 0,
      productImage: "/cart2.png",
      productDetails: {
        name: "Posuwa Luff Sleeve Midi Dress 80% Off. Shop Today",
        line: "787248",
        color: "Spanish Bloom White",
        size: "4 - in Stock",
        unitPrice: 189.96,
        originalPrice: 999.0,
        discountedPrice: 799.5,
      },
    },
    {
      productId: 3,
      quantity: 0,
      productImage: "/cart3.png",
      productDetails: {
        name: "Zodiac yuff Sleeve Midi Dress 50% Off. Shop Today",
        line: "787248",
        color: "Irish Bloom White",
        size: "8 - in Stock",
        unitPrice: 139.96,
        originalPrice: 399.0,
        discountedPrice: 299.5,
      },
    },
    {
      productId: 4,
      quantity: 0,
      productImage: "/cart3.png",
      productDetails: {
        name: "Zodiac yuff Sleeve Midi Dress 50% Off. Shop Today",
        line: "787248",
        color: "Irish Bloom White",
        size: "8 - in Stock",
        unitPrice: 139.96,
        originalPrice: 399.0,
        discountedPrice: 299.5,
      },
    },
  ]);

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
                items {productInfo.length}
              </h5>
            </div>
            <div className=" divide-y">
              {productInfo.map((item) => (
                <CartComponent
                  key={item.productId}
                  productImage={item.productImage}
                  productDetails={item.productDetails}
                  productInfo={productInfo}
                  setProductInfo={setProductInfo}
                  productId={item.productId}
                  quantity={item.quantity}
                />
              ))}
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
