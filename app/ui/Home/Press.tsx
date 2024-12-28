import {CarouselComponent} from "@/app/ui/components/CarouselComponent";
import {PressMedia} from "@/lib/datas";

export default function Press({id}: { id: string }) {
  return (
    <div
      id={id}
      className="flex justify-center items-center h-full w-full border-b border-black py-4">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">Basına Çıkanlar</h1>
        <div className="flex h-full w-full">
          <CarouselComponent items={PressMedia}/>
        </div>
      </div>
    </div>
  );
}
