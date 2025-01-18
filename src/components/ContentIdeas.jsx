import React from "react";
import { useNavigate } from "react-router-dom";
import { MoreVertical, Phone } from "lucide-react";

const ContentIdeas = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1/2 flex-grow-1/2 bg-indigo-600 rounded-full"></div>
          <span className="text-sm flex-end text-gray-500">04/06</span>
        </div>
      </div>

      <div className="p-6 flex flex-col h-[calc(100vh-4px)]">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl text-center font-semibold">Content Ideas</h1>
          <p className="text-sm text-gray-500 mt-1 text-center">
            Posting regularly improves your rank and new customer acquisition on
            Google.
          </p>
        </div>

        {/* Post Container */}
        <div className="flex-1 overflow-auto">
          <div className="bg-white rounded-2xl shadow-lg">
            {/* Post Header */}
            <div className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
                    <path
                      fill="currentColor"
                      d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    Mexican & whisk Restaurant
                  </p>
                  <p className="text-xs text-gray-500">Nov 27, 2024</p>
                </div>
              </div>
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </div>

            {/* Main Content */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
                {/* Yellow Curve */}
                <div className="absolute right-0 top-0 h-full w-1/2">
                  <div className="absolute right-0 top-0 h-full w-full bg-yellow-400 rounded-l-full transform translate-x-1/3"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 left-8">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"
                      />
                    </svg>
                  </div>
                  <svg
                    className="absolute top-12 right-12 w-4 h-4 text-yellow-400"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2a10 10 0 1010 10A10 10 0 0012 2z"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col">
                  <div>
                    {/* Discount Badge */}
                    <div className="bg-red-500 text-white rounded-full px-4 py-1 inline-block mb-6 text-sm font-medium">
                      50% OFF
                    </div>

                    {/* Logo */}
                    <div className="text-white text-xs mb-4">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 inline-block mr-1"
                      >
                        <path
                          fill="currentColor"
                          d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"
                        />
                      </svg>
                      mexicanlogo
                    </div>

                    {/* Title and Description */}
                    <h2 className="text-3xl font-bold text-white mb-2">
                      SPICY FOOD
                    </h2>
                    <p className="text-sm text-white mb-3">
                      DELICIOUS & CRISPY
                    </p>
                    <p className="text-xs text-gray-300 max-w-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat.
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center text-white text-xs">
                      <Phone className="w-4 h-4 mr-1" />
                      145 678 343
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-5 h-5 bg-gray-800/80 rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Food Image */}
              </div>
            </div>

            {/* Post Footer */}
            <div className="p-4">
              <p className="text-sm font-medium">Mexican free takeaways!</p>
              <p className="text-xs text-gray-500">
                dummy or placeholder text commonly used in graphic design,
                publishing will be distracted
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400"
          >
            ←
          </button>
          <button
            onClick={() => navigate("/link-page")}
            className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentIdeas;
