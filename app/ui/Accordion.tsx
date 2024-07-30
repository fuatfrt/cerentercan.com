"use client";
import React from "react";
import AccordionItem from "@/app/ui/AccordionItem";
import {sss} from "@/app/lib/content";

export default function Accordion() {
  const [open, setOpen] = React.useState<number | null>(null);
  const activeItem = (index: number) => {
    setOpen(index === open ? null : index);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      {
        sss.map((item, index) => (
          <AccordionItem index={index} title={item.title} open={open} activeItem={activeItem} key={index}>
            {item.desc}
          </AccordionItem>
        ))
      }
    </div>
  );
}
