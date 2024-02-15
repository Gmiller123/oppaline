import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const ProductSidebar = () => {
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
          <AccordionItem value="category">
            <AccordionTrigger className="AccordionTrigger py-2 max-sm:text-sm font-bold">
              Category
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  className="size-3 md:size-4 flex items-center justify-center data-[state=checked]:text-[5px]"
                  id="shirt"
                />
                <label
                  htmlFor="shirt"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Shirts <span className="pl-1">(195)</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox className="size-3 md:size-4" id="pant" />
                <label
                  htmlFor="pant"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Pants <span className="pl-1">(105)</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox className="size-3 md:size-4" id="tshirt" />
                <label
                  htmlFor="tshirt"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tshirts <span className="pl-1">(135)</span>
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="subCategory">
            <AccordionTrigger className="AccordionTrigger font-bold py-2 max-sm:text-sm">
              Sub-Category
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox className="size-3 md:size-4" id="boxshirt" />
                <label
                  htmlFor="boxshirt"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  box-shirt <span className="pl-1">(145)</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox className="size-3 md:size-4" id="jeanspant" />
                <label
                  htmlFor="jeanspant"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Jeans-Pants <span className="pl-1">(75)</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox className="size-3 md:size-4" id="tshirts" />
                <label
                  htmlFor="tshirts"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tshirts <span className="pl-1">(125)</span>
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
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
          <AccordionItem value="material">
            <AccordionTrigger className="AccordionTrigger font-bold py-2 max-sm:text-sm">
              Material
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-3">
              <div className="flex items-center space-x-2">
                <Checkbox className="size-3 md:size-4" id="cotton" />
                <label
                  htmlFor="cotton"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cotton <span className="pl-1">(195)</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox className="size-3 md:size-4" id="polyster" />
                <label
                  htmlFor="polyster"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Polyster <span className="pl-1">(195)</span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox className="size-3 md:size-4" id="cargo" />
                <label
                  htmlFor="cargo"
                  className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Cargo <span className="pl-1">(195)</span>
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductSidebar;
