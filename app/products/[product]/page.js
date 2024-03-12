"use client";
import SinglePage from "../singlepage/page";
import { useParams } from "next/navigation";

const page = () => {
  const { product } = useParams();

  return <SinglePage singleData={product} />;
};

export default page;
