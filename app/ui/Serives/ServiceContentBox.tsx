import {FaWhatsapp} from "react-icons/fa";

interface ContentBox {
  link: string;
  title: string;
  description: string;
  image: string;
  index: number;
}

export default function ServiceContentBox({link, title, description, image, index}: ContentBox) {

  return (
    <div
      id={link}
      className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full bg-box-button p-4 gap-4 scroll-mt-16 border-b">
      <div className={`flex flex-col justify-center items-center w-full gap-4 ${(index % 2)===0 && "lg:order-last"}`}>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg">
          {description}
        </p>
        <div className="flex justify-center items-center w-full">
          <button
            className="flex flex-row justify-center items-center p-2 gap-2 rounded-lg shadow-2xl border border-black">
            <FaWhatsapp className="text-2xl text-[#25d366]"/>
            <a
              className="flex w-full"
              target="_blank"
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${title}%20hakkında%20bilgi%20almak%20istiyorum.`}>
              {title} Destek Hattı
            </a>
          </button>
        </div>
      </div>
      <img className="flex-1 rounded-lg" src={image} alt="test"/>
    </div>
  );
}
