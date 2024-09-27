export default function Contact({id}: { id: string }) {
  return (
    <div id={id} className="flex justify-center items-center h-full w-full border-b border-black py-4 scroll-mt-14">
      <div className="flex flex-col justify-center items-center h-full w-full max-w-7xl gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">İletişim</h1>
        <div
          className="flex flex-col md:flex-row items-center h-full w-full divide-black divide-y-2 lg:divide-x-2 lg:divide-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 items-center h-full min-h-96 w-full gap-4 lg:gap-0 px-4">
            <div className="flex flex-col justify-center items-center h-full w-full gap-2 border-black border-b">
              <p>Adres</p>
              <p>Atıfbey Mahallesi 67 sokak No:39 B Blok Daire:2 Gaziemir/İzmir</p>
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full gap-2 border-black border-b lg:border-l">
              <p>Telefon</p>
              <a className="text-blue-500" href="tel:05535396935">0553 539 69 35</a>
            </div>
            <div className="flex flex-col justify-center items-center h-full w-full lg:col-span-2 pb-4">
              <p>Mail</p>
              <a className="text-blue-500" href="mailto:ceren-tercan@windowslive.com">ceren-tercan@windowslive.com</a>
            </div>
          </div>
          <div className="flex w-full p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3130.338519772334!2d27.13891!3d38.317991!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdfd9f8161ae7%3A0x3ae243a689800ca2!2sAt%C4%B1fbey%2C%2067.%20Sk.%20No%3A39%2C%2035410%20Gaziemir%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1727328993486!5m2!1str!2str"
              width="100%" height="480" className="border rounded-lg shadow-2xl" allowFullScreen loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
