import Hero from "@/app/ui/Home/Hero";
import Content from "@/app/ui/Home/Content";
import Services from "@/app/ui/Home/Services";
import Footer from "@/app/ui/Footer";
import About from "@/app/ui/Home/About";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <Hero />
      <About />
      <Content />
      <Services />
      <Footer />
    </div>
  );
}
