"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineStar,
  AiOutlinePicture,
} from "react-icons/ai";
import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  price: number;
}

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const Modal = ({
  isOpen,
  onClose,
  product,
  addToCart,
}: {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  addToCart: (item: CartItem) => void;
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const swiperRef = useRef<SwiperCore | null>(null);

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, value));
  };

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="max-h-screen p-5 bg-white max-w-xl md:max-w-3xl w-full relative overflow-y-auto md:rounded-lg rounded-none">
        <button
          onClick={onClose}
          className="absolute p-2 md:p-0 top-2 right-2 z-10 rounded-full md:text-gray-500 md:bg-transparent text-white bg-teal-500"
        >
          <IoClose className="w-5 h-5" />
        </button>
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center">
          <div className="relative w-full md:w-1/2 swiper div-1">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper h-auto"
            >
              {product.images.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={image}
                    alt={`${product.title} - Image ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute inset-0 flex justify-between items-center px-1">
              <button
                className="w-10 h-10 flex justify-center items-center z-10 bg-teal-500 text-white rounded-full"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <IoChevronBack />
              </button>
              <button
                className="w-10 h-10 flex justify-center items-center z-10 bg-teal-500 text-white rounded-full"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <IoChevronForward />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 hidden md:flex flex-col">
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
                  <div className="h-10 flex items-center rounded border border-gray-400">
                    <button
                      className="h-9 w-9 text-gray-400"
                      onClick={() => handleQuantityChange(quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="h-9 w-[70px] px-3 text-center outline-none custom-num-input"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(parseInt(e.target.value) || 1)
                      }
                    />
                    <button
                      className="h-9 w-9 text-gray-400"
                      onClick={() => handleQuantityChange(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="h-10 w-[190px] text-sm rounded bg-teal-600 text-white"
                    onClick={() => {
                      addToCart({
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        quantity: quantity,
                        image: product.image,
                      });
                      onClose();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <button className="h-10 w-full text-sm mt-5 rounded bg-teal-600 text-white">
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
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const items = [
    {
      id: 1,
      title: "Uiamond Halo Stud Sociis",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-1.jpg",
      images: [
        "/product-image-1.jpg",
        "/product-image-1-2.jpg",
        "/product-image-1-3.jpg",
      ],
      price: 628,
    },
    {
      id: 2,
      title: "Diamond Halo Stud Sociis",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-2.jpg",
      images: [
        "/product-image-2.jpg",
        "/product-image-2-2.jpg",
        "/product-image-2-3.jpg",
      ],
      price: 200,
    },
    {
      id: 3,
      title: "Viamond Halo Stud Donec",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-3.jpg",
      images: [
        "/product-image-3.jpg",
        "/product-image-3-2.jpg",
        "/product-image-3-3.jpg",
      ],
      price: 490,
    },
    {
      id: 4,
      title: "Diamond Halo Stud Magnis",
      description: "Lorem ipsum dolor sit ame",
      image: "/product-image-4.jpg",
      images: [
        "/product-image-4.jpg",
        "/product-image-4-2.jpg",
        "/product-image-4-3.jpg",
      ],
      price: 325,
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

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id.toString())) {
      removeFromWishlist(product.id.toString());
    } else {
      addToWishlist({
        id: product.id.toString(),
        title: product.title,
        price: product.price,
        image: product.image,
      });
    }
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
                <div className="cursor-pointer absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="relative">
                    <button
                      className="p-2 rounded-full bg-white text-teal-600 hover:bg-teal-600 hover:text-white transition-colors"
                      onMouseEnter={() => setActiveTooltip(`cart-${item.id}`)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          title: item.title,
                          price: item.price,
                          quantity: 1,
                          image: item.image,
                        })
                      }
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
                      onClick={() => toggleWishlist(item)}
                      aria-label={
                        isInWishlist(item.id.toString())
                          ? "Remove from Wishlist"
                          : "Add to Wishlist"
                      }
                    >
                      <AiOutlineStar
                        className={`w-5 h-5 ${
                          isInWishlist(item.id.toString())
                            ? "text-yellow-500 fill-yellow-500"
                            : ""
                        }`}
                      />
                    </button>
                    {activeTooltip === `wishlist-${item.id}` && (
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded py-1 px-3 mb-2 whitespace-nowrap z-20">
                        {isInWishlist(item.id.toString())
                          ? "Remove from Wishlist"
                          : "Add to Wishlist"}
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
        addToCart={addToCart}
      />
    </main>
  );
};

export default ProductSection;
