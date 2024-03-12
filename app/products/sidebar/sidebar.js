"use client";

import React, { useEffect, useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import SubCategory from "./subcategory";
import SizeCategory from "./size";
import ColorCategory from "./color";
import MaterialCategoroy from "./material";
import Category from "./category";

const ProductSidebar = ({ setCatId, catId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState([]);
  const [parentCat, setParentCat] = useState([]);
  const [childCat, setChildCat] = useState([]);

  const local_url = process.env.NEXT_PUBLIC_URL; //base url

  const fetchChildCategory = async () => {
    setLoading(true);
    try {
      if (parentCat.length > 0) {
        const res = await fetch(
          local_url +
            `/category/parent/${parentCat.map((cat) => cat._id).join(",")}`
        );
        const data = await res.json();
        setChildCat([...childCat, ...data.data]);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    const fetchCategoryApi = async () => {
      setLoading(true);
      try {
        const res = await fetch(local_url + `/category`);
        const data = await res.json();
        setCategory(data.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    if (parentCat) {
      fetchChildCategory();
    }

    fetchCategoryApi();
  }, [parentCat]);

  const handleParentCategory = (e, cat) => {
    const { checked } = e.target;
    if (checked) {
      setParentCat([...parentCat, cat]);
      setCatId([...catId, cat]);
    } else {
      setParentCat(null);
    }
  };

  if (loading) return "Data is fetching";
  if (error)
    return (
      <h3 className=" text-red-500 font-medium">Error: Failed to fetch data</h3>
    );

  return (
    <div className=" col-span-2 lg:col-span-1 ">
      <div className=" divide-y-2">
        <h3 className=" font-bold pb-1 md:pb-4 max-sm:text-sm">Filter</h3>

        <Accordion
          collapsible="true"
          type="multiple"
          className="w-full"
          defaultValue={[
            "category",
            "subCategory",
            "color",
            "size",
            "material",
          ]}
        >
          <Category
            category={category}
            handleParentCategory={handleParentCategory}
          />
          <SubCategory category={category} childCat={childCat} />
          <SizeCategory />
          <ColorCategory />
          <MaterialCategoroy />
        </Accordion>
      </div>
    </div>
  );
};

export default ProductSidebar;
