import { useEffect } from "react";
import { defaultOptions } from "../props/alert-props";
import AlertOverlay from "./AlertOverlay";
import AlertLayout from "./AlertLayout";
import AlertIcon from "./AlertIcon";
import classNames from "classnames";
const Alert = ({
  show,
  setShow,
  type,
  title,
  subtitle,
  subContent,
  successButton,
  cancelButton,
  timer,
  onClose,
  alertRoots,
  addedPortalNode,
}) => {
  const closeAlert = () => {
    console.log(alertRoots);
    if (onClose) onClose();
    document.body.style.overflow = "auto";
    alertRoots.pop();
    addedPortalNode?.remove();
  };
  const autoCloseAfterTimer = () => {
    setTimeout(() => closeAlert(), timer);
  };
  const closingOnClick = () => {
    closeAlert();
  };

  const onCancelButtonClick = () => {
    cancelButton !== undefined &&
      cancelButton.onClick !== undefined &&
      cancelButton?.onClick();
    closeAlert();
  };
  const onSuccessButtonClick = () => {
    successButton !== undefined &&
      successButton.onClick !== undefined &&
      successButton?.onClick();
    closeAlert();
  };

  useEffect(() => {
    if (timer) {
      autoCloseAfterTimer();
    }
  }, []);

  return (
    <>
      <AlertOverlay onClick={closingOnClick} />
      <AlertLayout onClose={closingOnClick}>
        <AlertIcon type={type} width={100} />
        <div className="flex justify-center items-center flex-col">
          <div className="w-full flex justify-center items-center flex-col">
            <h1 className="text-[24px] font-extrabold  r-text-dark tracking-wide">
              {title}
            </h1>
            <p className="text-sub_text tracking-wide text-center">
              {subtitle}
            </p>
          </div>
        </div>
        {typeof subContent !== "undefined" && <div>{subContent()}</div>}
        <div className="flex justify-center items-center my-[16px] gap-4">
          {cancelButton?.show && (
            <div>
              <button
                type="button"
                className={classNames(
                  "rounded-[10px]",
                  cancelButton?.className
                )}
                onClick={onCancelButtonClick}
              >
                {cancelButton?.displayText}
              </button>
            </div>
          )}
          {successButton?.show && (
            <div>
              <button
                type="button"
                className={classNames(
                  "rounded-[10px]",
                  successButton?.className
                )}
                onClick={onSuccessButtonClick}
              >
                {successButton?.displayText}
              </button>
            </div>
          )}
        </div>
      </AlertLayout>
    </>
  );
};

Alert.defaultProps = defaultOptions;
export default Alert;
