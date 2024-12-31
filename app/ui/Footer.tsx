import {FaInstagram, FaPhoneSquareAlt, FaWhatsapp} from "react-icons/fa";
import {data} from "@/app/lib/content";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full bg-primary text-white">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl text-white p-4">
        <div className="flex justify-between items-center gap-4 py-4">
          <a className="flex flex-row gap-2" href={data.instagram} target="_blank">
            <FaInstagram className="text-2xl text-[#fff]"/>
            <p className="hidden md:block">Instagram</p>
          </a>
          <a className="flex flex-row gap-2" href={`https://wa.me/${data.phoneNumbers.whatsapp}?text=Merhaba,%20`}
             target="_blank">
            <FaWhatsapp className="text-2xl text-[#fff]"/>
            <p className="hidden md:block">Whatsapp</p>
          </a>
          <a className="flex flex-row gap-2" href={`tel:${data.phoneNumbers.whatsapp}`} target="_blank">
            <FaPhoneSquareAlt className="text-2xl text-[#fff] rounded-3xl"/>
            <p className="hidden md:block">Ara</p>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 px-4">
          <p className=" text-sm text-slate-200">
            © 2025 | Tüm hakları saklıdır.
          </p>
          <div className="flex flex-row justify-center items-center gap-1 text-slate-200 text-sm">
            <p>Created by{" "}</p>
            <a
              target="_blank"
              className="underline"
              href="https://instagram.com/fuatfrt">
              Fuat Fırat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
