import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";


const MaterialCategoroy = () => {
  return (
    <>
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
    </>
  );
};

export default MaterialCategoroy;
