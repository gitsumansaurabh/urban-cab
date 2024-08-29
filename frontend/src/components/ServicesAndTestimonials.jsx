import React from "react";
import { User, Car, Shield, Star } from "lucide-react";

const ServicesAndTestimonials = () => {
  const services = [
    {
      icon: <User className="w-6 h-6" />,
      title: "Pick up and Drop Off",
      description:
        "Lorem ipsum dolor sit amet consectetur, vestibulum lectus ultrices vitae etiam.Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Intra State Journey",
      description:
        "Lorem ipsum dolor sit amet consectetur, vestibulum lectus ultrices vitae etiam.Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Escort Services",
      description:
        "Lorem ipsum dolor sit amet consectetur, vestibulum lectus ultrices vitae etiam.Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  const testimonials = [
    {
      name: "Michelle Jane",
      role: "Car Rentals Traveler",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Cameron William",
      role: "Vacation Rental Booker",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Esther Howard",
      role: "Hotel Stays Reviewers",
      avatar: "/api/placeholder/40/40",
    },
    {
      name: "Ronald Richards",
      role: "Trip Planner Advisor",
      avatar: "/api/placeholder/40/40",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="bg-gray-100 rounded-full p-4 inline-block mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
        Testimonial
      </h2>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <div className="bg-orange-500 w-1 h-full hidden md:block"></div>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex items-center mb-4 bg-white p-2 rounded-lg shadow-sm"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-2/3 md:pl-8">
          <h3 className="text-2xl font-bold mb-4 text-orange-500">
            Well Trained Driver
          </h3>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-4">
            Lorem Ipsum Dolor Sit Amet Consectetur. Conmodo Elit Viverra Eti
            Tincdunt Tortor Egestas. Lorem Ut Eu Sed Lorem Ipsum Dolor Sit Amet
            Consectetur. Conmodo Elit Viverra Eti Tincdunt Tortor Egestas.
            Conmodo Elit Viverra Eti Tincdunt Tortor Egestas Lorem Ipsum Dolor
            Sit Amet Consectetur.
          </p>
          <p className="text-gray-600">
            Lorem Ipsum Dolor Sit Amet Consectetur. Conmodo Elit Viverra Eti
            Tincdunt Tortor Egestas. Lorem Ut Eu Sed Lorem Ipsum Dolor Sit Amet
            Consectetur. Conmodo Elit Viverra
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesAndTestimonials;
