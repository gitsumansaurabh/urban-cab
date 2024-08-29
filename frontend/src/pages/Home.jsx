import React from "react";
import Navbar from "../components/Navbar";
import main from "../assets/main.png";
import vector from "../assets/vector.png";

function Home() {
  return (
    <div className="bg-[#F5F0E8] lg:min-h-screen relative overflow-hidden lg:h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
        <Navbar />
        <div className="relative z-10 pt-8 sm:pt-12 lg:pt-20 pb-16 sm:pb-20 lg:pb-32">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight font-abc">
              Urban Cabs
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 font-abc">
              Get cabs booked easily at affordable <br />
              prices. Your reliable ride is
              <br />
              just a click away.
            </p>
            <button className="bg-gray-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-800 transition duration-300 font-abc">
              Book a ride
            </button>
          </div>
        </div>
      </div>

      {/* Main car image */}
      <div
        className="absolute top-1/4 sm:top-1/3 lg:top-22 right-20 w-full sm:w-3/4 lg:w-3/5 h-1/2 sm:h-2/3 lg:h-full z-20 bg-contain bg-no-repeat bg-right-top"
        style={{ backgroundImage: `url(${main})` }}
      ></div>

      {/* Vector background */}
      <div
        className="absolute bottom-0 left-0 w-full bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${vector})`,
          backgroundSize: "100% auto",
          height: "50%",
        }}
      ></div>
    </div>
  );
}

export default Home;
