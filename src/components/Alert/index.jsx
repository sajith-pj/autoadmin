import { createRoot } from "react-dom/client";
import Alertist from "./components/Alertist";

const alertist = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const portalNode = document.querySelector("#portal");
  if (!portalNode) {
    const div = document.createElement("div");
    div.id = "portal";
    document.querySelector("#root")?.appendChild(div);
  }

  const addedPortalNode = document.querySelector("#portal");
  if (addedPortalNode) {
    const root = createRoot(addedPortalNode);
    root.render(<Alertist {...props} />);
  } else {
    console.error(`Error: no node found div with id of portal`);
    return null;
  }
};

export { alertist };
