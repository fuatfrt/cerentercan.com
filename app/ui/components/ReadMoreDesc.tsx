"use client";
import React, {useState} from "react";

interface ReadMoreDescProps {
  children: string;
}

export default function ReadMoreDesc({children}: ReadMoreDescProps) {
  const [open, setOpen] = useState<boolean>(false);
  const shortText = children.split(" ").slice(0, 24).join(" ") + "...";
  return (
    <div className="flex flex-row w-full gap-2 transition-all duration-500">
      <div className={`${open ? "h-full": "h-auto"} overflow-hidden`}>
        {open ? children : shortText}
        <button
          className="text-primary font-bold pl-2"
          onClick={() => {
            setOpen(!open);
          }}>
          {open ? "Kapat" : "Devamını Oku"}
        </button>
      </div>
    </div>
  );
}
