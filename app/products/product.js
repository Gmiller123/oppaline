import React from "react";


import ProductSidebar from "./sidebar";
import BreadcrumbsComp from "./breadcrump";
import ProductItems from "./productItems";

const ProductPage = () => {
 

  return (
    <div className="">
      <div className="max-w-[1390px] mx-auto px-5 lg:px-10">
        <BreadcrumbsComp />
        <div className="grid grid-cols-5 pt-5 gap-5">
          <ProductSidebar />
          <div className=" col-span-3 lg:col-span-4">
              {/* ---------------------------- product carousel ---------------------------- */}

              <ProductItems />
            <div className="flex items-center justify-between py-10">
              <span className="">
                <p>Product: 1 - 48 of 207</p>
              </span>
              <span className=" flex-1 flex items-center justify-center">
                <button className="bg-[#000] text-sm lg:px-28 lg:py-3 md:px-20 px-10 text-white font-semibold">
                  SHOW 48 MORE
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
