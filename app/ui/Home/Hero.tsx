export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-[84vh] lg:h-[95vh] w-full">
      <div className="relative flex justify-center items-center h-full w-full overflow-hidden">
        <div className="relative flex justify-center items-center h-full w-full max-w-4xl text-black">
          <div className="absolute flex flex-col h-fit w-full bottom-4 left-0 right-0 gap-4 p-4 rounded-lg z-30">
            <div className="bg-white bg-opacity-85 p-4 rounded-lg">
              <h1 className="md:text-2xl font-black text-center">❝Yeniden Başlasan Kim Olurdun❞</h1>
              <p className="font-semibold text-center">
                Rotanı nereye çevirirsen o tarafa gidersin, lakin bazen rüzgâra göre şekil alman gerekebilir.
                Karşına çıkan rüzgarın, seni planladığın noktadan daha iyi bir yere götürebileceğini bilseydin, karşına çıkan rüzgara hissin ne olurdu?
              </p>
            </div>
          </div>
        </div>
        <img
          className="absolute object-cover h-full w-full z-0"
          src="/bg.jpg"
          alt="Ceren Tercan"
        />
      </div>
    </div>
  );
}
