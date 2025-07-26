import { useState } from "react";

type TabType = 
  | { type: "home"; label: string }
  | { type: "profile"; label: string }
  | { type: "settings"; label: string };

const tabs: TabType[] = [
  { type: "home", label: "🏠 Home" },
  { type: "profile", label: "👤 Profile" },
  { type: "settings", label: "⚙️ Settings" },
];

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState<TabType["type"]>("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return "Welcome to the Home tab.";
      case "profile":
        return "You're viewing the Profile tab.";
      case "settings":
        return "Here are your Settings.";
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">🧩 Discriminated Union Tabs</h2>
      <div className="flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.type}
            className={`px-3 py-1 rounded ${activeTab === tab.type ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setActiveTab(tab.type)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="text-white">{renderContent()}</p>
    </div>
  );
};

export default TabSwitcher;
