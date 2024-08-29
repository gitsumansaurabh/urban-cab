import React from "react";
import cab2 from "../assets/cab2.png";
import homecar from "../assets/homecar.png";
import main from "../assets/main.png";
import taxi from "../assets/taxi.png";

const CarSelection = () => {
  return (
    <div className="bg-[#F5F0E8] py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#2D2D2D]">
          Select Your Pickup
          <br />
          Car Today
        </h2>
        <div className="relative h-[300px] md:h-[400px] overflow-hidden">
          {/* Left car */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 scale-75 opacity-100">
            <img
              src={homecar}
              alt="Left Car"
              className="max-h-full w-auto object-contain h-[300px]"
            />
          </div>

          {/* Center car */}
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 
        scale-75 "
          >
            <img
              src={main}
              alt="Center Car"
              className="max-h-full w-auto object-contain h-[300px]"
            />
          </div>

          {/* Right car */}
          <div className="absolute right-20 top-1/2 -translate-y-1/2 z-30 scale-100 opacity-100">
            <img
              src={taxi}
              alt="Right Car"
              className="max-h-full w-auto object-contain h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSelection;
