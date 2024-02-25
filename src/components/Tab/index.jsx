import React from "react";

const Tab = ({ tab, activeTab, handleTabClick }) => {
  const isActive = activeTab === tab.id;

  return (
    <button
      key={tab.id}
      className={`mr-8 mt-4 rounded-t-lg focus:outline-none 
      ${isActive
        ? "text-text_color border-b-2 border-primary_btn text-md font-semibold"
        : "text-text_color border-b-2 border-transparent hover:border-primary_btn text-md font-semibold"
      }`}
      onClick={() => handleTabClick(tab.id)}
    >
      {tab.name}
    </button>
  );
};

export default Tab;
