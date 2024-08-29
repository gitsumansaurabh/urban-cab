import React from "react";
import { Tag, DollarSign, Headphones } from "lucide-react";
import cab from "../assets/cab2.png";

const CarRentalDeals = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 w-full">
          <img
            src={cab}
            alt="Civic"
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">
            Best Services
          </h3>
          <h2 className="text-3xl font-bold mb-6">
            Feel the Best Experience With Our Rental Deals
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-lg mr-4">
                <Tag className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Deals For Every Budget</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, vestibulum lectus
                  ultrices.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-lg mr-4">
                <DollarSign className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Best Price Guaranteed</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, vestibulum lectus
                  ultrices.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-lg mr-4">
                <Headphones className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Support 24/7</h4>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur, vestibulum lectus
                  ultrices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRentalDeals;
