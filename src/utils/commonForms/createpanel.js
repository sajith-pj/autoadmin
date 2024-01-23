import * as Yup from "yup";
let createPanelForm = {
  template: [
    {
      container: {
        className: "",
      },
      label: {
        text: "Name",
        className: "",
      },
      input: {
        type: "text",
        name: "panel-name",
        placeholder: "Panel Name",
        className: "",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Choose your logo",
        className: "",
      },
      input: {
        type: "file",
        name: "panel-logo",
        id: "panel-logo",
        className: "",
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
  ],
  buttons: {
    containerClassName: "center",
    items: [
      {
        type: "submit",
        name: "submit",
        id: "submit",
        displayText: "Create Panel", // innerText of button
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
    "panel-name": Yup.string().required("Please enter the label for the input"),
    "panel-logo": Yup.string().required("Please select the type for the input"),
    "input-name": Yup.string().required("Please enter the name for the input"),
    "input-id": Yup.string().required("Please enter the id for the input"),
  },
};
export { createPanelForm };
