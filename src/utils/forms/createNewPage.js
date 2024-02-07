import { toast } from "react-toastify";
import * as Yup from "yup";
import QuestionMark from "../../assets/icons/QuestionMark";

let createNewPage = {
  template: [
    {
      container: {
        className: "input-container white-bg",
      },
      label: {
        text: "Label",
        className: "label",
      },
      input: {
        type: "text",
        name: "label",
        placeholder: "Enter the label page",
        className: "input",
      },
      caption: {
        text: "This label will be displayed on the sidebar",
        className: "block text-sub_text text-[12px] mt-1",
      },
    },
    {
      container: {
        className: "input-container white-bg ",
      },
      label: {
        text: "Path",
        className: "label",
      },
      input: {
        type: "text",
        name: "path",
        id: "path",
        className: "input",
        placeholder: "Enter a path",
      },
      caption: {
        text: "Example: /products, /add-product",
        className: "block text-sub_text text-[12px] mt-1 ",
      },
    },
    {
      container: {
        className: "input-container white-bg ",
      },
      label: {
        text: () => (
          <div className="flex items-center">
            Inner page{" "}
            <div
              className="bg-primary rounded-full p-1 ml-3"
              data-tooltip-id="helper-text"
              // data-tooltip-html="<div className='max-w-[200px]'></div>"
              data-tooltip-html="<div class='w-[250px] text-sm'>If a page is marked as inner page, it will not displayed in sidebar but you can link up with other components which is inside the page </div>"
            >
              <QuestionMark width="10" className="fill-white" />
            </div>
          </div>
        ),
        className: "",
      },
      input: {
        type: "checkbox",
        name: "isInnerPage",
        id: "isInnerPage",
        className: "input",
        placeholder: "Enter a path",
      },
    },
    {
      container: {
        className: "input-container white-bg ",
      },
      label: {
        text: "Add to sidebar group",
        className: "label",
      },
      input: {
        type: "select",
        name: "sidebarGroup",
        id: "sidebarGroup",
        placeholder: "Select a group",
        options: [],
        creatable: {
          createLabel: "Create",
        },
      },
      caption: {
        text: "",
        className: "block text-sub_text text-[12px] mt-1 ",
      },
      show: ({ values }) => {
        return values["isInnerPage"] === false;
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
    label: Yup.string().required("Please enter the label for the input"),
    path: Yup.string().required("Please enter the label for the input"),
  },
  submit: {
    api: "/pages/list",
    method: "POST",

    onAfterApiSuccess: (response) => {
      toast(response.data.message, {
        type: "success",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        onClose: () => {
          window.location.href = "/pages/new";
        },
      });
    },
  },
};
export { createNewPage };
