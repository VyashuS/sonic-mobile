import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Truck, Lamp, Zap } from "lucide-react";
import image from "../img/Group96.png";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Progress */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1/6 flex-grow-1/2 bg-indigo-600 rounded-full"></div>
          <span className="text-sm flex-end text-gray-500">01/06</span>
        </div>
      </div>

      {/* Logo */}
      <div className="text-center mt-8">
        <h1 className="text-indigo-600 text-xl font-medium">SonicLinker</h1>
      </div>

      {/* Main Content */}
      <div className="relative w-full max-w-sm mx-auto mt-12 px-6">
        {/* Floating Icons */}
        <div className="absolute inset-0 -z-10">
          <Box className="absolute top-0 left-8 text-indigo-200 w-8 h-8" />
          <Truck className="absolute top-4 right-8 text-indigo-200 w-8 h-8" />
          <Lamp className="absolute bottom-12 left-12 text-indigo-200 w-8 h-8" />
          <Zap className="absolute bottom-0 right-12 text-indigo-200 w-8 h-8" />
        </div>

        {/* Main Illustration */}
        <div className="relative">
          <img
            src={image}
            alt="Business listing preview"
            className="w-full h-64 object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="text-center mt-16 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Get 2x More Customers from Google Reviews.
          </h2>
          <p className="text-gray-600">
            We make it effortless for small businesses like restaurants, salons,
            and doctors.
          </p>
        </div>

        {/* Navigation Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/link-business")}
            className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors"
          >
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Join 1,000 businesses growing with us
        </p>
      </div>
    </div>
  );
};

export default Welcome;
