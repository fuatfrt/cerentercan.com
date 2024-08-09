import Hero from "@/app/ui/Home/Hero";
import Services from "@/app/ui/Home/Services";
import Footer from "@/app/ui/Footer";
import About from "@/app/ui/Home/About";
import Contact from "@/app/ui/Home/Contact";
import Sss from "@/app/ui/Home/SSS";
import Press from "@/app/ui/Home/Press";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Hero />
      <About id="hakkımda" />
      <Services id="hizmetlerimiz" />
      <Press id="basin" />
      <Sss id="sss" />
      <Contact id="iletisim" />
      <Footer />
    </div>
  );
}
