import * as Yup from "yup";
import { modal } from "../../components/Modal";
import CreateForm from "../../components/UiComponents/Form/CreateForm";
import CreateTable from "../../components/UiComponents/Table";

const handleCustomize = ({
  component,
  values,
  handleChange,
  setFieldValue,
}) => {
  modal({
    show: true,
    maxWidth: 450,
    component: () => {
      console.log(component); 
      switch (component) {
        case "Form":
          return (
            <CreateForm
              handleChange={handleChange}
              values={values}
              setFieldValue={setFieldValue}
            />
          );
        case "table":
          return (
            <CreateTable
              handleChange={handleChange}
              values={values}
              setFieldValue={setFieldValue}
            />
          );
        default:
          return;
      }
    },
    header: {
      heading: `Create your ${component}`,
    },
  });
};
export const creatPageForm = {
  template: [
    {
      container: {
        className: "",
      },
      label: {
        text: "Sidebar Menu Name",
        className: "",
      },
      input: {
        type: "text",
        name: "sidebar-name",
        placeholder: "Sidebar Menu Name",
        className: "",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Sidebar Path",
        className: "",
      },
      input: {
        type: "text",
        name: "sidebar-path",
        placeholder: "Sidebar Path",
        className: "",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Page Title",
        className: "",
      },
      input: {
        type: "text",
        name: "page-title",
        placeholder: "Page Title",
        className: "",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Page Sub Title",
        className: "",
      },
      input: {
        type: "text",
        name: "page-sub-title",
        placeholder: "Page Sub Title",
        className: "",
      },
    },
    {
      container: {
        className: "",
      },
      label: {
        text: "Select Your Page Component",
        className: "",
      },
      input: {
        type: "select",
        name: "page-component",
        placeholder: "Page Sub Title",
        className: "",
        multiple: true,
        options: [
          {
            label: "Form",
            value: "form",
          },
          {
            label: "Tab",
            value: "tab",
          },
          {
            label: "Table",
            value: "table",
          },
          {
            label: "DataTable",
            value: "datatable",
          },
          {
            label: "Cards",
            value: "Cards",
          },
        ],
      },
    },
    {
      render: {
        customInitialValues: {
          "custom-api": [],
          inputData: [],
        },
        component: ({ values, hanldeChange, setFieldValue, initialValues }) => {
          let components = Array.isArray(values["page-component"])
            ? values["page-component"]
            : [];
          if (components.length > 0) {
            return (
              <div className="flex">
                {components.map((component, index) => (
                  <div
                    key={`component_${index}`}
                    className="bg-primary rounded-full px-4 py-2 text-white mr-4 "
                  >
                    {component.label}
                    <button
                      type="button"
                      className="ml-4 px-2 rounded-[7px] bg-white text-primary"
                      onClick={() =>
                        handleCustomize({
                          component: component.label,
                          values,
                          setFieldValue,
                          hanldeChange,
                          initialValues,
                        })
                      }
                    >
                      Customize
                    </button>
                  </div>
                ))}
              </div>
            );
          }
        },
      },
    },
  ],
  buttons: {
    containerClassName: "center",
    // button will rendered inside a container div, containerClassName will assigned to the container div
    items: [
      // button object
      {
        type: "submit",
        name: "submit",
        id: "submit",
        displayText: "Sign In", // innerText of button
        className: "", // className for button
      },
    ],
  },
  validationSchema: {
    username: Yup.string().required("Please enter the username"), // username is name of input type text
    password: Yup.string().required("Please enter the password"), // password is name of input type  password
  },
  submit: {
    onSubmit: ({ values }) => console.log(values),
  },
};
