import Accordion from "@/app/ui/Accordion";
import Image from "next/image";

export default function Sss({id}: { id: string }) {
  return (
    <div id={id} className="flex justify-center items-center h-full w-full border-y border-black pt-4 scroll-mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-7xl w-full py-4 gap-4">
        <div className="flex flex-col justify-start items-center h-full w-full p-4 gap-4">
          <h1 className="text-2xl md:text-4xl font-black">Danışmanlık hizmeti hakkında sıkça sorulan sorular</h1>
          <div className="flex flex-col w-full text-justify gap-2">
            <Accordion />
          </div>
        </div>
        <div className="relative flex flex-col justify-center items-center w-full aspect-square pb-11 pl-4 pr-11">
          <Image
            width={500}
            height={500}
            loading="lazy"
            className="h-auto w-full rounded-tl-full rounded-br-full shadow-2xl"
            src="/sss.jpg" alt="Ceren Tercan"/>
          <div className="absolute bottom-16 right-2 md:right-1 flex h-[65%] w-[85%] rounded-tl-full rounded-br-full bg-slate-400 -z-10"/>
        </div>
      </div>
    </div>
  );
}
