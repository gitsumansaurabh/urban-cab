import React from "react";
import Navbar from "./Navbar";
import { CheckCircle } from "lucide-react";

const DriverRegistration = () => {
  return (
    <div className="bg-[#F5F0E8] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Navbar />

        <div className="mt-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ready To Become
            <br />A Driver
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur. Sed vestibulum lectus
            ultrices vitae etiam. Locus eget. Lorem ipsum dolor sit amet
            consectetur. Sed vestibulum lectus ultrices vitae etiam. Locus eget
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#EDE9E3] rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-4">Data Collection</h3>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet consectetur. Sed vestibulum lectus
                ultrices vitae etiam. Locus eget.
              </p>
              <div className="space-y-4">
                {["Basic Details", "Education", "Resume"].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                        index === 0 ? "bg-orange-400" : "bg-gray-300"
                      }`}
                    >
                      {index === 0 && (
                        <CheckCircle size={16} className="text-white" />
                      )}
                    </div>
                    <span className={index === 0 ? "font-semibold" : ""}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Home Address
                  </label>
                  <input
                    type="text"
                    placeholder="No 5, Doland Street"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1234567890"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Identification
                  </label>
                  <input
                    type="text"
                    placeholder="International Passport"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date Issued
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="w-32 h-12 bg-gray-200 rounded"></div>
                <button className="bg-orange-400 text-white px-6 py-2 rounded-md hover:bg-orange-500 transition duration-300">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverRegistration;
