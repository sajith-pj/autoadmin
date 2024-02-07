import { Tooltip } from "react-tooltip";
import { createNewPage } from "../../../utils/forms/createNewPage";
import Form from "../../Form/Form";

const NewPageModal = ({ selectedPanel }) => {
  createNewPage.submit.body = ({ values }) => ({
    ...values,
    selectedPanel,
  });

  return (
    <div>
      <Form {...createNewPage} />
      <Tooltip id="helper-text" />
    </div>
  );
};

export default NewPageModal;
