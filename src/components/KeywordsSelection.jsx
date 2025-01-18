import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const KeywordsSelection = () => {
  const navigate = useNavigate();
  const [selectedKeywords, setSelectedKeywords] = useState([
    "Noodles near me",
    "Noodles near me",
  ]);

  const keywords = [
    { text: "Noodles near me", rank: "1st", color: "green" },
    { text: "Restaurants near me", rank: "7th", color: "orange" },
    { text: "Momos near me", rank: "15th", color: "red" },
    { text: "Noodles near me", rank: "3rd", color: "green" },
    { text: "Noodles near me", rank: "Optimized", color: "orange" },
    { text: "Noodles near me", rank: "9th", color: "orange" },
    { text: "Momos near me", rank: "15th", color: "red" },
    { text: "Noodles near me", rank: "8th", color: "orange" },
    { text: "Momos near me", rank: "Not Optimized", color: "red" },
    { text: "Momos near me", rank: "20th", color: "red" },
    { text: "Momos near me", rank: "25th", color: "red" },
  ];

  const handleKeywordToggle = (keyword) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword)
        ? prev.filter((k) => k !== keyword)
        : [...prev, keyword]
    );
  };

  const getColorClass = (color) => {
    switch (color) {
      case "green":
        return "bg-emerald-500";
      case "orange":
        return "bg-orange-400";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1/3 flex-grow-1/2 bg-indigo-600 rounded-full"></div>
          <span className="text-sm flex-end text-gray-500">03/06</span>
        </div>
      </div>

      <div className="p-6 flex flex-col h-[calc(100vh-4px)]">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold">Keywords Selection</h1>
          <p className="text-sm text-gray-500 mt-1">Select keywords</p>
        </div>

        {/* Keywords List */}
        <div className="flex-1 overflow-y-auto">
          {keywords.map((keyword, index) => (
            <div
              key={index}
              className="flex items-center mb-5 cursor-pointer"
              onClick={() => handleKeywordToggle(keyword.text)}
            >
              {/* Checkbox */}
              <div
                className={`w-5 h-5 rounded border ${
                  selectedKeywords.includes(keyword.text)
                    ? "border-indigo-600 bg-indigo-600"
                    : "border-gray-200"
                } mr-3 flex items-center justify-center`}
              >
                {selectedKeywords.includes(keyword.text) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>

              {/* Color Dot */}
              <div
                className={`w-2 h-2 rounded-full ${getColorClass(
                  keyword.color
                )} mr-3`}
              />

              {/* Keyword Text */}
              <span className="flex-1 text-sm">{keyword.text}</span>

              {/* Rank */}
              <span className="text-sm text-gray-500">{keyword.rank}</span>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="pt-4 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400"
          >
            ←
          </button>
          <button
            onClick={() => navigate("/content-ideas")}
            className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default KeywordsSelection;
