"use client";

import ProductSidebar from "./sidebar/sidebar";
import BreadcrumbsComp from "./breadcrump";
import ProductItems from "./productItems";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
  const [catId, setCatId] = useState([]);
  const [productData, setProductData] = useState([]);
  const [productCount, setProductCount] = useState(null);
  const [nextPage, setNextPage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);
  const [error, setError] = useState(false);

  const local_url = process.env.NEXT_PUBLIC_URL;

  const fetchApi = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        local_url +
          `/product?page=${currentPage}&pageSize=${pageSize}${
            catId.length > 0
              ? "&category=" + catId?.map((item) => item._id).join(",")
              : ""
          }`
      );
      const data = await res.json();
      setProductCount(data.count);
      if (currentPage === 1) {
        setProductData(data.data);
      } else {
        setProductData((prev) => [...prev, ...data.data]);
      }
      setLoading(false);
      setNextPage(data.totalPages > data.currentPage);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [currentPage, catId]);

  const onPageChangeHandler = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="">
      <div className="max-w-[1390px] mx-auto px-5 lg:px-10">
        <BreadcrumbsComp />
        <div className="grid grid-cols-5 pt-5 gap-5">
          <ProductSidebar setCatId={setCatId} catId={catId} />
          <div className=" col-span-3 lg:col-span-4">
            {/* ---------------------------- product carousel ---------------------------- */}

            <ProductItems
              productData={productData}
              loading={loading}
              error={error}
            />
            <div className="flex items-center justify-between py-10">
              <span className="">
                <p>
                  Product: 1 - {pageSize * currentPage} of {productCount}
                </p>
              </span>
              <span className=" flex-1 flex items-center justify-center">
                {nextPage && (
                  <button
                    onClick={() => onPageChangeHandler()}
                    className="bg-[#000] text-sm lg:px-28 lg:py-3 md:px-20 px-10 text-white font-semibold"
                  >
                    SHOW MORE
                  </button>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
