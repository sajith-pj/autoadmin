import React, { useState } from "react";
import Tab from "../../components/Tab";

const TABS = [
  { id: "theme", name: "THEME" },
  { id: "api", name: "API" },
];

const Settings = () => {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [headers, setHeaders] = useState([{ key: "", value: "" }]);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const handleAddHeader = () => {
    setHeaders([...headers, { key: "", value: "" }]);
  };

  const handleRemoveHeader = (index) => {
    const updatedHeaders = [...headers];
    updatedHeaders.splice(index, 1);
    setHeaders(updatedHeaders);
  };

  const handleHeaderChange = (index, key, value) => {
    const updatedHeaders = [...headers];
    updatedHeaders[index] = { key, value };
    setHeaders(updatedHeaders);
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
            {activeTab === "api" && (
              <ApiSettings
                headers={headers}
                handleAddHeader={handleAddHeader}
                handleRemoveHeader={handleRemoveHeader}
                handleHeaderChange={handleHeaderChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ApiSettings = ({
  headers,
  handleAddHeader,
  handleRemoveHeader,
  handleHeaderChange,
}) => (
  <form>
    <div className="mb-4">
      <label htmlFor="base-url" className="block text-lg font-semibold">
        BASE URL
      </label>
      <input
        type="text"
        id="base-url"
        name="base-url"
        placeholder="Enter base URL"
        className="w-full mt-1 p-2 border rounded-md"
      />
    </div>
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <label htmlFor="headers" className="block text-lg font-semibold">
          HEADERS
        </label>
        <button
          type="button"
          onClick={handleAddHeader}
          className="text-gray-500 text-[26px]"
        >
          +
        </button>
      </div>
      <p className="text-sm mb-1">
        You can customize/override your request headers.
      </p>
      {headers.map((header, index) => (
        <div key={index} className="flex mb-2 justify-between">
          <input
            type="text"
            placeholder="Key"
            value={header.key}
            onChange={(e) =>
              handleHeaderChange(index, e.target.value, header.value)
            }
            className="w-1/3 p-2 border rounded-md mr-2"
          />
          <input
            type="text"
            placeholder="Value"
            value={header.value}
            onChange={(e) =>
              handleHeaderChange(index, header.key, e.target.value)
            }
            className="w-1/3 p-2 border rounded-md mr-2"
          />
          <button
            type="button"
            onClick={() => handleRemoveHeader(index)}
            className="text-gray-500 text-[26px]"
          >
            -
          </button>
        </div>
      ))}
    </div>
  </form>
);

export default Settings;
