import React from "react";

const Features = () => {
  const features = [
    {
      icon: "/icon-1.png",
      title: "Extra Shipping",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typeset ting industry lorem Ipsum",
    },
    {
      icon: "/icon-2.png",
      title: "Return Policy",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typeset ting industry lorem Ipsum",
    },
    {
      icon: "/icon-3.png",
      title: "Payment Secured",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typeset ting industry lorem Ipsum",
    },
    {
      icon: "/icon-4.png",
      title: "Money Back Guarantee",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typeset ting industry lorem Ipsum",
    },
  ];

  return (
    <div className="px-5 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 p-5 flex flex-col items-center text-center"
            >
              <div className="flex gap-2 mb-4 items-center">
                <div>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-7 object-contain"
                  />
                </div>
                <h3 className="text-base font-medium">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
