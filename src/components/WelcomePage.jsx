import React from "react";
import { Star, ThumbsUp } from "lucide-react";
import image from "../img/Frame.png";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
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
        {/* Main Illustration */}
        <div className="mb-12">
          <img
            src={image}
            alt="Three people holding rating symbols"
            className="w-64 h-48 object-contain"
          />
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
          <div className="pt-8">
            <p className="text-gray-500 text-sm">
              Join 1,000 businesses growing with us
            </p>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="mt-12">
          <button
            onClick={() => navigate("/rating")}
            className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white hover:bg-indigo-700 transition-colors"
          >
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
