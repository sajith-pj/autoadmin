import React, { useState } from "react";
import Tab from "../../components/Tab";

const TABS = [
  { id: "theme", name: "THEME" },
  { id: "api", name: "API" },
];

const Settings = () => {
  const [formData, setFormData] = useState({
    activeTab: TABS[0].id,
    headers: [{ key: "", value: "" }],
    payloads: [{ key: "", value: "" }],
    baseUrl: "",
  });

  const [warningMessages, setWarningMessages] = useState({
    baseUrl: "",
    headers: Array(formData.headers.length).fill(""),
    payloads: Array(formData.payloads.length).fill(""),
  });

  const handleTabClick = (id) => {
    setFormData({ ...formData, activeTab: id });
  };

  const handleAddHeader = () => {
    setFormData({
      ...formData,
      headers: [...formData.headers, { key: "", value: "" }],
    });
    setWarningMessages({
      ...warningMessages,
      headers: [...warningMessages.headers, ""],
    });
  };

  const handleRemoveHeader = (index) => {
    const updatedHeaders = [...formData.headers];
    updatedHeaders.splice(index, 1);
    setFormData({ ...formData, headers: updatedHeaders });

    const updatedWarnings = [...warningMessages.headers];
    updatedWarnings.splice(index, 1);
    setWarningMessages({ ...warningMessages, headers: updatedWarnings });
  };

  const handleHeaderChange = (index, key, value) => {
    const updatedHeaders = [...formData.headers];
    updatedHeaders[index] = { key, value };
    setFormData({ ...formData, headers: updatedHeaders });
  };

  const handleAddPayload = () => {
    setFormData({
      ...formData,
      payloads: [...formData.payloads, { key: "", value: "" }],
    });
    setWarningMessages({
      ...warningMessages,
      payloads: [...warningMessages.payloads, ""],
    });
  };

  const handleRemovePayload = (index) => {
    const updatedPayloads = [...formData.payloads];
    updatedPayloads.splice(index, 1);
    setFormData({ ...formData, payloads: updatedPayloads });

    const updatedWarnings = [...warningMessages.payloads];
    updatedWarnings.splice(index, 1);
    setWarningMessages({ ...warningMessages, payloads: updatedWarnings });
  };

  const handlePayloadChange = (index, key, value) => {
    const updatedPayloads = [...formData.payloads];
    updatedPayloads[index] = { key, value };
    setFormData({ ...formData, payloads: updatedPayloads });
  };

  const handleBaseUrlChange = (e) => {
    setFormData({ ...formData, baseUrl: e.target.value });
  };

  const handleSave = () => {
    let isFormValid = true;
  
    if (!formData.baseUrl.trim()) {
      setWarningMessages((prevWarnings) => ({
        ...prevWarnings,
        baseUrl: "Base URL is required",
      }));
      isFormValid = false;
    } else {
      setWarningMessages((prevWarnings) => ({
        ...prevWarnings,
        baseUrl: "",
      }));
    }
  
    const headersWarnings = formData.headers.map((header) => {
      if (!header.key.trim() || !header.value.trim()) {
        return "Header key and value are required";
      }
      return "";
    });
  
    setWarningMessages((prevWarnings) => ({
      ...prevWarnings,
      headers: headersWarnings,
    }));
  
    if (headersWarnings.some((warning) => warning)) {
      isFormValid = false;
    }
  
    const payloadsWarnings = formData.payloads.map((payload) => {
      if (!payload.key.trim() || !payload.value.trim()) {
        return "Payload key and value are required";
      }
      return "";
    });
  
    setWarningMessages((prevWarnings) => ({
      ...prevWarnings,
      payloads: payloadsWarnings,
    }));
  
    if (payloadsWarnings.some((warning) => warning)) {
      isFormValid = false;
    }
  
    if (isFormValid) {
      console.log("Form saved:", formData);
    }
  };
  

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="text-lg">Configure your app</p>
      </div>
      <div className="flex flex-col gap-4 bg-white rounded-[16px] shadow-md shadow-[#eeeeee]  p-[25px] w-full">
        <div className="flex gap-2">
          {TABS.map((tab) => (
            <Tab
              key={tab.id}
              tab={tab}
              activeTab={formData.activeTab}
              handleTabClick={handleTabClick}
            />
          ))}
        </div>
        <div>
          <div className="mt-4">
            {formData.activeTab === "api" && (
              <div className="lg:w-1/2">
                <form>
                  <div className="input-container white-bg">
                    <label htmlFor="base-url" className="label">
                      BASE URL
                    </label>
                    <input
                      type="text"
                      id="base-url"
                      name="base-url"
                      placeholder="Enter base URL"
                      value={formData.baseUrl}
                      onChange={handleBaseUrlChange}
                      className="input"
                    />
                    {warningMessages.baseUrl && (
                      <p className="text-red-500 text-sm">
                        {warningMessages.baseUrl}
                      </p>
                    )}
                  </div>
                  <div className="input-container white-bg">
                    <div className="flex items-center justify-between">
                      <label htmlFor="payloads" className="label">
                        PAYLOADS
                      </label>
                      <button
                        type="button"
                        onClick={handleAddPayload}
                        className="text-gray-500 text-[26px]"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm mb-1">
                      You can add payloads for your requests.
                    </p>
                    {formData.payloads.map((payload, index) => (
                      <div
                        key={index}
                        className="flex input-container white-bg space-x-4"
                      >
                        <input
                          type="text"
                          placeholder="Key"
                          value={payload.key}
                          onChange={(e) =>
                            handlePayloadChange(
                              index,
                              e.target.value,
                              payload.value
                            )
                          }
                          className="input"
                        />
                        <input
                          type="text"
                          placeholder="Value"
                          value={payload.value}
                          onChange={(e) =>
                            handlePayloadChange(
                              index,
                              payload.key,
                              e.target.value
                            )
                          }
                          className="input"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemovePayload(index)}
                          className="text-gray-500 text-[26px]"
                        >
                          -
                        </button>
                      </div>
                    ))}
                    {warningMessages.payloads.map((warning, index) => (
                      <p key={index} className="text-red-500 text-sm">
                        {warning}
                      </p>
                    ))}
                  </div>
                  <div className="input-container white-bg">
                    <div className="flex items-center justify-between">
                      <label htmlFor="headers" className="label">
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
                    {formData.headers.map((header, index) => (
                      <div
                        key={index}
                        className="flex input-container white-bg space-x-4"
                      >
                        <input
                          type="text"
                          placeholder="Key"
                          value={header.key}
                          onChange={(e) =>
                            handleHeaderChange(
                              index,
                              e.target.value,
                              header.value
                            )
                          }
                          className="input"
                        />
                        <input
                          type="text"
                          placeholder="Value"
                          value={header.value}
                          onChange={(e) =>
                            handleHeaderChange(
                              index,
                              header.key,
                              e.target.value
                            )
                          }
                          className="input"
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
                    {warningMessages.headers.map((warning, index) => (
                      <p key={index} className="text-red-500 text-sm">
                        {warning}
                      </p>
                    ))}
                  </div>
                </form>
                <button
                  onClick={handleSave}
                  className="bg-primary text-white px-4 py-2 rounded-md text-sm mr-4"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
