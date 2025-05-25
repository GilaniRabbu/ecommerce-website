import Image from "next/image";
import React from "react";

const Promotional = () => {
  const promotionalData = [
    {
      id: 1,
      title: "NEW",
      titleSecondary: "PLANTS",
      description: "Get up to 40% off",
      buttonText: "SHOP NOW",
      backgroundImage: "/img-2-1.png",
      titleColor: "text-teal-700",
      titleSecondColor: "text-stone-900",
      descriptionColor: "text-gray-600",
      buttonStyle: "bg-black hover:bg-gray-800 text-white",
    },
    {
      id: 2,
      title: "CHAIN",
      titleSecondary: "LAMP",
      description: "Get up to 60% off",
      buttonText: "SHOP NOW",
      backgroundImage: "/img-2-2.png",
      titleColor: "text-orange-400",
      titleSecondColor: "text-white",
      descriptionColor: "text-gray-300",
      buttonStyle: "bg-white hover:bg-gray-300 text-black",
    },
    {
      id: 3,
      title: "NEW",
      titleSecondary: "CHAIR",
      description: "Get up to 40% off",
      buttonText: "SHOP NOW",
      backgroundImage: "/img-2-3.png",
      titleColor: "text-teal-700",
      titleSecondColor: "text-stone-900",
      descriptionColor: "text-gray-600",
      buttonStyle: "bg-black hover:bg-gray-800 text-white",
    },
  ];
  return (
    <div className="w-full py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          {promotionalData.map((item) => (
            <div
              key={item.id}
              className="flex-1 relative h-72 lg:h-64 overflow-hidden shadow-sm bg-cover bg-right"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
              }}
            >
              {/* Content */}
              <div className="relative z-10 p-8 h-full">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    <span className={item.titleColor}>{item.title}</span>{" "}
                    <span className={item.titleSecondColor}>
                      {item.titleSecondary}
                    </span>
                  </h2>
                  <p className={`mb-10 ${item.descriptionColor}`}>
                    {item.description}
                  </p>
                  <button
                    className={`${item.buttonStyle} px-6 py-2 cursor-pointer font-medium transition-colors duration-200 rounded-none`}
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotional;
