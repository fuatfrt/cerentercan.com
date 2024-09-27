"use client";
import React, {useState} from "react";
import {IoIosArrowDropdown} from "react-icons/io";

export default function AccordionButton() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center w-full max-w-2xl gap-4">
      <button
        onClick={() => {
          setOpen(!open)
        }}
        className="p-2 border border-gray-500 rounded">
        {open ? "Daha Az Göster" : "Daha Fazla Göster"}
        <IoIosArrowDropdown className={`${
          open
            ? "transform rotate-180"
            : "transform rotate-0"
        } inline ml-2 size-5 transition-all duration-500`}/>
      </button>
      <div className={`${
        open
          ? "grid-rows-[1fr]"
          : "grid-rows-[0fr]"
      } grid overflow-hidden w-full text-left transition-all duration-500 ease-in-out`}>
        <div className="flex flex-col gap-4 overflow-hidden">
          <div>
            <h2 className="font-bold">AKADEMİK EĞİTİMLER:</h2>
            <ul className="flex flex-col pl-4 list-disc">
              <li>Balıkesir Üniversitesi, Sosyoloji Yüksek Lisans (Tezli) ( 2 Yıl)</li>
              <li>Anadolu Üniversitesi, Formasyon (Tezsiz Yüksek Lisans) ( 1 Yıl)</li>
              <li>Balıkesir Üniversitesi, Sosyoloji Lisans Mezunu (4 Yıl)</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Nitelikli Eğitim Sertifikaları:</h2>
            <ul className="flex flex-col pl-4 list-disc">
              <li>
                2024 - UZM. Klinik Psikolog Gökhan ÇINAR -
                <span className="font-light italic">“Aile Danışmanlığı Eğitimi” (464 Saat)"</span>
              </li>
              <li>
                2023 - UNDP – SABANCI VAKFI – AÇEV – AİLE BAKANLIĞI -
                <span className="font-light italic">Geleceğini Kuran Genç Kadınlar Projesi, “Hayat Dolu Buluşmalar Eğitici Eğitmenliği”</span>
              </li>
              <li>
                2021 - Breathing Mind / International Coaching Federation (ICF) -
                <span className="font-light italic">“Mindfulness Coaching Program”  (1,5 Yıl)</span>
              </li>
              <li>
                Yoga Teacher Training (Allience 200 RYS) -
                <span className="font-light italic">Mindfulness Temelli Hareket, Nefes ve Dans Terapisi</span>
              </li>
              <li>
                2016 – Ankara Eğitim Enstitüsü -
                <span className="font-light italic">“Rehberlik ve Psikolojik Danışmanlık Eğitimi”</span>
              </li>
              <li>
                Türkiye Dans Sporları Federasyonu (TDSF) -
                <span className="font-light italic">Dans Eğitmenliği</span>
              </li>
              <li>
                Balıkesir Üniversitesi (Balıkesir) -
                <span className="font-light italic">“Avrupa Birliği Proje Eğitimi”</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">HİZMETLER:</h2>
            <ul className="flex flex-col pl-4 list-disc">
              <li>Psikolojik Danışmanlık</li>
              <li>Aile ve İlişki Danışmanlığı</li>
              <li>Mindfulness Koçluk</li>
              <li>Öğrenci Koçluğu</li>
              <li>Ergen Psikolojisi</li>
              <li>Üniversite Tercih Danışmanlığı</li>
              <li>Online Danışmanlık</li>
              <li>Sınav Kaygısı</li>
              <li>Mindfulness Temelli Çalışmalar</li>
              <li>BBM Nefes Teknikleri</li>
              <li>Nefes ve Beden farkındalığı</li>
              <li>Somatik Dans</li>
              <li>Oyun Terapisi</li>
              <li>Çocuk Yogası</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">İŞ DENEYİMİ:</h2>
            <ul className="flex flex-col pl-4 list-disc">
              <li>Gaziemir Belediyesi / GAZİDEK -
                <span className="font-light italic"> Rehberlik ve Psikolojik Danışmanlık (2016 - ...)</span>
              </li>
              <li>
                <span className="font-light italic">Aile Danışmanlığı (2024- … )</span>
              </li>
              <li>
                <span className="font-light italic">Nefes - Mindfulness Koçluk - Dans Terapisi ve Interoseptif Duyular
                  Özel Grup ya da Bireysel Seans (Kendi işim) (2021 - ...)</span>
              </li>
              <li>Çağdaş Yaşam Öğretmen Nuriye Akman Anaokulu -
                <span className="font-light italic"> Rehberlik ve Psikolojik Danışmanlık (2014 - 2016)</span>
              </li>
              <li>Güney Marmara Kalkınma Ajansı -
                <span className="font-light italic"> Sosyolog (Proje Bazlı) (2013 - 2014))</span>
              </li>
              <li>Balıkesir Çağdaş Eğitim Vakfı (BAÇEV) -
                <span className="font-light italic"> Gönüllü Öğretmenlik Projesi (2012-2013)</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Katıldığı Seminer ve Kurslar:</h2>
            <ul className="flex flex-col pl-4 list-disc">
              <li>2024 - UZM. Klinik Psikolog Gökhan ÇINAR -
                <span className="font-light italic">“Aile Danışmanlığı Eğitimi” (464 Saat)</span>
              </li>
              <li>2023 – UNDP, SABANCI VAKFI, AÇEV, AİLE BAKANLIĞI - Geleceğini Kuran Genç Kadınlar Projesi -
                <span className="font-light italic">“Hayat Dolu Buluşmalar Eğitici Eğitimi”</span>
              </li>
              <li>2023 – BBM Nefes Teknikleri</li>
              <li>2022 - David Ernest Cornwell ile Nefesin Biyomekanik Yapısı -
                <span className="font-light italic">6 Haftalık Nefesin Biyomekanik Faktörleri ve Pratikleri</span>
              </li>
              <li>2022 - David Ernest Cornwell ile Mindfulness -
                <span className="font-light italic">8 Haftalık Pratikli Mindfulness Eğitimi</span>
              </li>
              <li>2022 - Psiko-Kamp, Ziya Ünlütürk -
                <span className="font-light italic">Psikolojik Eğitimlerin verildiği 4 günlük yoğunlaştırılmış Psikoloji Kampı</span>
              </li>
              <li>2021 - Breathing Mind International Coaching Federation (ICF) -
                <span className="font-light italic">Breathing Mind Mindfulness Coaching Program (1,5 Yıl)</span>
              </li>
              <li>2021 - Alfa Etkinlik Organizsayon Psikoloji Kampı -
                <span className="font-light italic">Mindfulness, Sınırlar ve Travmalar Üzerine 4 günlük Psikoloji Seminerleri</span>
              </li>
              <li>2019 - Alfa Etkinlik Organizsayon Psikoloji Zirvesi -
                <span className="font-light italic">Beyhan Budak, Ziya Ünlütürk ve Gökhan Çınar’dan Psikoloji Seminerleri</span>
              </li>
              <li>2019 - Uluslararası Sanat Kamp Programı (İspanya)</li>
              <li>2018 - “Callan Method” British English (Orta Seviye)</li>
              <li>2015 - Çağdaş Yaşam Öğretmen Nuriye Akman Anaokulu (İzmir) -
                <span className="font-light italic">“Aile Eğitim Programı” (AEP)</span>
              </li>
              <li>2015 - Çağdaş Yaşam Öğretmen Nuriye Akman Anaokulu (İzmir) -
                <span className="font-light italic">“Kendine Güvenen Çocuk Yetiştirme Eğitimi”</span>
              </li>
              <li>2015 - Çağdaş Yaşam Öğretmen Nuriye Akman Anaokulu (İzmir) -
                <span className="font-light italic">“Ebeveyn Çocuk İlişkileri Eğitimi”</span>
              </li>
              <li>2014 - Bölgesel Öğrenci Kulüp Başkanları Kongresi (İzmir)</li>
              <li>2013 - Nöro Linguistik Programlama Teknikleri (NLP)</li>
              <li>2012 - Balıkesir Üniversitesi (Balıkesir) -
                <span className="font-light italic">Avrupa Birliği Proje Eğitimi (Sertifikalı)</span>
              </li>
              <li>2012 - Profesyonel İş Yaşamında İmaj Yönetimi Beden Dili ve İletişim Teknikleri</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
