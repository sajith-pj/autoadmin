import React, { useState } from "react";
import Tab from "../../components/Tab";

const TABS = [
  { id: "theme", name: "THEME" },
  { id: "api", name: "API" },
];

const TAB_CONTENT = {
  theme: "Dummy content for theme",
  api: "Dummy content for the api",
};

const Settings = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="text-lg">Configure your app</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <Tab
              key={tab.id}
              tab={tab}
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
          ))}
        </div>
        <div>
          <div className="mt-4">
            {TABS.map((tab) => (
              <div
                key={tab.id}
                className={activeTab === tab.id ? "text-sub_text" : "hidden"}
              >
                {TAB_CONTENT[tab.id]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
