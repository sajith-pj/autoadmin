// import  from "@/"

import ErrorIcon from "../../../assets/icons/Alertist/ErrorIcon";
import InfoIcon from "../../../assets/icons/Alertist/InfoIcon";
import OopsIcon from "../../../assets/icons/Alertist/OopsIcon";
import SuccessIcon from "../../../assets/icons/Alertist/SuccessIcon";
import WarningIcon from "../../../assets/icons/Alertist/WarningIcon";

const ICONS = [
  {
    type: "oops",
    src: (props) => <OopsIcon {...props} />,
  },
  {
    type: "error",
    src: (props) => <ErrorIcon {...props} />,
  },
  {
    type: "warning",
    src: (props) => <WarningIcon {...props} />,
  },
  {
    type: "success",
    src: (props) => <SuccessIcon {...props} />,
  },
  {
    type: "info",
    src: (props) => <InfoIcon {...props} />,
  },
];

const AlertIcon = ({ type, width, height }) => {
  const getIcon = (type) => {
    return ICONS.filter((icon) => icon.type === type)[0].src;
  };

  let iconComponent = getIcon(type);
  // iconComponent.props = Object.assign({}, iconComponent.props, { width, height });

  return (
    <div className="flex justify-center items-center">
      <div>{iconComponent({ width, height })}</div>
    </div>
  );
};

export default AlertIcon;
