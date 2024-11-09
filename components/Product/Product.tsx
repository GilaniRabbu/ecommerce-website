"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlinePicture,
  AiOutlineClose,
} from "react-icons/ai";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

const Modal = ({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="p-5 bg-white rounded-lg max-w-3xl w-full">
        <button
          onClick={onClose}
          className="absolute top-12 right-64 text-white"
        >
          <AiOutlineClose className="w-5 h-5" />
        </button>
        <div className="flex md-4 gap-10 justify-between items-center">
          <div className="w-1/2">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p className="text-3xl font-bold my-4">${product.price}</p>
            <div>
              <div className="flex mb-5 text-xs">
                <span className="w-24 font-semibold">SKU:</span>
                <span className="">E-00214</span>
              </div>
              <div className="flex text-xs">
                <span className="w-24 font-semibold">CATEGORY:</span>
                <span className="flex-1 text-muted">
                  Armchair, Bookshelf, Clocks, Flower vase, Hanging Light, Home
                  page, Planter, Sofa, Tables
                </span>
              </div>
            </div>
            <div className="quantity">
              <p className="font-semibold text-xs mt-8 mb-4">QUANTITY:</p>
              <div>
                <div className="flex gap-2 justify-between">
                  <div className="flex items-center rounded border border-gray-400">
                    <button
                      className="h-10 w-9 text-gray-400"
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="h-10 w-[80px] px-3 text-center outline-none"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                      }
                    />
                    <button
                      className="h-10 w-9 text-gray-400"
                      onClick={() => setQuantity((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="w-[180px] text-sm rounded bg-teal-600 text-white">
                    Add to Cart
                  </button>
                </div>
                <button className="w-full text-sm bg-teal-600 text-white py-2 px-4 mt-5 rounded">
                  Buy It Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductSection = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const items = [
    {
      id: 1,
      title: "Uiamond Halo Stud",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-1.jpg",
      price: 628,
    },
    {
      id: 2,
      title: "Diamond Halo Stud Sociis",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-2.jpg",
      price: 200,
    },
    {
      id: 3,
      title: "Viamond Halo Stud Donec",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-3.jpg",
      price: 490,
    },
    {
      id: 4,
      title: "Diamond Halo Stud Quis",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-4.jpg",
      price: 736,
    },
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className="px-5 py-20">
      <section className="container mx-auto">
        <p className="text-center text-base text-gray-500">PRODUCT</p>
        <h1 className="text-center font-semibold text-2xl md:text-4xl">
          Our Newest Product Line
        </h1>

        <div className="pt-10 px-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-10 md:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group max-w-[300px] sm:max-w-[350px] md:max-w-[400px] mx-auto"
            >
              <div className="relative overflow-hidden rounded">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-125"
                />
                <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="relative">
                    <button
                      className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                      onMouseEnter={() => setActiveTooltip(`cart-${item.id}`)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="Quick Add"
                    >
                      <AiOutlineShoppingCart className="w-5 h-5" />
                    </button>
                    {activeTooltip === `cart-${item.id}` && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-2 whitespace-nowrap z-20">
                        Quick Add
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                      onMouseEnter={() =>
                        setActiveTooltip(`wishlist-${item.id}`)
                      }
                      onMouseLeave={() => setActiveTooltip(null)}
                      aria-label="Add to Wishlist"
                    >
                      <AiOutlineStar className="w-5 h-5" />
                    </button>
                    {activeTooltip === `wishlist-${item.id}` && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-2 whitespace-nowrap z-20">
                        Add to Wishlist
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                      </span>
                    )}
                  </div>
                  <div className="relative hidden md:block">
                    <button
                      className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                      onMouseEnter={() => setActiveTooltip(`share-${item.id}`)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() => openModal(item)}
                      aria-label="Quick View"
                    >
                      <AiOutlinePicture className="w-5 h-5" />
                    </button>
                    {activeTooltip === `share-${item.id}` && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-2 whitespace-nowrap z-20">
                        Quick View
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-5 text-center">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="mt-2 text-gray-500">{item.description}</p>
                <h3 className="mt-3 text-teal-600">${item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </main>
  );
};

export default ProductSection;
