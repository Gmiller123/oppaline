import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const SubCategory = ({ childCat }) => {
  return (
    <AccordionItem value="subCategory">
      <AccordionTrigger className="AccordionTrigger font-bold py-2 max-sm:text-sm">
        Sub-Category
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-3">
        {childCat &&
          childCat &&
          childCat.length > 0 &&
          childCat.map((cat) => (
            <div className="flex items-center space-x-2">
              <Checkbox className="size-3 md:size-4" id="shirt" />
              <label
                htmlFor="shirt"
                className="text-[11px] md:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {cat.name} <span className="pl-1">(195)</span>
              </label>
            </div>
          ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default SubCategory;
