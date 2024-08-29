import logo from "../assets/logo.png";

import React from "react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md rounded-full mx-auto max-w-6xl my-4 px-6 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <div className="flex flex-shrink-0 items-center mr-20">
            <img alt="Your Company" src={logo} className="h-12 w-auto" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {[
            "Book A Ride",
            "Become A Driver",
            "Our Services",
            "About Us",
            "Contact Us",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-600 hover:text-gray-900"
            >
              {item}
            </a>
          ))}
        </div>

        {/* User Icon and Get Started Button */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-gray-100">
            <User size={20} />
          </button>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
