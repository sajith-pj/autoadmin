import { useEffect, useState } from "react";
import Modaler from "./Modaler";

const Modal = ({ show = true, ...props }) => {

  useEffect(() => {
    setShowModal(true);
  }, []);
  const [showModal, setShowModal] = useState(show);
  if (showModal) {
    return <Modaler {...props} show={showModal} setShow={setShowModal} />;
  }

  return <div />;
};

export default Modal;
