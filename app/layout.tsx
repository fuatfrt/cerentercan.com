import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/app/ui/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://cerentercan.com"),

  title: "Ceren Tercan - MINDFULNESS KOÇLUK",
  description: "Ceren Tercan, İzmir merkezli bir uzman olarak, çeşitli kişisel gelişim ve sağlık hizmetleri sunmaktadır. Bu hizmetler arasında “Mindfulness Koçluğu”, “Psikolojik Danışmanlık”, “Sınav Kaygısı ve Sınav Tercih Danışmanlığı”, “Nefes ve Beden Farkındalığı”, “Mindfulness Temelli Nefes ve Yoga Dersleri” ve “Somatik Dans” gibi alanlar bulunmaktadır. Bu hizmetler, bireylerin zihinsel ve bedensel sağlığını desteklemeye odaklanarak, farkındalık ve iyilik hali kazandırmayı amaçlamaktadır.",
  authors: {
    name: "Fuat Fırat",
    url: "https://instagram.com/fuatfrt",
  },
  openGraph: {
    title: "Ceren Tercan - MINDFULNESS KOÇLUK",
    description: "Ceren Tercan, İzmir merkezli bir uzman olarak, çeşitli kişisel gelişim ve sağlık hizmetleri sunmaktadır. Bu hizmetler arasında “Mindfulness Koçluğu”, “Psikolojik Danışmanlık”, “Sınav Kaygısı ve Sınav Tercih Danışmanlığı”, “Nefes ve Beden Farkındalığı”, “Mindfulness Temelli Nefes ve Yoga Dersleri” ve “Somatik Dans” gibi alanlar bulunmaktadır. Bu hizmetler, bireylerin zihinsel ve bedensel sağlığını desteklemeye odaklanarak, farkındalık ve iyilik hali kazandırmayı amaçlamaktadır.",
    type: "website",
    locale: "tr_TR",
    url: "https://cerentercan.com",
    images: [
      {
        url: "/logo.png",
        width: 250,
        height: 250,
        alt: "Ceren Tercan"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="flex flex-col h-full min-h-dvh w-full bg-main font-sans">
      <Header />
        {children}
      </body>
    </html>
  );
}
