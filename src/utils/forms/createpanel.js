import { toast } from "react-toastify";
import * as Yup from "yup";
import { closeModal } from "../../components/Modal";
let createPanelForm = {
  template: [
    {
      container: {
        className: "input-container white-bg",
      },
      label: {
        text: "Name",
        className: "label",
      },
      input: {
        type: "text",
        name: "panelName",
        placeholder: "Panel Name",
        className: "input",
      },
    },
    {
      container: {
        className: "input-container white-bg ",
      },
      label: {
        text: "Logo",
        className: "file-label",
      },
      input: {
        type: "file",
        name: "panelLogo",
        id: "panel-logo",
        className: "input",
        placeholder: "Choose youur logo",
      },
    },
  ],
  buttons: {
    containerClassName: "flex justify-end mt-[32px]",
    items: [
      {
        type: "button",
        name: "cancel",
        id: "cancel",
        displayText: "Cancel",
        className:
          "bg-secondary_btn text-secondary_text/[0.57] border border-border_color/[0.1] font-medium px-4 py-2 rounded-lg mr-4 text-[14px]", // className for button
        "data-modal-close": true,
      },
      {
        type: "submit",
        name: "submit",
        id: "submit",
        displayText: "Create", // innerText of button
        className: "bg-primary text-white px-4 py-2 rounded-lg text-[14px]",
      },
    ],
  },
  validationSchema: {
    panelName: Yup.string().required("Please enter the label for the input"),
    // panelLogo: Yup.string().required("Please select the type for the input"),
  },
  submit: {
    api: "/panel/list",
    method: "POST",
    body: ["panelName", "panelLogo"],
    onAfterApiSuccess: () => {
      toast("Panel created successfully", {
        type: "success",
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => closeModal(),
      });
    },
  },
};
export { createPanelForm };
