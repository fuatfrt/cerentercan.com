'use client';
import {useState} from "react";
import {links} from "../lib/content";
import MobilMenuContact from "@/app/ui/MobilMenuContact";

export default function MobilMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden flex justify-center items-center p-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 relative text-[#fff]">
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
          <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
        </div>
      </div>
      <div className={`fixed justify-center items-center top-0 left-0 h-full w-full bg-[#e0f6f9] transition-all duration-500 z-50 ${isOpen ? 'translate-y-0 mt-16': 'translate-y-full'}`}>
        <div className="flex flex-col items-center h-full gap-4 text-black">
          <div className="flex justify-center items-center w-full p-4">
            <p className="text-l font-bold">
              Şimdiye odaklan, içsel dönüşüm başlasın!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center h-full w-full gap-4 p-4 text-2xl text-black">
            {
              links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-black border-b border-black ">{link.name}</a>
              ))
            }
          </div>
          <MobilMenuContact />
        </div>
      </div>
    </div>
  );
}
