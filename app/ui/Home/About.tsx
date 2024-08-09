export default function About({id}: { id: string }) {
  return (
    <div id={id} className="flex justify-center items-center h-full w-full border-y border-black pt-4 scroll-mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full py-4 gap-4">
        <div className="flex flex-col justify-center items-center h-full w-full p-4 gap-4">
          <h1 className="text-2xl font-bold">Ceren Tercan</h1>
          <h2 className="font-extralight">Hakkında ya da title</h2>
          <div className="flex flex-col max-w-lg gap-4">
            <p>
              Ben Ceren TERCAN 10 yılı aşkın süredir Rehber Öğretmen ve Psikolojik Danışman olarak profesyonel destek
              sunmaktayım. Mesleğime farklı bir perspektif sunması amaçlı Travma Terapisti David CORNWELL ve Nörobilim
              Uzmanı PPC Banu ÇEÇEN’in beraber yürüttüğü ICF MINDFULNESS KOÇLUK Programını tamamladım. Uzman Sosyolog
              olarak 2022 yılından beri mesleğimin yanı sıra yetişkin gruplarına MİNDFULNESS Koçluğu yapmaktayım. Bu
              süreçte, bireylerin zihinsel, duygusal ve fiziksel sağlıklarını iyileştirmelerine destek oluyorum. Nefes
              ve beden farkındalığı üzerine yoğunlaşarak, katılımcıların yaşamlarında daha bilinçli ve huzurlu bir
              şekilde var olmalarına katkıda bulunuyorum.
            </p>
            <p>
              TDSF dans eğitmenİ , ALLIANCE YOGA eğitmeni (200 RYS) ve Nefes Terapistİ alanlarımın deneyimlerininin
              zihin üzerindeki dönüşümünü destekleyen Dans, yoga, nefes ve beden farkıdalığını birleştirdiğim özgün grup
              atölyeleri ve terapi seanslarıyla vermekteyim.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full aspect-square">
          <img className="h-auto max-h-full rounded-2xl"
               src="/ceren_tercan.JPG" alt="Ceren Tercan"/>
        </div>
      </div>
    </div>
  );
}
