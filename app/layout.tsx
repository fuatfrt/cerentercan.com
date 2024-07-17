import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Header from "@/app/ui/Header";

export const metadata: Metadata = {
  title: "Ceren Tercan - MINDFULNESS KOÇLUK",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="flex flex-col h-full min-h-dvh w-full bg-[#cde5e7] font-sans">
      <Header />
        {children}
      </body>
    </html>
  );
}
