import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import image from "../img/image3.png";

const RatingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <span className="text-indigo-600 font-medium">SonicLinker</span>
        <button className="text-gray-500">Skip</button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-6 mt-16">
        {/* Phone Illustration */}
        <div className="mb-12">
          <img
            src={image}
            alt="Hands holding phone showing ratings"
            className="w-64 h-64 object-contain"
          />
        </div>

        {/* Progress Dots */}
        <div className="flex space-x-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          <div className="w-2 h-2 rounded-full bg-gray-200"></div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4 max-w-xs mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">
            Get 2x More Customers from Google Reviews.
          </h1>
          <p className="text-gray-600">
            We make it effortless for small businesses like restaurants, salons,
            and doctors.
          </p>
        </div>

        {/* Next Button */}
        <div className="w-full max-w-xs mt-8">
          <button
            onClick={() => navigate("/review")}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Next
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm mt-4">
          Join 1,000 businesses growing with us
        </p>
      </div>
    </div>
  );
};

export default RatingPage;
