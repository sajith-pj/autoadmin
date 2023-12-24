import { useEffect, useState } from "react";
import { closeModal } from "../../Modal";

const CreateHeader = ({ addHeaders }) => {
  const [headerOptions, setHeaderOptions] = useState([]);
  const [tableHeader, setTableHeader] = useState("");
  const [error, setError] = useState("");
  const validateForm = () => {
    let optionsError = "";
    if (headerOptions.length == 0 && tableHeader === "") {
      optionsError = "Please add a header";
    }

    if (optionsError !== "") {
      setError(optionsError);
      return false;
    }
    return true;
  };

  const removeOption = (option) => {
    setHeaderOptions(() => headerOptions.filter((header) => header !== option));
  };
  const handleSubmit = () => {
    let isValid = validateForm();
    if (!isValid) return;
    closeModal();
    addHeaders(headerOptions);
  };
  return (
    <div>
      <div className="input-container">
        {error && (
          <div className="bg-red-200 text-red-800 p-3 text-sm rounded-md mb-4">
            <p className="error">{error}</p>
          </div>
        )}

        <label className="label">Add Header</label>
        <div className="flex items-center">
          <input
            type="text"
            name="input-table-header"
            className="input"
            onChange={(e) => {
              setTableHeader(e.target.value);
            }}
            value={tableHeader}
            placeholder="Type your option "
            data-fr
          />
          <button
            type="button"
            className="w-[50px] h-[33px] rounded-md  bg-slate-200"
            onClick={() => {
              if (tableHeader == "") return;
              setHeaderOptions((prevOptions) => [...prevOptions, tableHeader]);
              setTableHeader("");
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex ">
        {headerOptions.map((option, index) => (
          <div
            key={`header_${index}`}
            className="bg-primary rounded-full px-[10px] py-[5px] text-white mr-4 text-[13px]"
          >
            {option}
            <button
              type="button"
              className="ml-4 px-2 rounded-[7px] bg-white text-primary "
              onClick={() => removeOption(option)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <button
          type="button"
          className="bg-primary text-white px-4 py-2 rounded-md text-sm mr-4"
          onClick={handleSubmit}
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

export default CreateHeader;
