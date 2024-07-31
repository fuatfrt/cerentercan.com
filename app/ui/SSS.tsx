import Accordion from "@/app/ui/Accordion";

export default function Sss({id}: { id: string }) {
  return (
    <div id={id} className="flex justify-center items-center h-full w-full border-y border-black pt-4 scroll-mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center max-w-7xl w-full py-4 gap-4">
        <div className="flex flex-col justify-start items-center h-full w-full p-4 gap-4">
          <h1 className="text-2xl md:text-4xl font-black">Danışmanlık hizmeti hakkında sıkça sorulan sorular</h1>
          <div className="flex flex-col w-full text-justify gap-2">
            <Accordion />
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center w-full aspect-square">
          <img className="h-auto max-h-full rounded-xl"
               src="/sss.jpg" alt="Ceren Tercan"/>
        </div>
      </div>
    </div>
  );
}
