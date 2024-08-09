import Image from "next/image";
import ReadMoreDesc from "@/app/ui/components/ReadMoreDesc";

export default function Press({id}: { id: string }) {
  return (
    <div
      id={id}
      className="flex justify-center items-center h-full w-full border-b border-black py-4">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">Basına Çıkanlar</h1>
        <div className="grid grid-rows-1 lg:grid-cols-3 h-full w-full">
          <div className="flex flex-col justify-start items-center w-full gap-4 p-4">
            <Image
              loading="lazy"
              width="1920"
              height="1080"
              className="w-full rounded-lg"
              src="/press/1.jpg"
              alt="Geleceğini Kuran Genç Kadınlar Projesi"/>
            <h3 className="flex justify-center items-center w-full text-black font-black">
              Geleceğini Kuran Genç Kadınlar Projesi
            </h3>
            <ReadMoreDesc>
              UNDP ve Sabancı Vakfı ve belediyemiz iş birliğinde “Geleceğini Kuran Genç Kadınlar Projesi” kapsamında düzenlenen “Hayat Dolu Buluşmalar Programı” başladı.
              Hayat Dolu Buluşmalar Programı’nda 18-29 yaş aralığındaki eğitimde ve istihdamda bulunmayan ortaokul veya lise mezunu genç kadınlara, 2 ay boyunca, haftada 2 gün 3’er saatlik eğitimler verilecek. Katılmak isteyen tüm kadınları Sarnıç Toplum Merkezi'ndeki eğitimlere bekliyoruz.
            </ReadMoreDesc>
          </div>
          <div className="flex flex-col justify-start items-center w-full gap-4 p-4">
            <Image
              loading="lazy"
              width="1920"
              height="1080"
              className="w-full rounded-lg"
              src="/press/2.jpg"
              alt="Ceren Tercan"/>
            <h3 className="flex justify-center items-center w-full text-black font-black">
              Geleceğini Kuran Genç Kadınlar Projesi
            </h3>
            <ReadMoreDesc>
              “Geleceğini Kuran Genç Kadınlar Projesi” kapsamında UNDP, Sabancı Vakfı, AÇEV ve belediyemiz iş birliğinde düzenlenen “Hayat Dolu Buluşmalar Programı’na” katılan kadınlar, 2 ay süren eğitimlerinin sonunda sertifikalarını aldılar.
            </ReadMoreDesc>
          </div>
          <div className="flex flex-col justify-start items-center w-full gap-4 p-4">
            <Image
              loading="lazy"
              width="1920"
              height="1080"
              className="w-full rounded-lg"
              src="/press/3.jpeg"
              alt="Ceren Tercan"/>
            <h3 className="flex justify-center items-center w-full text-black font-black">
              Doğru İletişim Yöntemleri ve Kaygı Yönetimi
            </h3>
            <ReadMoreDesc>
              Gaziemir Belediyesi Destek Eğitim Merkezimizde eğitim gören ve Liselere Geçiş Sınavı’na girecek olan 8. sınıf öğrencilerimizin ailelerine, rehber öğretmenlerimiz sınav öncesi ve sonrası yapılan doğru - yanlış davranışlar, doğru iletişim yöntemleri ve kaygı yönetimi hakkında bilgi verdi.
            </ReadMoreDesc>
          </div>
        </div>
      </div>
    </div>
  );
}
