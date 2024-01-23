import { useState } from "react";
import { closeModal, modal } from "../../Modal";
import CreateHeader from "./CreateHeader";
import CreateRows from "./CreateRows";
import Table from "../../Table";
import ReactSelect from "react-select";

const CreateTable = ({ setFieldValue, values }) => {
  const [loadDataFromApi, setLoadDataFromApi] = useState(false);
  const [tableConfig, setTableConfig] = useState({
    loadFromApi: {
      api: "",
      method: "",
    },
    match: {
      header: "",
      dataKey: "",
    },
  });
  const [headers, setHeaders] = useState(values.table.headers || []);
  const [rows, setRows] = useState(values.table.rows || []);
  const [errors, setErrors] = useState({
    headerError: "",
    rowsError: "",
    loadFromApi: {
      method: "",
      api: "",
    },
  });
  let methodOptions = [
    {
      label: "GET",
      value: "GET",
    },
    {
      label: "POST",
      value: "POST",
    },
    {
      label: "PUT",
      value: "PUT",
    },
    {
      label: "PATCH",
      value: "PATCH",
    },
    {
      label: "DELETE",
      value: "DELETE",
    },
    {
      label: "HEAD",
      value: "HEAD",
    },
    {
      label: "OPTIONS",
      value: "OPTIONS",
    },
  ];

  const addHeaders = (headers) => {
    setHeaders(headers);
    setErrors({ ...errors, headerError: "" });
  };
  const addRows = (tableRows) => {
    setRows([...rows, tableRows]);
    setErrors({ ...errors, rowsError: "" });
  };

  const getHeaderOptions = headers.map((header) => ({
    label: header,
    value: header,
  }));

  const createHeader = () => {
    modal({
      maxWidth: 450,
      component: () => (
        <CreateHeader addHeaders={addHeaders} addRows={addRows} x />
      ),
      header: { heading: "Create Table Headers" },
    });
  };

  const createRows = () => {
    modal({
      maxWidth: 450,
      component: () => <CreateRows headers={headers} addRows={addRows} />,
      header: { heading: "Create Table Rows" },
    });
  };

  const validateForm = () => {
    let headerError = "";
    let rowsError = "";
    if (headers.length === 0) {
      headerError = "Please create headers";
    }
    if (rows.length === 0) {
      rowsError = "Please create headers";
    }

    if (headerError !== "" && rowsError !== "") {
      setErrors({ ...errors, headerError, rowsError });
      return false;
    }
    return true;
  };

  const saveTable = () => {
    const isValid = validateForm();
    if (!isValid) return;
    if (!loadDataFromApi)
      setFieldValue("table", { ...values.table, headers, rows });
    else setFieldValue("table", {});
    closeModal();
  };
  return (
    <div>
      <div>
        {[errors.rowsError, errors.headerError].map((error, index) => {
          if (error !== "") {
            return (
              <div
                key={index}
                className="bg-red-200 text-red-800 p-3 text-sm rounded-md mb-4"
              >
                <p className="error">{errors[error]}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex justify-between">
        <div
          className="input-container flex justify-center items-center "
          style={{ margin: 0 }}
        >
          <input
            type="checkbox"
            className="input"
            id="load-data-api"
            onChange={(event) => setLoadDataFromApi(event.target.checked)}
            checked={loadDataFromApi}
            style={{ margin: 0 }}
          />
          <label
            className="label"
            htmlFor="load-data-api"
            style={{ margin: 0 }}
          >
            Load the data from API
          </label>
        </div>
        <div>
          {!loadDataFromApi && headers.length > 0 && (
            <button
              type="button"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm"
              onClick={createRows}
            >
              Add Rows
            </button>
          )}
          <button
            type="button"
            className="bg-primary text-white px-4 py-2 rounded-md text-sm ml-4"
            onClick={createHeader}
          >
            Add Headers
          </button>
        </div>
      </div>
      <div className="w-full overflow-auto my-5">
        {loadDataFromApi ? (
          <div className="grid gap-x-3 grid-cols-1 md:grid-cols-2">
            <div className="input-container">
              <label className="label">API </label>
              <input
                type="text"
                name="api"
                className="input"
                onChange={(event) =>
                  setTableConfig({
                    ...tableConfig,
                    loadFromApi: {
                      ...tableConfig.loadFromApi,
                      api: event.target.value,
                    },
                  })
                }
                value={tableConfig.loadFromApi.api}
              />
              <p className="error">
                {errors.loadFromApi.api !== "" && errors.loadFromApi.api}
              </p>
            </div>
            <div className="input-container relative z-10">
              <label className="label">Method</label>
              <ReactSelect
                name="method"
                onChange={(value) =>
                  setTableConfig({
                    ...tableConfig,
                    loadFromApi: {
                      ...tableConfig.loadFromApi,
                      method: value.label,
                    },
                  })
                }
                value={{
                  label: tableConfig.loadFromApi.method,
                  value: tableConfig.loadFromApi.method,
                }}
                options={methodOptions}
                menuPortalTarget={document.body}
                styles={{
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
              <p className="error">
                {errors.customApiMethod !== "" && errors.customApiMethod}
              </p>
            </div>
            <div className="col-span-2">
              <div>Map the headers and data</div>
              <div className="text-xs">
                Help us to match the data and header
              </div>
            </div>

            <div className="input-container relative z-10">
              <label className="label">Header</label>
              <ReactSelect
                name="header"
                onChange={(value) =>
                  setTableConfig({
                    ...tableConfig,
                    match: {
                      ...tableConfig.match,
                      header: value.label,
                    },
                  })
                }
                value={{
                  label: tableConfig.match.header,
                  value: tableConfig.match.header,
                }}
                options={getHeaderOptions}
                menuPortalTarget={document.body}
                styles={{
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
              <p className="error">
                {errors.customApiMethod !== "" && errors.customApiMethod}
              </p>
            </div>
            <div className="input-container relative z-10">
              <label className="label">Data Key</label>
              <ReactSelect
                name="key"
                onChange={(value) =>
                  setTableConfig({
                    ...tableConfig,
                    match: {
                      ...tableConfig.match,
                      dataKey: value.label,
                    },
                  })
                }
                value={{
                  label: tableConfig.match.dataKey,
                  value: tableConfig.match.dataKey,
                }}
                options={methodOptions}
                menuPortalTarget={document.body}
                styles={{
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
              />
              <p className="error">
                {errors.customApiMethod !== "" && errors.customApiMethod}
              </p>
            </div>
          </div>
        ) : (
          <Table header={headers} rows={rows} />
        )}
      </div>
      <div>
        <button
          type="button"
          className="bg-primary text-white px-4 py-2 rounded-md text-sm mr-4"
          onClick={saveTable}
        >
          Save
        </button>

        <button
          type="button"
          className="bg-slate-400 text-white px-4 py-2 rounded-lg text-sm"
          data-modal-close
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateTable;
