import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";


const SizeCategory = () => {
  return (
    <>
      <AccordionItem value="size">
        <AccordionTrigger className="AccordionTrigger font-bold py-2 max-sm:text-sm">
          Size
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox className="size-3 md:size-4" id="small" />
            <label
              htmlFor="small"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Small <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox className="size-3 md:size-4" id="medium" />
            <label
              htmlFor="medium"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Medium <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox className="size-3 md:size-4" id="large" />
            <label
              htmlFor="large"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Large <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox className="size-3 md:size-4" id="xl" />
            <label
              htmlFor="xl"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XL <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox className="size-3 md:size-4" id="xxl" />
            <label
              htmlFor="xxl"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XXL <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox className="size-3 md:size-4" id="xxxl" />
            <label
              htmlFor="xxxl"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              XXXL <span className="pl-1">(195)</span>
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default SizeCategory;
