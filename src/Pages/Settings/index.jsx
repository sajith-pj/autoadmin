import React from "react";
import Tab from "../../components/Tab";

const TabComponent = () => {
  const tabs = [
    { title: "Tab 1", content: <div>Styles</div> },
    { title: "Tab 2", content: <div>Api </div> },
  ];
  return (
    <div>
      <div className="mb-[10px]">
        <h1 className="text-text_color text-[30px] font-semibold ">Settings</h1>
      </div>
      <Tab tabs={tabs} />
    </div>
  );
};

export default TabComponent;
