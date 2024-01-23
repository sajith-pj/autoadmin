import Form from "../Form/Form";
import { createPanelForm } from "../../utils/commonForms/createpanel";
const CreatePanelModal = () => {
  return (
    <div>
      <Form {...createPanelForm} />
    </div>
  );
};

export default CreatePanelModal;
