import MobilMenu from "@/app/ui/MobilMenu";
import {links} from "@/app/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-center h-full w-full bg-[#b08c71] text-white/90 border-b border-stone-400 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl p-4">
        <div className="flex w-full">
          <h1 className="w-full text-lg font-bold">Ceren Tercan</h1>
        </div>
        <>
          <div className="hidden md:flex flex-row justify-center items-center w-full">
            {
              links.map((link, index) => (
                <a
                  key={index} href={link.href} className="text-white border-l px-4 hover:bg-orange-300">{link.name}</a>
              ))
            }
          </div>
          <MobilMenu />
        </>
      </div>
    </header>
  );
}
