"use client";

import React from "react";
import SizeTable from "./table";

const UsualMeasurement = () => {
  return (
    <div>
      <div className=" flex items-center gap-2">
        <h4 className=" text-[#98A2B3] text-[28px]">
          <strike>$56.45</strike>
        </h4>
        <h4 className="text-[28px]">$38.48</h4>
      </div>
      <span className="flex items-center justify-between">
        <h4 className=" text-lg">
          Size: <span className="text-[#98A2B3]"> AU/38 inch/97 cm</span>
        </h4>
        <SizeTable />
      </span>

      <div className=" flex items-center gap-3">
        <button className=" hover:bg-black hover:text-white text-black bg-white px-4 py-3 border border-[#98A2B3] transition-all">
          38&quot;/AU 12
        </button>
        <button className=" hover:bg-black hover:text-white text-black bg-white px-4 py-3 border border-[#98A2B3] transition-all">
          40&quot;/AU 14
        </button>
        <button className=" hover:bg-black hover:text-white text-black bg-white px-4 py-3 border border-[#98A2B3] transition-all">
          42&quot;/AU 16
        </button>
      </div>
    </div>
  );
};

export default UsualMeasurement;
