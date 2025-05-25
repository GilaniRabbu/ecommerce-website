import Image from "next/image";
import React from "react";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/gallery-3-1.png",
      alt: "Modern living room with beige sofa and black coffee table",
    },
    {
      src: "/gallery-3-2.png",
      alt: "Minimalist bedroom with gray bedding and striped wallpaper",
    },
    {
      src: "/gallery-3-3.png",
      alt: "Wooden furniture detail with warm wood tones",
    },
    {
      src: "/gallery-3-4.png",
      alt: "White kitchen with glass cabinets and marble countertops",
    },
    {
      src: "/gallery-3-5.png",
      alt: "Clean living space with wooden chairs and plant",
    },
    {
      src: "/gallery-3-6.png",
      alt: "Modern bathroom vanity with round mirror and wooden counter",
    },
  ];

  return (
    <div className="py-12 px-5">
      <h2 className="text-center font-semibold text-2xl md:text-4xl">
        Interior Gallery
      </h2>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-[9/16] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={280}
                height={360}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
