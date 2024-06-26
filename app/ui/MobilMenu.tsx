'use client';
import {useState} from "react";
import {FaFacebook, FaInstagram, FaPhoneSquareAlt, FaWhatsapp} from "react-icons/fa";
import {data} from "../lib/content";

export default function MobilMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden flex justify-center items-center p-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 relative text-white">
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
          <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
        </div>
      </div>
      <div className={`fixed justify-center items-center top-0 left-0 h-full w-full bg-slate-300 transition-all duration-500 z-50 ${isOpen ? 'translate-y-0 mt-16': 'translate-y-full'}`}>
        <div className="flex flex-col items-center h-full gap-4 text-black">
          <div className="flex justify-center items-center w-full p-4">
            <p className="text-l font-bold">
              Şimdiye odaklan, içsel dönüşüm başlasın!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center h-full w-full gap-4 p-4 text-2xl text-black">
            <a onClick={() => setIsOpen(false)} href="#" className="">Anasayfa</a>
            <a onClick={() => setIsOpen(false)} href="#content" className="">Platformda Neler Var?</a>
            <a onClick={() => setIsOpen(false)} href="#" className="">İletişim</a>
          </div>
          <div className="flex flex-row justify-center items-center w-full gap-4 p-4 mb-16">
            <a className="flex flex-row items-center gap-2 border border-black p-2 rounded-lg"
               target="_blank"
               href={`https://wa.me/${data.phoneNumbers.whatsapp}?text=Merhaba,%20`}>
              <FaWhatsapp className="text-xl text-green-600 rounded"/>
              <p>Whatsapp</p>
            </a>
            <a className="flex flex-row items-center gap-2 border border-black p-2 rounded-lg"
               target="_blank"
               href={data.instagram}>
              <FaInstagram className="text-xl text-[#fd1d1d]"/>
              <p>Cerentercann</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
