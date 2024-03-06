"use client";
import React, { useEffect, useState } from "react";
import SinglePage from "../singlepage/page";
import { useParams } from "next/navigation";

const page = () => {
  const local_url = process.env.NEXT_PUBLIC_URL;
  const { product } = useParams();
  const [singleData, setSingleData] = useState(null);

  const fetchSinglePageData = async () => {
    try {
      const res = await fetch(local_url + `/product/${product}`);
      const data = await res.json();
      setSingleData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (product) {
      fetchSinglePageData();
    }
  }, [product]);

  return <SinglePage data={singleData?.data} />;
};

export default page;
