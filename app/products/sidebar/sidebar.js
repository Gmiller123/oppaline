"use client";

import React, { useEffect, useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import SubCategory from "./subcategory";
import SizeCategory from "./size";
import ColorCategory from "./color";
import MaterialCategoroy from "./material";
import Category from "./category";

const ProductSidebar = ({ setCatId }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState([]);
  const [parentCat, setParentCat] = useState(null);
  const [childCat, setChildCat] = useState([]);

  const local_url = process.env.NEXT_PUBLIC_URL;

  const fetchChildCategory = async (id) => {
    try {
      const res = await fetch(local_url + `/category/parent/${id}`);
      const data = await res.json();
      setChildCat(data.data);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      try {
        // const res = await fetch(local_url + `/category`);

        const res = await fetch(local_url + `/category`);
        const data = await res.json();
        setCategory(data.data);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    if (parentCat) {
      fetchChildCategory(parentCat?._id);
    }

    fetchApi();
  }, [parentCat]);

  if (!loading) return "Data is fetching";
  if (error) return `${error.message}`;

  const handleParentCategory = (e, cat) => {
    const { checked } = e.target;
    if (checked) {
      setParentCat(cat);
      setCatId(cat);
    } else {
      setParentCat(null);
    }
  };

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
