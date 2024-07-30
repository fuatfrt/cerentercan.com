import {data} from "@/app/lib/content";
import {FaInstagram, FaWhatsapp} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";

export default function MobilMenuContact() {
  return (
    <div className="flex flex-row justify-center items-center w-full gap-2 p-4 mb-16">
      <a
        className="flex flex-row items-center gap-2 border border-black p-2 rounded-lg"
        target="_blank"
        href={`https://wa.me/${data.phoneNumbers.whatsapp}?text=Merhaba,%20`}>
        <FaWhatsapp className="text-xl text-green-600 rounded"/>
        <p>Whatsapp</p>
      </a>
      <a
        className="flex flex-row items-center gap-2 border border-black p-2 rounded-lg"
        target="_blank"
        href={data.instagram}>
        <FaInstagram className="text-xl text-[#fd1d1d]"/>
        <p>Cerentercann</p>
      </a>
      <a
        className="flex flex-row items-center gap-2 border border-black p-2 rounded-lg"
        href={`tel:${data.phoneNumbers.phone}`}>
        <FaPhone className=""/>
        Ara
      </a>
    </div>
  );
}
