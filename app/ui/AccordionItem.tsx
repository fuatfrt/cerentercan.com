import {IoIosArrowDropdown} from "react-icons/io";
import React from "react";
import AccordionDesc from "@/app/ui/AccordionDesc";

interface AccordionItem {
  index: number;
  title: string;
  open: number | null;
  activeItem: Function;
  children: React.ReactNode;
}
export default function AccordionItem({index, title, open, activeItem, children}: AccordionItem) {
  return (
    <>
      <button
        onClick={() => activeItem(index)}
        className="flex flex-row justify-between items-center w-full border-b border-black">
        <h2 className="md:text-xl font-bold text-nowrap">{title}</h2>
        <span className={`${
          open === index
            ? "rotate-180"
            : ""
        } flex justify-center items-center h-full font-black transition-all duration-500`}>
          <IoIosArrowDropdown size="25px" className="font-bold"/>
        </span>
      </button>
      <AccordionDesc index={index} open={open}>
        {children}
      </AccordionDesc>
    </>
  );
}
