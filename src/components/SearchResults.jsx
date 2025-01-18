import React from "react";
import { useNavigate } from "react-router-dom";
import { Search, ArrowLeft, ArrowRight } from "lucide-react";

const SearchResults = () => {
  const businesses = [
    "ElemenOPillows",
    "7Eleven",
    "Encore Electric, Inc.",
    "EZ Eyecare",
    "Empiric Marketing",
  ];

  const navigate = useNavigate();

  return (
    <div className="p-6 flex flex-col min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <div className="h-1 w-full bg-purple-600 max-w-[100px]" />
        <div className="text-right text-sm text-gray-500 mt-2">02/06</div>
      </div>

      <h1 className="text-2xl font-semibold mb-6">Link Your Google Business</h1>

      {/* Search Results */}
      <div className="flex-1">
        <div className="relative mb-6">
          <input
            type="text"
            value="E"
            className="w-full p-3 pl-10 rounded-lg border border-gray-200"
          />
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="space-y-4">
          {businesses.map((business, index) => (
            <button
              key={index}
              onClick={() => navigate("/business-selected")}
              className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg"
            >
              <div className="w-5 h-5 border border-gray-300 rounded-full" />
              <span>{business}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/link-business")}
          className="w-12 h-12 rounded-full border border-purple-600 flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5 text-purple-600" />
        </button>
        <button
          onClick={() => navigate("/business-selected")}
          className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center"
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchResults;
