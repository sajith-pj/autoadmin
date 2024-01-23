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
      switch (component) {
        case "Form":
          return (
            <CreateForm
              handleChange={handleChange}
              values={values}
              setFieldValue={setFieldValue}
            />
          );
        case "Table":
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
        name: "page-components",
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
          form: [],
          table: {
            headers: [],
          },
        },
        component: ({ values, hanldeChange, setFieldValue, initialValues }) => {
          console.log(values);
          let components = Array.isArray(values["page-components"])
            ? values["page-components"]
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
        displayText: "Create Page",
        className: "bg-primary text-white px-4 py-2 rounded-lg mr-4",
      },
    ],
  },
  validationSchema: {
    "sidebar-name": Yup.string().required("Please enter the sidebar name"),
    "sidebar-path": Yup.string().required("Please enter the sidebar path"),
    "page-title": Yup.string().required("Please enter the page title"),
    "page-sub-title": Yup.string().required("Please enter the page sub title"),
    "page-components": Yup.array()
      .of(
        Yup.object().shape({
          value: Yup.string().required("Please select an option"), // Adjust validation rules as needed
          label: Yup.string().required("Please select an option"), // Adjust validation rules as needed
        })
      )
      .min(1, "Please select at least one option"),
  },
  submit: {
    api: "/pages",
    method: "POST",
    body: ({ values }) => {
      let body = {};

      Object.keys(values).forEach((key) => {
        if (!["table", "form"].includes(key)) body[key] = values[key];
      });
      body["page-components"] = values["page-components"].reduce(
        (acc, current) => {
          if (
            current.value === "form" &&
            values[current.value].template.length > 0
          ) {
            acc[current.value] = values[current.value];
          } else if (
            current.value === "table" &&
            values[current.value].rows.length > 0
          ) {
            acc[current.value] = values[current.value];
          } else acc[current.value] = values[current.value];
          return acc;
        },
        {}
      );
      return body;
    },
  },
};
