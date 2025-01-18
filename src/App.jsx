import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import RatingPage from "./components/RatingPage";
import ReviewPage from "./components/ReviewPage";
import Welcome from "./components/Welcome";
import LinkBusiness from "./components/LinkBusiness";
import KeywordsSelection from "./components/KeywordsSelection";
import ContentIdeas from "./components/ContentIdeas";
import LinkBusinessPage from "./components/LinkBusinessPage";
import AutomationPlan from "./components/AutomationPlan";
import Dashboard from "./components/Dashboard";
import BusinessDetails from "./components/BusinessDetails";

const App = () => {
  return (
    <Router>
      <div className="max-w-md mx-auto h-screen bg-white">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/rating" element={<RatingPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/link-business" element={<LinkBusiness />} />
          <Route path="/keywords" element={<KeywordsSelection />} />
          <Route path="/content-ideas" element={<ContentIdeas />} />
          <Route path="/link-page" element={<LinkBusinessPage />} />
          <Route path="/automation" element={<AutomationPlan />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/business-details" element={<BusinessDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
