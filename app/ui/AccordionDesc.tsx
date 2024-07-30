import React from "react";

interface AccordionDesc {
  children: React.ReactNode;
  open: number | null;
  index: number;
}
export default function AccordionDesc({children, open, index}: AccordionDesc) {
  return (
    <div className={`${
      open === index
        ? "grid-rows-[1fr]" 
        : "grid-rows-[0fr]"
    } grid overflow-hidden w-full text-left transition-all duration-500 ease-in-out`}>
      <p className="overflow-hidden">
        {children}
      </p>
    </div>
  );
}
