import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SAMPLE_BUSINESSES = [
  { name: "ElemenOPillows", location: "USA" },
  { name: "7Eleven" },
  { name: "Encore Electric, Inc." },
  { name: "EZ Eyecare" },
  { name: "Empiric Marketing" },
];

const LinkBusiness = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const filteredBusinesses = SAMPLE_BUSINESSES.filter((business) =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setIsSearching(e.target.value !== "");
    setSelectedBusiness(null);
  };

  const handleSelectBusiness = (business) => {
    setSelectedBusiness(business);
    setSearchTerm("");
    setIsSearching(false);
  };

  return (
    <div className="p-6 h-screen">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1/4 flex-grow-1/2 bg-indigo-600 rounded-full"></div>
          <span className="text-sm flex-end text-gray-500">02/06</span>
        </div>
      </div>
      <div className="mb-6">
        <h1 className="text-xl font-bold">Link Your Google Business</h1>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search your business..."
          className="w-full p-3 pl-10 border rounded-lg"
          value={searchTerm}
          onChange={handleSearch}
        />

        {isSearching && (
          <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg">
            {filteredBusinesses.map((business, index) => (
              <div
                key={index}
                className="p-3 hover:bg-gray-50 cursor-pointer"
                onClick={() => handleSelectBusiness(business)}
              >
                {business.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedBusiness && (
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
            <span className="text-red-500 text-sm">E</span>
          </div>
          <div>
            <div className="font-medium">{selectedBusiness.name}</div>
            {selectedBusiness.location && (
              <div className="text-sm text-gray-500">
                {selectedBusiness.location}
              </div>
            )}
          </div>
          <div className="ml-auto">
            <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-sm">✓</span>
            </div>
          </div>
        </div>
      )}

      {!selectedBusiness && !isSearching && (
        <p className="text-sm text-gray-600 mt-4">
          Don't have a Google Business account?{" "}
          <a href="#" className="text-indigo-600">
            Click here
          </a>{" "}
          to set it up. Not able to find your business,{" "}
          <a href="#" className="text-indigo-600">
            try this
          </a>
          !
        </p>
      )}

      <div className="absolute bottom-6 left-6 right-6 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={() => navigate("/keywords")}
          className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default LinkBusiness;
