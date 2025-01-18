import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AutomationPlan = () => {
  const navigate = useNavigate();
  const [automations, setAutomations] = useState({
    posts: false,
    reviews: true,
    photos: false,
    questions: false,
  });

  const toggleAutomation = (key) => {
    setAutomations((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const Toggle = ({ enabled, onToggle }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-200 ease-in-out ${
        enabled ? "bg-indigo-600" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out shadow ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  const PreviewLink = ({ text }) => (
    <button className="text-indigo-600 text-sm mt-1 font-normal">{text}</button>
  );

  return (
    <div className="px-6 h-screen flex flex-col bg-white">
      {/* Progress bar */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="h-1 w-full flex-grow-1/2 bg-indigo-600 rounded-full"></div>
          <span className="text-sm flex-end text-gray-500">06/06</span>
        </div>
      </div>

      <div className="mt-16 mb-8">
        <h1 className="text-2xl font-semibold mb-1">Choose Automation Plan</h1>
        <p className="text-sm text-gray-500">
          Forever free. No asterisks or hidden costs.
        </p>
      </div>

      <div className="flex-grow space-y-8">
        {/* Automate Posts */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-medium">Automate posts</h3>
            <Toggle
              enabled={automations.posts}
              onToggle={() => toggleAutomation("posts")}
            />
          </div>
          <p className="text-sm text-gray-500">One new post every week</p>
          <PreviewLink text="View Sample Post" />
        </div>

        {/* Automate Review Replies */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-medium">Automate review replies</h3>
            <Toggle
              enabled={automations.reviews}
              onToggle={() => toggleAutomation("reviews")}
            />
          </div>
          <p className="text-sm text-gray-500">
            Reply to all new reviews instantly
          </p>
          <PreviewLink text="Example: Kind of replies that will be posted" />
        </div>

        {/* Automate Photos */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-medium">Automate photos</h3>
            <Toggle
              enabled={automations.photos}
              onToggle={() => toggleAutomation("photos")}
            />
          </div>
          <p className="text-sm text-gray-500">One new photo every week</p>
          <PreviewLink text="Example: Kind of photo that will be posted" />
        </div>

        {/* Answer Customer Questions */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-base font-medium">Answer customer questions</h3>
            <Toggle
              enabled={automations.questions}
              onToggle={() => toggleAutomation("questions")}
            />
          </div>
          <p className="text-sm text-gray-500">
            Reply to all new questions instantly
          </p>
          <PreviewLink text="Example: Kind of answer that will be posted" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="py-8 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="w-12 h-12 rounded-full border border-indigo-600 text-indigo-600 flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default AutomationPlan;
