export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center h-[84vh]  w-full">
      <div className="relative flex justify-center items-center h-full w-full overflow-hidden">
        <div className="relative flex justify-center items-center h-full w-full max-w-4xl text-black">
          <div
            className="absolute flex flex-col w-full bottom-0 left-0 right-0 gap-4 p-4 bg-white opacity-75 rounded-t-lg z-30">
            <h1 className="text-lg md:text-2xl font-black text-center">❝Kendinizin En İyi Versiyonu Olun❞</h1>
            <p className="text-l md:text-xl text-justify font-bold">
              Hoş geldiniz! Burası, gerçek potansiyelinizi keşfetmenin heyecan dolu bir yolculuğu. Mindfulness,
              psikoloji, nefes, beden ve dans gibi güçlü araçlarla desteklenen bir koçluk süreci sunuyorum. İçsel
              dengeyi bulma, İlişkileri iyileştirme, tutkularınızı takip etme ve yaşamınızı yeniden yapılandırma yolunda
              sizi rehberlik etmek için buradayım. Potansiyellerinizi keşfedin, yaşamınızı en yüksek kaliteden yaşayın.
            </p>
          </div>
        </div>
        <video autoPlay={true} loop={true} muted={true} className="absolute w-auto min-w-full min-h-full max-w-none">
          <source src="https://videos.pexels.com/video-files/1448735/1448735-hd_1366_720_24fps.mp4"
                  type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}
