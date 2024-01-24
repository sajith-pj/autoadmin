import { modal } from "../Modal";
import CreatePanelModal from "./CreatePanelModal";
import CreateIcon from "../../assets/images/create.png";

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
        className=" "
        onClick={createPanel}
      >
      <img src={CreateIcon} alt="create icon " className="w-[60px] h-[60px] "/>
      </button>
    </div>
  );
};

export default CreatePanel;
