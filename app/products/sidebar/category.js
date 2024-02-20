import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const Category = ({ category, handleParentCategory }) => {
  const mainCategories = category.filter(
    (category) => !category.hasOwnProperty("parent")
  );

  return (
    <>
      <AccordionItem value="category">
        <AccordionTrigger className="AccordionTrigger py-2 max-sm:text-sm font-bold">
          Category
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-3">
          {mainCategories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              {/* <Checkbox
                type="checkbox"
               
                className="size-3 md:size-4"  
              /> */}

              <input
                type="checkbox"
                onChange={(e) => handleParentCategory(e, category)}
              />
              <label
                htmlFor={category.id}
                className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category.name} <span className="pl-1">(195)</span>
              </label>
            </div>
          ))}
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default Category;
