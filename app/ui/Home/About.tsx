export default function About({id}: {id: string}) {
  return (
    <div id={id} className="flex justify-center items-center h-full w-full border-y border-black pt-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full py-4 gap-4">
        <div className="flex flex-col justify-start items-center h-full w-full p-4 gap-4">
          <h1 className="text-2xl font-bold">Ceren Tercan</h1>
          <h2 className="font-extralight">Hakkında ya da title</h2>
          <div className="flex flex-col max-w-lg text-justify gap-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, impedit magni! Amet earum
              exercitationem impedit iste magnam quos totam vero! Deleniti distinctio dolore error ipsum maxime molestias,
              nihil pariatur quam quia quisquam, suscipit vel veniam veritatis. Blanditiis consequatur, cumque id iste
              laborum repudiandae? Aspernatur cum cupiditate facere in magni minima natus nihil nulla numquam, optio quae
              quos reiciendis, tempore ullam voluptatibus. Ab ad aperiam beatae consequatur esse excepturi exercitationem
              explicabo facilis hic iste libero magni maxime, quod reprehenderit repudiandae saepe sint vel velit
              veritatis voluptate? Accusantium aliquid asperiores distinctio facilis fugiat laudantium minima, non numquam
              soluta voluptatem! Amet, expedita, vitae.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi architecto eaque earum eius eum facere
              fuga fugit hic ipsa, laboriosam libero magni mollitia, nemo nisi non numquam odio officia, placeat porro
              quisquam sit sunt temporibus! Ab adipisci animi atque consequuntur deleniti dicta eaque fugiat ipsam iure
              laboriosam magni maiores molestias, nesciunt nobis provident qui quidem, ratione recusandae reiciendis sequi
              suscipit unde veniam voluptatem. Aliquam aperiam aut dicta dolorum, eos, esse facilis magnam, magni
              perferendis provident quasi qui rem voluptas! Commodi consectetur odio velit? Ea numquam officia quasi rem
              sed! Asperiores assumenda consectetur cum facere ipsum laudantium libero rem voluptatem.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nam nesciunt numquam, officiis optio
              possimus praesentium sit totam. A ab, accusantium assumenda corporis debitis dicta dolor ea eius inventore
              laborum libero maiores maxime modi non quasi qui quia quibusdam quis quisquam quo reprehenderit sapiente
              totam vero. Dignissimos ducimus expedita perspiciatis qui quidem quod sed? A ab accusamus aliquid amet
              architecto beatae blanditiis consequuntur delectus doloribus ea eaque eligendi explicabo fugiat hic id
              incidunt iusto laboriosam magnam, magni maiores necessitatibus nesciunt officiis optio porro possimus
              quaerat, quidem ratione recusandae reiciendis repellat reprehenderit totam ullam, ut veniam vero voluptas
              voluptates! Atque, ullam.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full aspect-square">
          <img className="h-auto max-h-full" src="https://cerentercan.com/wp-content/uploads/2024/05/1000041218-scaled.jpg" alt="Ceren Tercan"/>
        </div>
      </div>
    </div>
  );
}
