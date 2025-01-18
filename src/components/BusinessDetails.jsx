import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-semibold ml-4">Business Details</h1>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/45af/2656/ea48f45fbbd9a79025b6128fc477ae09?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gt108H3cta3SakO6Am0IQ3W0bhpBMbjdFPZSWAKRBFiwg7ogxDx6XD0EGFeZgLsjQQiYqf944LzwU15fQQ4apPverv9a-92SH0~qHb-AOAmLZTW~ELqt974cD2f0tfb1mZEbu95a6lDTTst05i0CuRyd4Ygre1cl2DFfDYOjyrmepi3sIVPHWmEikFMv9gBsIBrsqihcz7w9xMf8vKQt5a1y7-~ji67TyfwOwUidN89fv2Kn6yOzFs3omxAvxd6YYmM2Y7htuunQz94kJ8H2NZ5VEISa3MVtKcP1GiVkK5pWHYsjObWgqvgTLw7rQEvlC7RKJjK~12RVqC9CGIYCaw__"
            alt="Etsy Logo"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h2 className="text-lg font-semibold mb-1">ElemenOPillows</h2>
        <p className="text-gray-600 text-sm">elemenopillows123@gmail.com</p>
      </div>

      {/* Logout Button */}
      <div className="fixed bottom-8 left-4 right-4">
        <button
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium"
          onClick={() => {
            /* Add logout logic */
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default BusinessDetails;
