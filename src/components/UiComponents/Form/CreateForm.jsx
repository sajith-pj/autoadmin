import { useState } from "react";
import { closeModal, modal } from "../../Modal";
import CreateField from "./CreateField";
import CreatableSelect from "react-select/creatable";
import ReactSelect from "react-select";
import Pencil from "../../../assets/icons/Pencil";
import Trash from "../../../assets/icons/Trash";

const CreateForm = ({ setFieldValue }) => {
  const [databaseOptions, setDatabaseOptions] = useState([]);
  const [formDetails, setFormDetails] = useState({
    inputs: [],
    enableCustomApi: false,
    customApi: "",
    formName: "",
    formAction: "",
    database: "",
    customApiMethod: "",
  });
  const [errors, setErrors] = useState({
    formAction: "",
    database: "",
    formName: "",
    customApi: "",
    customApiMethod: "",
    inputs: "",
  });
  const addInputs = (input) =>
    setFormDetails({ ...formDetails, inputs: [...formDetails.inputs, input] });
  const editInputs = (input) => {
    let index = formDetails.inputs.findIndex(
      (field) => field.label == input.label
    );
    let inputsArray = formDetails.inputs;
    inputsArray[index] = input;
    setFormDetails({ ...formDetails, inputs: inputsArray });
  };
  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    if (type === "checkbox") {
      setFormDetails({ ...formDetails, [name]: checked });
    } else setFormDetails({ ...formDetails, [name]: value });

    setErrors({ ...errors, [name]: "" });
  };

  const handleSelectInput = ({ value, name }) => {
    setFormDetails({ ...formDetails, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const addField = () => {
    modal({
      maxWidth: 450,
      component: () => <CreateField addInputs={addInputs} />,
      header: {
        heading: `Add Field`,
      },
    });
  };
  const addOptionOnBlur = (event) => {
    let option = databaseOptions.find((option) => option.origin == "formName");
    if (!option) {
      setDatabaseOptions([
        ...databaseOptions,
        {
          label: event.target.value,
          value: event.target.value,
          origin: "formName",
        },
      ]);
    } else if (option.value != formDetails.formName) {
      let newOptins = databaseOptions.filter(
        (option) => option.origin !== "formName"
      );
      setDatabaseOptions([
        ...newOptins,
        {
          label: event.target.value,
          value: event.target.value,
          origin: "formName",
        },
      ]);
    }
  };

  const validateForm = () => {
    let formName = "";
    let formAction = "";
    let database = "";
    let customApi = "";
    let customApiMethod = "";
    let inputs = "";

    if (formDetails.formName === "") {
      formName = "Please enter form name";
    }
    if (formDetails.inputs.length === 0) {
      inputs = "Please create atleast one input field";
    }

    if (formDetails.enableCustomApi) {
      if (formDetails.customApi === "") {
        customApi = "Please select the database";
      }
      if (formDetails.customApiMethod === "") {
        customApiMethod = "Please select the database";
      }
    } else {
      if (formDetails.formAction === "") {
        formAction = "Please select submit action";
      }
      if (formDetails.database === "") {
        database = "Please select the database";
      }
    }

    if (
      formAction !== "" ||
      database !== "" ||
      formName !== "" ||
      customApi !== "" ||
      customApiMethod !== "" ||
      inputs !== ""
    ) {
      setErrors({
        ...errors,
        formAction,
        database,
        formName,
        customApi,
        customApiMethod,
        inputs,
      });
      return false;
    }
    return true;
  };

  const generateFormObject = () => {
    const getAcceptCodes = (value) => {
      switch (value) {
        case "All":
          return "All";
        case "only_alphabets":
          return "A";
        case "only_numbers":
          return "N";
        case "alphabets_numbers":
          return "A&N";
        default:
          return "";
      }
    };
    return formDetails.inputs.reduce(
      (formConfig, input) => {
        let inputObj = {
          input: {},
          label: {},
          container: { className: "mb-4" },
        };
        let validationSchema = {};
        Object.keys(input).forEach((key) => {
          if (
            key.split("-")[1] &&
            key.split("-")[0] !== "label" &&
            key.split("-")[1] !== "validation"
          ) {
            inputObj.input[key.split("-")[1]] = input[key];
          } else if (key.split("-")[0] && key.split("-")[0] === "label") {
            console.log(key.split("-")[1]);
            inputObj.label[key.split("-")[1]] = input[key];
          } else {
            validationSchema[key.split("-")[2]] = Array.isArray(input[key])
              ? input[key].length > 0
                ? true
                : false
              : key == "input-validation-accept"
              ? getAcceptCodes(input[key])
              : input[key];
          }
        });
        formConfig.template.push(inputObj);
        formConfig.validationSchema = validationSchema;
        console.log(formConfig);
        return formConfig;
      },
      { template: [], validationSchema: {} }
    );
  };
  const saveData = () => {
    const isValid = validateForm();
    if (!isValid) return;
    setFieldValue("form", generateFormObject());
    closeModal();
  };

  const openEditModal = (input) => {
    console.log(input);
    modal({
      show: true,
      maxWidth: 450,
      component: () => (
        <CreateField
          defaultValue={input}
          addInputs={editInputs}
          setFieldValue={setFieldValue}
        />
      ),
      header: {
        heading: `Add Field`,
      },
    });
  };

  let actionOptions = [
    {
      label: "CREATE",
      value: "CREATE",
    },
    {
      label: "READ",
      value: "READ",
    },
    {
      label: "UPDATE",
      value: "UPDATE",
    },
    {
      label: "DELETE",
      value: "DELETE",
    },
  ];
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

  return (
    <div>
      {errors.inputs !== "" && (
        <div className="bg-red-300 text-red-800 w-full p-2 rounded-md mb-4">
          {errors.inputs}
        </div>
      )}
      <div className="flex justify-end mb-3 ">
        <button
          type="button"
          className="bg-primary text-white px-4 py-2 rounded-md text-sm"
          name="add-fields"
          onClick={addField}
        >
          Add Field
        </button>
      </div>
      {formDetails.inputs.map((input, key) => (
        <div
          key={key}
          className="w-full border border-slate-300 px-4 py-2 rounded-md mb-4 flex justify-between items-center"
        >
          {input["label-text"]}
          <div>
            <button
              type="button"
              className="px-4 py-2 bg-slate-200 rounded-md mr-3"
            >
              <Trash width="15" />
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-slate-200 rounded-md"
              onClick={() => openEditModal(input)}
            >
              <Pencil width="15" />
            </button>
          </div>
        </div>
      ))}
      <div className="input-container">
        <label className="label">Form Name</label>
        <input
          type="text"
          className="input"
          name="formName"
          onChange={handleInputChange}
          value={formDetails.formName}
          onBlur={addOptionOnBlur}
        />
        <p className="error"> {errors.formName !== "" && errors.formName}</p>
      </div>
      <div className="input-container">
        <input
          type="checkbox"
          className="input"
          name="enableCustomApi"
          id="enableCustomApi"
          onChange={handleInputChange}
          checked={formDetails.enableCustomApi}
        />
        <label htmlFor="enableCustomApi" className="label">
          I do have api
        </label>
      </div>
      {formDetails.enableCustomApi ? (
        <div className="grid gap-x-3 grid-cols-1 md:grid-cols-2">
          <div className="input-container">
            <label className="label">API </label>
            <input
              type="text"
              name="customApi"
              className="input"
              onChange={handleInputChange}
              value={formDetails.customApi}
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
                label: formDetails.customApiMethod,
                value: formDetails.customApiMethod,
              }}
              options={methodOptions}
            />
            <p className="error">
              {errors.customApiMethod !== "" && errors.customApiMethod}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-x-3 grid-cols-1 md:grid-cols-2">
          <div className="input-container">
            <label className="label">Submit Action</label>
            <ReactSelect
              name="formAction"
              onChange={(value) =>
                handleSelectInput({ ...value, name: "formAction" })
              }
              value={{
                label: formDetails.formAction,
                value: formDetails.formAction,
              }}
              options={actionOptions}
            />
            <p className="error">
              {errors.formAction !== "" && errors.formAction}
            </p>
          </div>
          <div className="input-container">
            <label className="label">Select Database</label>
            <CreatableSelect
              name="database"
              onChange={(value) =>
                handleSelectInput({ ...value, name: "database" })
              }
              value={{
                label: formDetails.database,
                value: formDetails.database,
              }}
              options={databaseOptions}
              formatCreateLabel={(value) => `Create & Save to ${value}`}
            />
            <p className="error">{errors.database !== "" && errors.database}</p>
          </div>
        </div>
      )}
      <button type="button" className="" onClick={saveData}>
        Save
      </button>
      <button type="button" className="" data-modal-close>
        Close
      </button>
    </div>
  );
};

export default CreateForm;
