import React from "react";
import { MapPin, Calendar, Car } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      title: "Choose A Location",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed vestibulum lectus ultrices vitae etiam. Locus eget.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-500" />,
      title: "Pick A Date",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed vestibulum lectus ultrices vitae etiam. Locus eget.",
    },
    {
      icon: <Car className="w-8 h-8 text-orange-500" />,
      title: "Book Your Ride",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sed vestibulum lectus ultrices vitae etiam. Locus eget.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
      <p className="text-center text-gray-600 mb-12">
        Lorem ipsum dolor sit amet consectetur. Sed vestibulum lectus ultrices
        vitae etiam. Locus eget.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center mb-8 md:mb-0 md:w-1/3"
          >
            <div className="bg-white rounded-full p-4 shadow-md mb-4">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <svg
          className="absolute top-1/2 left-0 w-full"
          height="6"
          viewBox="0 0 100 6"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,3 Q 50,6 100,3"
            stroke="#FFA500"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default HowItWorks;
