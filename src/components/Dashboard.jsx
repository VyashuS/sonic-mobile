import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Eye,
  Search,
  Calendar,
  MapPin,
  Globe,
  Share2,
  Menu,
} from "lucide-react";

const StatCard = ({ title, value, trend, trendValue, icon: Icon }) => (
  <div className="bg-indigo-50 rounded-2xl p-4">
    <div className="flex items-center justify-between mb-1">
      <span className="text-gray-600 text-sm">{title}</span>
      <Icon className="w-5 h-5 text-indigo-600" />
    </div>
    <div className="flex items-baseline space-x-2">
      <span className="text-2xl font-medium">{value}</span>
      {trend && (
        <span
          className={`text-sm ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend === "up" ? "↑" : "↓"} {trendValue}%
        </span>
      )}
    </div>
  </div>
);

const KeywordCheckbox = ({ text, checked }) => (
  <div className="flex items-center space-x-3">
    <input
      type="checkbox"
      checked={checked}
      className="w-5 h-5 rounded border-gray-300 text-indigo-600"
      onChange={() => {}}
    />
    <span className="text-gray-600 text-sm">{text}</span>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Interactions",
      value: "231",
      trend: "up",
      trendValue: "12",
      icon: Users,
    },
    {
      title: "Views",
      value: "111",
      trend: "down",
      trendValue: "3",
      icon: Eye,
    },
    {
      title: "Searches",
      value: "23",
      trend: "up",
      trendValue: "18",
      icon: Search,
    },
    {
      title: "Bookings",
      value: "14",
      trend: "up",
      trendValue: "10",
      icon: Calendar,
    },
    {
      title: "Directions",
      value: "10",
      trend: "down",
      trendValue: "3",
      icon: MapPin,
    },
    {
      title: "Website Clicks",
      value: "7",
      trend: "down",
      trendValue: "1",
      icon: Globe,
    },
  ];

  return (
    <div className="p-6 h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-indigo-600 text-xl font-medium">SonicLinker</h1>
        <div className="flex items-center space-x-3">
          <img
            src="https://s3-alpha-sig.figma.com/img/0acf/bfe6/c207c730400af900ee2751c985488fad?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HhLylPagkrfU09KQ2jYLFYa~340N9t9F828Rsx1EpBQYELKtfw8Lf-sYAj-YtHpc2NJkeB95PgVCY4TXfNzO-lR6nGdUWorqaKaUnGx4NXHZIYw62IkFzoxSMzD8yTSeB~qcTOH5hZCtBEZU7DIBHZIv60dn-f52JiqhPg1p5vVLPZ0MjjUR9wIvW72TnBshwYQGAebWgU~fQbIgD7Ia8RiTPdgJaBLfKmPBam7v7MjM8Lj7D22NKd92FekcWd8c7BozTR08UrrghPWXe2Zj61HFD3xRSsZvifKWJpYxgCFhyHFuFzy51RtB1EyywqQ8Jp9VA-b~RlrTRpde1-la0w__"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <button
            onClick={() => navigate("/business-details")}
            className="text-gray-600"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            trend={stat.trend}
            trendValue={stat.trendValue}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Recommended Actions */}
      <div>
        <h2 className="text-base text-gray-600 mb-4">Recommended actions</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-base font-medium mb-2">Get more reviews</h3>
            <p className="text-sm text-gray-500 mb-3">
              Share your GBP link with your customers
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex-grow">
                <input
                  type="text"
                  value="https://njenwikJzeeIjknweoihow..."
                  readOnly
                  className="w-full bg-gray-50 text-sm p-3 rounded-xl text-gray-600"
                />
              </div>
              <button className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium mb-3">
              Choose keywords to rank better on
            </h3>
            <div className="space-y-4">
              <KeywordCheckbox text="Japanese food near me" checked={true} />
              <KeywordCheckbox
                text="Best asian restaurant near me"
                checked={false}
              />
              <KeywordCheckbox
                text="Best asian restaurant near me"
                checked={false}
              />
              <KeywordCheckbox
                text="Best asian restaurant near me"
                checked={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
