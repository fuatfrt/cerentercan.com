export default function Contact() {
  return (
    <div className="flex justify-center items-center h-full w-full border-b border-black py-4">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl gap-4">
        <h1 className="text-2xl font-bold">İletişim</h1>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full gap-4 divide-black divide-y-2 lg:divide-x-2 lg:divide-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 justify-center items-center h-full w-full gap-4 px-4">
            <div className="flex flex-col justify-center items-center h-full w-full gap-2 border-b">
              <p>Adres</p>
              <p>Gazikent, Çocuk Parkı ve Dinlenme Yeri İçi Yolu 35410 Gaziemir/İzmir</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full gap-2 border-b">
              <p>Telefon</p>
              <a className="text-blue-500" href="tel:05535396935">05535396935</a>
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full border-b">
              <p>Çalışma Saatleri</p>
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
              <p>Cumartesi: 10:00 - 17:00</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full">
              <p>Mail</p>
              <a className="text-blue-500" href="mailto:ceren-tercan@windowslive.com">ceren-tercan@windowslive.com</a>
            </div>
          </div>
          <div className="flex justify-center items-center w-full p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4045.8572177716924!2d27.134689493953253!3d38.31161295711259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbe07811197b51%3A0x450377670f1e6a0!2sGazikent%2C%2035410%20Gaziemir%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1720678917541!5m2!1str!2str"
              width="100%" height="480" className="border rounded-lg shadow-2xl" allowFullScreen loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
