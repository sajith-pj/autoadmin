import { createFieldForm } from "../../../utils/forms/createFeildForm";
import Form from "../../Form/Form";
import PropTypes from "prop-types";
const CreateField = ({ defaultValue, addInputs }) => {
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
