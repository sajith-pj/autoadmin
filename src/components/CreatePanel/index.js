import { modal } from "../Modal";
import CreatePanelModal from "./CreatePanelModal";

const CreatePanel = () => {
  const createPanel = () => {
    modal({
      maxWidth: 600,
      component: () => <CreatePanelModal />,
      header: {
        heading: `Create Panel`,
      },
    });
  };
  return (
    <div>
      <button
        type="button"
        className="bg-primary text-white px-4 py-2 rounded-lg mr-4 "
        onClick={createPanel}
      >
        Create
      </button>
    </div>
  );
};

export default CreatePanel;
