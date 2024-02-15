import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductDetails = () => {
  return (
    <div>
      <Accordion type="multiple" collapsible="true" className="w-full">
        <AccordionItem value="details">
          <AccordionTrigger className="text-lg">Details</AccordionTrigger>
          <AccordionContent>
            <h4 className=" text-sm text-[#1D2939]">Fabric & works</h4>
            <ul className=" list-inside list-disc text-[12px] text-[#667085]">
              <li className="">Top: Embriodered Premium Chiffon</li>
              <li>Bottomm: Dyed Grip</li>
              <li>Dupatta: Chiffon</li>
            </ul>

            <h4 className=" text-sm mt-[17px] text-[#1D2939]">
              Fabric & works
            </h4>
            <span className=" text-[12px] text-[#667085]">
              <Link href="#" className="underline">
                Salwar Kameez
              </Link>{" "}
              /
              <Link href="#" className="underline">
                Pakistani Dress
              </Link>
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="delivery">
          <AccordionTrigger className="text-lg">
            Delivery & Returns
          </AccordionTrigger>
          <AccordionContent>
            <h4 className=" text-sm">Delivery</h4>
            <p className="text-[12px] text-[#667085]">
              Australian Standard Delivery $99.9 | 4-8 Business Days
            </p>
            <p className="text-[12px] text-[#667085] mb-1">
              Australian Next Business Day/Express Delivery $14.99 | 1-3
              Business Days
            </p>
            <Link
              href="#"
              className="underline text-[15px] text-[#667085] hover:text-[#333]"
            >
              View full delivery information
            </Link>

            <h4 className=" text-sm mt-5">Returns</h4>
            <p className="text-[12px] text-[#667085]">
              Australian Standard Delivery $99.9 | 4-8 Business Days
            </p>
            <p className="text-[12px] text-[#667085] mb-1">
              Australian Next Business Day/Express Delivery $14.99 | 1-3
              Business Days
            </p>

            <Link
              href="#"
              className="underline text-[15px] text-[#667085] hover:text-[#333]"
            >
              View full delivery information
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductDetails;
