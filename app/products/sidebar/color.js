import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";


const ColorCategory = () => {
  return (
    <>
      <AccordionItem value="color">
        <AccordionTrigger className="AccordionTrigger font-bold py-2 max-sm:text-sm">
          Color
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="red"
              className="bg-red-300 border-red-300 rounded-full size-3 md:size-4"
            />
            <label
              htmlFor="red"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Red <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="blue"
              className="bg-blue-300 border-blue-300 rounded-full size-3 md:size-4"
            />
            <label
              htmlFor="blue"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Blue <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="orange"
              className="bg-orange-300 border-orange-300 rounded-full size-3 md:size-4"
            />
            <label
              htmlFor="orange"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Orange <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              className="bg-yellow-300 border-yellow-300  rounded-full size-3 md:size-4"
              id="yellow"
            />
            <label
              htmlFor="yellow"
              className="  text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Yellow <span className="pl-1">(195)</span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="green"
              className="bg-green-300 border-green-300 rounded-full size-3 md:size-4"
            />
            <label
              htmlFor="green"
              className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Green <span className="pl-1">(195)</span>
            </label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default ColorCategory;
