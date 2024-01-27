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
}) => {
  const closeAlert = () => {
    if (onClose) onClose();
    document.body.style.overflow = "auto";
    setShow(!show);
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
        <div className="center flex-col">
          <div className="w-full center flex-col">
            <h1 className="text-[24px] font-extrabold  r-text-dark tracking-wide">
              {title}
            </h1>
            <p className="font-semibold  r-text-ash tracking-wide text-center">
              {subtitle}
            </p>
          </div>
        </div>
        {typeof subContent !== "undefined" && <div>{subContent()}</div>}
        <div className="center my-[16px] gap-4">
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
        </div>
      </AlertLayout>
    </>
  );
};

Alert.defaultProps = defaultOptions;
export default Alert;
