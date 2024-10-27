import Image from "next/image";

export const ProductSection = () => {
  const items = [
    {
      id: 1,
      title: "Product 1",
      description: "Lorem ipsum dolor sit ame",
      image: "https://dummyimage.com/300x300/111/fff",
      price: 370,
    },
    {
      id: 2,
      title: "Product 2",
      description: "Lorem ipsum dolor sit ame",
      image: "https://dummyimage.com/300x300/222/fff",
      price: 400,
    },
    {
      id: 3,
      title: "Product 3",
      description: "Lorem ipsum dolor sit ame",
      image: "https://dummyimage.com/300x300/333/fff",
      price: 280,
    },
  ];

  return (
    <main className="px-5 py-20">
      <section className="container mx-auto">
        <p className="text-center text-lg text-gray-500">PRODUCT</p>
        <h1 className="text-center font-semibold text-2xl md:text-4xl">
          Our Newest Product Line
        </h1>
        <div className="pt-10 px-4 flex flex-col md:flex-row items-center justify-center gap-10">
          {items.map((item) => (
            <div key={item.id}>
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={300}
              />
              <h2 className="mt-5 text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-gray-500">{item.description}</p>
              <h3 className="mt-3 text-teal-600">${item.price}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
