import React from "react";
import CartComponent from "./cartcomponent";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import AsidePayment from "./aside";

const Cart = () => {
  const products = [
    {
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
  ];
  return (
    <div className="pt-5 pb-[100px]">
      <div className=" max-w-[1390px] mx-auto px-5">
        <Breadcrumbs className="pb-5 mb-5" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Cart</Typography>
        </Breadcrumbs>

        <div className=" grid grid-cols-3 divide-x">
          <div className=" lg:col-span-2 col-span-3 pr-5">
            <div className=" flex items-center gap-5">
              <h1 className=" font-bold text-[22px]">Shopping Bag</h1>
              <h5 className=" text-[#667085] text-sm">3 items</h5>
            </div>
            <div className=" divide-y">
              {products.map((item, index) => (
                <CartComponent
                  key={index}
                  productImage={item.productImage}
                  productDetails={item.productDetails}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-1 col-span-3 pl-5">
            <AsidePayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
