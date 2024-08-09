import {FaFacebook, FaInstagram, FaPhoneSquareAlt, FaWhatsapp} from "react-icons/fa";
import {data} from "@/app/lib/content";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full bg-primary text-white">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl text-white p-4">
        <div className="flex justify-between items-center gap-4 py-4">
          <a className="flex flex-row gap-2" href="https://www.facebook.com/cerentercan" target="_blank">
            <FaFacebook className="text-2xl text-[#fff]" />
            <p className="hidden md:block">Facebook</p>
          </a>
          <a className="flex flex-row gap-2" href={data.instagram} target="_blank">
            <FaInstagram className="text-2xl text-[#fff]" />
            <p className="hidden md:block">Instagram</p>
          </a>
          <a className="flex flex-row gap-2" href={`https://wa.me/${data.phoneNumbers.whatsapp}?text=Merhaba,%20`} target="_blank">
            <FaWhatsapp className="text-2xl text-[#fff]" />
            <p className="hidden md:block">Whatsapp</p>
          </a>
          <a className="flex flex-row gap-2" href={`tel:${data.phoneNumbers.whatsapp}`} target="_blank">
            <FaPhoneSquareAlt className="text-2xl text-[#fff] rounded-3xl" />
            <p className="hidden md:block">Ara</p>
          </a>
        </div>
        <p>Copyright ©</p>
      </div>
    </footer>
  );
}
