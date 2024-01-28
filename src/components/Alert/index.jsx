import { createRoot } from "react-dom/client";
import Alertist from "./components/Alertist";
import { createPortal } from "react-dom";
let alertRoots = [];
const alertist = (props) => {
  const modalCount = document.querySelectorAll(".alert").length;
  const portalNode = document.querySelector("#alertl_1");
  if (!portalNode) {
    const div = document.createElement("div");
    div.id = "alert_1";
    div.className = "alert";
    document.querySelector("#root")?.append(div);
    alertRoots.push(createRoot(div));
  } else {
    const div = document.createElement("div");
    div.id = `alert_${modalCount + 1}`;
    div.className = "alert";
    document.querySelector("#root")?.append(div);
    alertRoots.push(createRoot(div));
  }
  if (alertRoots.length > 0) {
    let root = alertRoots.find(
      (root) => root._internalRoot.containerInfo.id == `alert_${modalCount + 1}`
    );
    const addedPortalNode = document.querySelector(`#alert_${modalCount + 1}`);
    if (addedPortalNode) {
      root.render(createPortal(<Alertist {...props} />, addedPortalNode));
    }
  }
};

export { alertist };
