export default function Press({id}: { id: string }) {
  return (
    <div
      id={id}
      className="flex justify-center items-center h-full w-full border-b border-black py-4">
      <div className="flex flex-col justify-center items-center w-full max-w-7xl gap-4">
        <h1 className="text-2xl md:text-4xl font-bold">Basına Çıkanlar</h1>
        <div className="grid grid-rows-1 lg:grid-cols-3 h-full w-full">
          <div className="flex flex-col justify-center items-center w-full gap-4 p-4">
            <img
              className="aspect-video rounded-lg"
              src="https://placehold.co/1092x1080.png"
              alt="Ceren Tercan"/>
            <h3 className="flex justify-center items-center w-full text-black font-black">Ceren Tercan</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa eaque placeat possimus tempore.
              Assumenda atque beatae deserunt doloribus eaque facere modi optio repudiandae vitae.
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-4 p-4">
            <img
              className="aspect-video rounded-lg"
              src="https://placehold.co/1092x1080.png"
              alt="Ceren Tercan"/>
            <h3 className="flex justify-center items-center w-full text-black font-black">Ceren Tercan</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa eaque placeat possimus tempore.
              Assumenda atque beatae deserunt doloribus eaque facere modi optio repudiandae vitae.
            </span>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-4 p-4">
            <img
              className="aspect-video rounded-lg"
              src="https://placehold.co/1092x1080.png"
              alt="Ceren Tercan"/>
            <h3 className="flex justify-center items-center w-full text-black font-black">Ceren Tercan</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa eaque placeat possimus tempore.
              Assumenda atque beatae deserunt doloribus eaque facere modi optio repudiandae vitae.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
