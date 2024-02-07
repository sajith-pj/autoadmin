import Form from "../../../Form/Form";
import { createPanelForm } from "../../../../utils/forms/createpanel";
const CreatePanelModal = () => {
  return (
    <div>
      <Form {...createPanelForm} />
    </div>
  );
};

export default CreatePanelModal;
