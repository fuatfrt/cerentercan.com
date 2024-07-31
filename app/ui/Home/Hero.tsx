export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-[84vh] lg:h-[95vh] w-full">
      <div className="relative flex justify-center items-center h-full w-full overflow-hidden">
        <div className="relative flex justify-center items-center h-full w-full max-w-4xl text-black">
          <div
            className="absolute flex flex-col w-full bottom-0 left-0 right-0 gap-4 p-4 bg-white opacity-75 rounded-t-lg z-30">
            <h1 className="md:text-2xl font-black text-center">❝Yeniden Başlasan Kim Olurdun❞</h1>
            <p className="font-light text-center">
              Rotanı nereye çevirirsen o tarafa gidersin.Lakin bazen rüzgara göre şekil alman gerekebilir
            </p>
            <p className="md:text-xl text-center font-bold">
              Mindfulness, psikoloji, nefes, beden ve dans gibi güçlü araçlarla desteklenen danışmanlık süreci. İçsel dengeyi sağlama, İlişkileri iyileştirme, sınav dönemi desteği, sağlıklı YKS-LGS tercihleri, tutkularınızı takip etme ve yaşamınızı yeniden yapılandırma yolunda profesyonel rehberlik hizmeti.
            </p>
            <p className="md:text-xl font-bold text-center">
              Potansiyellerini keşfet, rotanı planla, yaşamını yeniden oluştur.
            </p>
          </div>
        </div>
        <img
          className="absolute object-cover h-full w-full z-0"
          src="/background.JPG"
          alt="Ceren Tercan"
        />
      </div>
    </div>
  );
}
