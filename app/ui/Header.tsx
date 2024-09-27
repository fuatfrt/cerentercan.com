import MobilMenu from "@/app/ui/MobilMenu";
import {links} from "@/app/lib/content";
import {FaPhone} from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-center h-full w-full bg-primary text-white/90 border-b border-stone-400 z-50">
      <div className="flex justify-between items-center h-16 w-full max-w-7xl gap-4 px-4">
        <div className="flex flex-row justify-center items-center gap-2 w-full">
          <img
            className="h-14 w-14 rounded-full p-1 border-2 border-white"
            src={"/logo.png"}
            alt={"Ceren Tercan"}
          />
          <a href="/" className="w-full text-lg font-black text-[#fff] italic">Ceren Tercan</a>
        </div>
        <>
          <div className="hidden md:flex flex-row justify-center items-center h-full w-full gap-4 text-nowrap">
            {
              links.map((link, index) => (
                <a
                  key={index} href={link.href}
                  className="flex justify-center items-center h-full font-extrabold text-white px-4 bg-primary transition duration-500 hover:scale-125 hover:border">{link.name}</a>
              ))
            }
          </div>
          <MobilMenu/>
        </>
        <div className="hidden md:flex justify-end items-center w-full">
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`}
            className="flex flex-row justify-end items-center gap-4 text-white font-black transition duration-500 hover:scale-125">
            <FaPhone className=""/>
            {process.env.NEXT_PUBLIC_PHONE_NUMBER}
          </a>
        </div>
      </div>
    </header>
  );
}
