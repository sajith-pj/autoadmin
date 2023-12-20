import { createFieldForm } from "../../../utils/forms/createFeildForm";
import Form, { useFormer } from "../../Form/Form";
import PropTypes from "prop-types";
const CreateField = ({ defaultValue, addInputs }) => {
  const { initialValues, setFieldValue } = useFormer({
    template: createFieldForm.template,
  });
  createFieldForm.submit = {
    onSubmit: ({ values }) => {
      addInputs(values);
    },
  };

  return (
    <div>
      <Form {...createFieldForm} preloadValues={defaultValue} />
    </div>
  );
};

CreateField.propTypes = {
  addInputs: PropTypes.func,
};
export default CreateField;
