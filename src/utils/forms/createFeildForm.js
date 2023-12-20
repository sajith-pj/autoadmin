import * as Yup from "yup";
let createFieldForm = {
  template: [
    {
      container: {
        className: "",
      },
      label: {
        text: "Label",
        className: "",
      },
      input: {
        type: "text",
        name: "label",
        placeholder: "Input Label Name",
        className: "",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Input Type",
        className: "",
      },
      input: {
        type: "select",
        name: "input-type",
        placeholder: "Select input type",
        className: "",
        options: [
          {
            label: "Text",
            value: "text",
          },
          {
            label: "Email",
            value: "email",
          },
          {
            label: "Number",
            value: "number",
          },
          {
            label: "Password",
            value: "password",
          },
          {
            label: "Date",
            value: "date",
          },
          {
            label: "Textarea",
            value: "textarea",
          },
          {
            label: "Checkbox",
            value: "checkbox",
          },
          {
            label: "Radio",
            value: "radio",
          },
          {
            label: "Select",
            value: "select",
          },
        ],
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Input Name",
        className: "",
      },
      input: {
        type: "text",
        name: "input-name",
        placeholder: "Enter input name",
        className: "",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Input ID",
        className: "",
      },
      input: {
        type: "text",
        name: "input-id",
        placeholder: "Enter input ID",
        className: "",
      },
    },
    {
      render: {
        customInitialValues: {
          ["custom-select-options"]: [],
        },
        component: ({ values, handleChange, setFieldValue }) => {
          if (values["input-type"] === "select") {
            console.log(values["custom-select-ismulti"]);
            let selectOptions = [...values[`custom-select-options`]];
            return (
              <>
                <div className="input-container">
                  <label className="label">Add Options</label>
                  <div className="flex">
                    <input
                      type="text"
                      name="custom-select-option"
                      className="input"
                      onChange={handleChange}
                      value={values["custom-select-option"]}
                      placeholder="Type your option "
                      data-fr
                    />
                    <button
                      type="button"
                      className="w-[50px] h-[35px] rounded-md  bg-slate-200"
                      onClick={() => {
                        selectOptions.push(values["custom-select-option"]);
                        setFieldValue(`custom-select-options`, selectOptions);
                        setFieldValue(`custom-select-option`, "");
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex mb-3">
                  {values["custom-select-options"].length > 0 &&
                    values["custom-select-options"].map(
                      (selectOption, index) => (
                        <div
                          key={`select_option_${index}`}
                          className="bg-primary rounded-full px-4 py-2 text-white mr-4 flex"
                        >
                          {selectOption}
                          <button
                            type="button"
                            className="ml-4 px-2 rounded-[7px] bg-white text-primary"
                            onClick={() =>
                              setFieldValue(
                                `custom-select-options`,
                                selectOptions.filter(
                                  (option) => option !== selectOption
                                )
                              )
                            }
                          >
                            X
                          </button>
                        </div>
                      )
                    )}
                </div>
                <div className="input-container">
                  <input
                    type="checkbox"
                    name="input-select-multiple"
                    id="input-select-multiple"
                    className="input"
                    onChange={handleChange}
                    checked={
                      values["input-select-multiple"]
                        ? values["input-select-multiple"][0]
                        : false
                    }
                    data-fr
                  />
                  <label className="label" htmlFor="input-select-multiple">
                    Multiple
                  </label>
                </div>
              </>
            );
          }
        },
      },
    },
    {
      render: ({ values, handleChange }) => {
        let validationInptus = (
          <div className="input-container mr-4">
            <input
              type="checkbox"
              name="input-validation-isrequired"
              id="input-validation-isrequired"
              className="input"
              onChange={handleChange}
              checked={
                values["input-validation-isrequired"]
                  ? values["input-validation-isrequired"][0]
                  : false
              }
              data-fr
            />
            <label className="label" htmlFor="input-validation-isrequired">
              Required
            </label>
          </div>
        );
        if (values["input-type"] === "select") {
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
              {Array.isArray(values["input-select-multiple"]) &&
                values["input-select-multiple"][0] && (
                  <>
                    <div className="input-container mr-4">
                      <label
                        className="label"
                        htmlFor="input-validation-minimum"
                      >
                        Mininum Options to Select
                      </label>
                      <input
                        type="text"
                        name="input-validation-minimunm"
                        id="input-validation-minimunm"
                        className="input"
                        onChange={handleChange}
                        data-fr
                      />
                    </div>
                    <div className="input-container mr-4">
                      <label
                        className="label"
                        htmlFor="input-validation-maximum"
                      >
                        Maximum Options to Select
                      </label>
                      <input
                        type="text"
                        name="input-validation-maximum"
                        id="input-validation-maximum"
                        className="input"
                        onChange={handleChange}
                        data-fr
                      />
                    </div>
                  </>
                )}
              {validationInptus}
            </div>
          );
        }
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
            {values["input-type"] === "text" ||
            values["input-type"] === "textarea" ||
            values["input-type"] === "password" ? (
              <>
                <div className="input-container mr-4">
                  <label className="label" htmlFor="input-validation-minimum">
                    Mininum Characters
                  </label>
                  <input
                    type="text"
                    name="input-validation-minimunm"
                    id="input-validation-minimunm"
                    className="input"
                    onChange={handleChange}
                    data-fr
                  />
                </div>
                <div className="input-container mr-4">
                  <label className="label" htmlFor="input-validation-maximum">
                    Maximum Characters
                  </label>
                  <input
                    type="text"
                    name="input-validation-maximum"
                    id="input-validation-maximum"
                    className="input"
                    onChange={handleChange}
                    data-fr
                  />
                </div>
                <div className="input-container mr-4">
                  <label className="label" htmlFor="input-validation-maximum">
                    Accept
                  </label>
                  <select
                    name="input-validation-accept"
                    id="input-validation-accept"
                    className="input"
                    onChange={handleChange}
                    value={values["input-validation-accept"]}
                    data-fr
                  >
                    <option value="all" selected>
                      All
                    </option>
                    <option value="only_alphabets">Only Alphabets</option>
                    <option value="only_numbers">Only Numbers</option>
                    <option value="alphabets_numbers">
                      Alphabets & Number
                    </option>
                  </select>
                </div>
              </>
            ) : (
              ""
            )}
            {values["input-type"] === "email" && (
              <div className="input-container mr-4">
                <input
                  type="checkbox"
                  name="input-validation-email-format"
                  id="input-validation-email-format"
                  className="input"
                  onChange={handleChange}
                  data-fr
                />
                <label
                  className="label"
                  htmlFor="input-validation-email-format"
                >
                  Check email format
                </label>
              </div>
            )}
            {values["input-type"] === "date" && (
              <>
                <div className="input-container mr-4">
                  <label className="label" htmlFor="input-validation-minimum">
                    Mininum Date
                  </label>
                  <input
                    type="date"
                    name="input-validation-minimunm"
                    id="input-validation-minimunm"
                    className="input"
                    onChange={handleChange}
                    data-fr
                  />
                </div>
                <div className="input-container mr-4">
                  <label className="label" htmlFor="input-validation-maximum">
                    Maximum Date
                  </label>
                  <input
                    type="date"
                    name="input-validation-maximum"
                    id="input-validation-maximum"
                    className="input"
                    onChange={handleChange}
                    data-fr
                  />
                </div>
              </>
            )}
            {validationInptus}
          </div>
        );
      },
    },
  ],
  buttons: {
    containerClassName: "center",
    items: [
      {
        type: "submit",
        name: "submit",
        id: "submit",
        displayText: "Create Field", // innerText of button
        className: "bg-primary text-white px-4 py-2 rounded-lg mr-4", // className for button
      },
      {
        type: "button",
        name: "cancel",
        id: "cancel",
        displayText: "Cancel",
        className: "bg-slate-400 text-white px-4 py-2 rounded-lg", // className for button
        "data-modal-close": true,
      },
    ],
  },
  validationSchema: {
    label: Yup.string().required("Please enter the label for the input"),
    "input-type": Yup.string().required("Please select the type for the input"),
    "input-name": Yup.string().required("Please enter the name for the input"),
    "input-id": Yup.string().required("Please enter the id for the input"),
  },
};

export { createFieldForm };
