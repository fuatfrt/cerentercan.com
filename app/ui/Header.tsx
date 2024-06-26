import MobilMenu from "@/app/ui/MobilMenu";

export default function Header() {
  return (
    <header className="sticky top-0 flex justify-center h-full w-full bg-[#b08c71] text-white/90 border-b border-stone-400 z-50">
      <div className="flex justify-between items-center w-full max-w-7xl p-4">
        <div className="flex w-full">
          <h1 className="w-full text-lg font-bold">Ceren Tercan</h1>
        </div>
        <>
          <div className="hidden md:flex flex-row justify-between items-center w-full gap-4">
            <div>Anasayfa</div>
            <div>Platformda Neler Var?</div>
            <div>İletişim</div>
          </div>
          <MobilMenu />
        </>
      </div>
    </header>
  );
}
