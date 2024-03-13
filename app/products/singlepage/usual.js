"use client";

import React from "react";
import SizeTable from "./table";

const UsualMeasurement = ({
  data,
  size,
  showSize,
  priceCalculation,
  discountCalculation,
}) => {
  return (
    <div>
      <div className=" flex items-center gap-2">
        <h4 className=" text-[#98A2B3] text-[28px]">
          <strike>{`${
            (data?.price && "Rs." + priceCalculation(data)) || ""
          }`}</strike>
        </h4>
        <h4 className="text-[28px]">{`${
          (data?.price && "Rs." + discountCalculation(data)) || ""
        }`}</h4>
      </div>
      <span className="flex items-center justify-between">
        <h4 className=" text-lg">
          Size:{" "}
          <span className="uppercase text-[#98A2B3]">{size.join(", ")}</span>
        </h4>
        <SizeTable />
      </span>

      <div className=" flex items-center gap-3">
        {data?.size.map((sizeCategory, index) => (
          <button
            key={index}
            onClick={() => showSize(sizeCategory)}
            className={`uppercase hover:bg-black hover:text-white text-black bg-white px-4 py-3 border border-[#98A2B3] transition-all`}
          >
            {sizeCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsualMeasurement;
