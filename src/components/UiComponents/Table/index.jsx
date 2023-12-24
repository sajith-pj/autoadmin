import { useState } from "react";
import { modal } from "../../Modal";
import CreateHeader from "./CreateHeader";
import CreateRows from "./CreateRows";
import Table from "../../Table";
import ReactSelect from "react-select";

const CreateTable = ({ setFieldValue, values }) => {
  const [loadDataFromApi, setLoadDataFromApi] = useState(false);
  const [tableConfig, setTableConfig] = useState({
    api: "",
    method: "",
  });
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [errors, setErrors] = useState({
    headerError: "",
    rowsError: "",
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
  const handleSelectInput = ({ value }) =>
    setTableConfig({ ...tableConfig, [name]: value.label });
  const handleChange = (event) => {
    setTableConfig({ ...tableConfig, [event.target.name]: event.target.value });
  };
  const addHeaders = (headers) => {
    setHeaders(headers);
    setErrors({ ...errors, headerError: "" });
  };
  const addRows = (tableRows) => {
    setRows([...rows, tableRows]);
    setErrors({ ...errors, rowsError: "" });
  };
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
    setFieldValue("table", { ...values.table, headers, rows });
  };
  return (
    <div>
      <div>
        {Object.keys(errors).map((error, index) => {
          if (errors[error] !== "") {
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
        {!loadDataFromApi && (
          <div>
            {headers.length > 0 && (
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
        )}
      </div>
      <div className="w-full overflow-auto my-5">
        {loadDataFromApi ? (
          <div className="grid gap-x-3 grid-cols-1 md:grid-cols-2">
            <div className="input-container">
              <label className="label">API </label>
              <input
                type="text"
                name="customApi"
                className="input"
                onChange={handleChange}
                value={tableConfig.api}
              />
              <p className="error">
                {errors.customApi !== "" && errors.customApi}
              </p>
            </div>
            <div className="input-container">
              <label className="label">Method</label>
              <ReactSelect
                name="customApiMethod"
                onChange={(value) =>
                  handleSelectInput({ ...value, name: "customApiMethod" })
                }
                value={{
                  label: tableConfig.api,
                  value: tableConfig.api,
                }}
                options={methodOptions}
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
