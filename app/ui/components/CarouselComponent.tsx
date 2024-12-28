import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {PressMediaInterface} from "@/lib/datas";

export function CarouselComponent({items}: {items: PressMediaInterface[]}) {
  return (
    <div className="flex justify-center items-center w-full px-14">
      <Carousel
        opts={{
          align: "start",
        }}
        className="flex justify-center items-center w-full max-w-sm sm:max-w-lg lg:max-w-7xl"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="flex w-full lg:basis-1/2 xl:basis-1/3">
              <div className="flex flex-col w-full">
                <div className="flex aspect-square items-center justify-center">
                  <img className="w-full" src={item.image.link} alt={item.image.alt}/>
                </div>
                <div className="flex flex-col w-full gap-2">
                  <h1 className="font-semibold text-center">{item.title}</h1>
                  <p>{item.text}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}
