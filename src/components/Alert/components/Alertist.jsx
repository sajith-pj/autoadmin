import { useState } from "react";
import Alert from "./Alert";

const Alertist = (props) => {
  const [show, setShow] = useState(true);

  return show ? <Alert {...props} setShow={setShow} /> : <div />;
};

export default Alertist;
