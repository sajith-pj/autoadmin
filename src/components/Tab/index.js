import React, { useState } from "react";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className=" rounded-md overflow-hidden">
      <div className="flex">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 flex justify-start gap-8 ${
              index === activeTab
                ? " border-b-4 border-primary_btn transition-all duration-200"
                : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tab;
