import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-4">About</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur. Lectus volutpat lacinia
              augue sed pellentesque faucibus. Quis pulvinar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                "Book A Ride",
                "Become A Driver",
                "Our Services",
                "About Us",
                "Contact Us",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-bold text-green-800 mb-4">Product</h3>
            <ul className="space-y-2">
              {[
                "My Account",
                "Blog",
                "Invest Your Car",
                "Become A Partner",
                "FAQ",
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Weekly Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">
              Weekly Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Get blog articles and offers via email
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} Logoipsum. All rights reserved | Terms |
            Privacy | Site Map
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
