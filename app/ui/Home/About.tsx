import AccordionButton from "@/app/ui/About/AccordionButton";

export default function About({id}: { id: string }) {
  return (
    <div id={id} className="flex justify-center items-center h-full w-full border-y border-black pt-4 scroll-mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full py-4 gap-4">
        <div className="flex flex-col justify-center items-center h-full w-full p-4 gap-4">
          <h1 className="text-2xl font-bold">Ceren Tercan</h1>
          <h2 className="font-extralight">HOLİSTİK DANIŞMAN ve TERAPİ UZMANI</h2>
          <div className="flex flex-col max-w-2xl gap-4">
            <p>
              Ben Ceren TERCAN, 2012 yılından beri Rehber Öğretmen ve Psikolojik Danışman olarak profesyonel danışmanlık
              hizmeti vermekteyim. Okul çağı ( 3-25 yaş) ve yetişkin gruplarıyla kapsamlı çalışmalar yürütüyorum.
              Mesleğime farklı bir perspektif sunması amacıyla Travma Terapisti David CORNWELL ve Nörobilim Uzmanı PPC
              Banu ÇEÇEN’in beraber yürüttüğü “ICF Mindfulness Koçluk Programı” ve Uzm. Klinik Psikolog Gökhan ÇINAR’ın
              464 saatlik “Aile Danışmanlığı Eğitimi”ni tamamladım. Uzman Sosyolog olarak mesleğimi yürütmenin yanı sıra
              yetişkin gruplarına Mindfulness Koçluğu ve Aile Danışmanlığı yapmaktayım. İnsan psikolojisi üzerindeki
              olumlu dönüşümü bilimsel olarak kanıtlanan mindfulness, dans, yoga, nefes ve beden farkındalığı
              alanlarından beslenerek birleştirdiğim, özgün grup atölyeleri ve terapi seansları vermekteyim.
            </p>
            <p>
              Misyonum: Bireylerin zihinsel, duygusal, fiziksel sağlıklarını ve ilişkilerini iyileştirmeleri, sağlıklı
              karar mekanizmaları oluşturmaları adına; zihin, nefes ve beden farkındalığı üzerine yoğunlaşarak kişilerin
              öncelikle kendileriyle olan iletişimini güçlendirerek daha kaliteli bir yaşam kurmaları adına
              danışanlarıma profesyonel destek sağlamak.
            </p>
            <p>
              Siz de ilişkilerinizi iyileştirmek, stresinizi yönetmek, hayatınıza yön vermek, zihinsel ve duygusal
              açıdan dengelenmek için kendinize adım atmak isterseniz benimle iletişime geçebilirsiniz.
            </p>
          </div>
          <AccordionButton/>
        </div>
        <div className="flex justify-center items-center w-full aspect-square">
          <img className="h-auto max-h-full rounded-2xl"
               src="/ceren_tercan.JPG" alt="Ceren Tercan"/>
        </div>
      </div>
    </div>
  );
}
