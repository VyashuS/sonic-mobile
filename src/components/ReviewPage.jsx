import React from "react";
import { useNavigate } from "react-router-dom";
import { ThumbsUp, Star, Heart } from "lucide-react";
import image from "../img/image.png";

const ReviewPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 h-screen flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <span className="text-indigo-600">SonicLinker</span>
        <button className="text-gray-500">Skip</button>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="mb-12">
          <div className="relative w-64 h-80 bg-amber-50 rounded-lg flex items-center justify-center">
            <div className="relative">
              <img
                src={image}
                alt="Review interface"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="text-center w-full">
          <h2 className="text-xl font-bold mb-2">
            Get 2x More Customers from Google Reviews.
          </h2>
          <p className="text-gray-600 mb-8">
            We make it effortless for small businesses like restaurants, salons,
            and doctors.
          </p>

          <button
            onClick={() => navigate("/welcome")}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg mb-4"
          >
            Next
          </button>

          <p className="text-gray-500">Join 1,000 businesses growing with us</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
