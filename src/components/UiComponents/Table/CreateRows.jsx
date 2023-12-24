import Form from "../../Form/Form";
import * as Yup from "yup";
const CreateRows = ({ headers, addRows }) => {
  const generateForm = () => {
    const generateValdiationSchema = () => {
      return headers.reduce((schema, curenValue) => {
        schema[curenValue] = Yup.string().required(
          `Please enter ${curenValue}`
        );
        return schema;
      }, {});
    };
    console.log(generateValdiationSchema());

    let form = {
      buttons: {
        containerClassName: "center",
        items: [
          {
            type: "submit",
            name: "submit",
            id: "submit",
            displayText: "Create Row",
            className: "bg-primary text-white px-4 py-2 rounded-lg mr-4",
          },
          {
            type: "button",
            name: "cancel",
            id: "cancel",
            displayText: "Cancel",
            className: "bg-slate-400 text-white px-4 py-2 rounded-lg",
            "data-modal-close": true,
          },
        ],
      },
      validationSchema: generateValdiationSchema(),
      submit: {
        onSubmit: ({ values }) => {
          console.log(values);
          addRows(values);
        },
      },
    };
    form.template = headers.map((header) => ({
      container: {
        className: "",
      },
      label: {
        text: header,
        className: "",
      },
      input: {
        type: "text",
        name: header,
        placeholder: `Enter data for ${header}`,
        className: "",
      },
    }));
    return form;
  };

  return (
    <div>
      <Form {...generateForm()} />
    </div>
  );
};

export default CreateRows;
