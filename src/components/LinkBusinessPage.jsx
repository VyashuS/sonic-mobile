import React from "react";
import { useNavigate } from "react-router-dom";
import { HelpCircle } from "lucide-react";

const LinkBusinessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-4/6 flex-grow-1/2 bg-indigo-600 rounded-full"></div>
          <span className="text-sm flex-end text-gray-500">05/06</span>
        </div>
      </div>

      <div className="p-6 flex flex-col h-[calc(100vh-4px)]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-center">
            Link Your Business Page
          </h1>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Sign in to your business account
          </p>
        </div>

        {/* Google Account Button */}
        <div className="mb-8">
          <button className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center gap-2 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="#4285F4"
                d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
              />
              <path
                fill="#34A853"
                d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
              />
              <path
                fill="#FBBC05"
                d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
              />
              <path
                fill="#EA4335"
                d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
              />
            </svg>
            <span className="text-sm text-gray-700 font-medium">
              Google Account
            </span>
          </button>
        </div>

        {/* How to Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center mb-6">
            <HelpCircle className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-sm font-medium">How to do it</span>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium mb-1">Step 1</p>
              <p className="text-sm text-gray-500">
                Sign-in to your manager or admin account
              </p>
            </div>

            <div>
              <p className="text-sm font-medium mb-1">Step 2</p>
              <p className="text-sm text-gray-500">
                Select the "allow edit" check box
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            We only use this to manage your business page.
            <br />
            Your data is secure.
          </p>
        </div>

        {/* Navigation */}
        <div className="mt-auto pt-6 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400"
          >
            ←
          </button>
          <button
            onClick={() => navigate("/automation")}
            className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkBusinessPage;
