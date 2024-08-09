import {services, servicesContent} from "@/app/lib/content";
import ServiceContentBox from "@/app/ui/Serives/ServiceContentBox";
import ServiceHeaderBox from "@/app/ui/Serives/ServiceHeaderBox";

export default function Services({id}: { id: string }) {

  return (
    <div id={id} className="flex justify-center items-center h-full w-full py-16 lg:py-14 border-y border-black">
      <div className="flex flex-col justify-center items-center h-full w-full max-w-7xl">
        <h1
          className="flex justify-center items-center w-full max-w-6xl bg-box-light p-8 text-4xl border-b border-black">
          Platformada Neler Var?
        </h1>
        <div
          className="flex flex-col md:flex-row justify-center items-center h-full w-full bg-box-light gap-4 p-4 text-center">
          {
            services.map((service, index) => (
              <ServiceHeaderBox Icon={service.Icon} title={service.title} link={service.link} key={index} />
            ))
          }
        </div>
        <div className="flex flex-col justify-center items-center w-full bg-[#a98a69]">
          {
            servicesContent.map((content, index) => (
              <ServiceContentBox
                key={index}
                link={content.link}
                title={content.title}
                description={content.description}
                image={content.image}
                index={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
