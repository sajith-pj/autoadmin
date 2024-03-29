import React from "react";
import cn from "classnames";
import Styles from "../form.module.scss";
import {
  templateInputDefaultProps,
  templateInputProps,
} from "../props/InputProps";
import propTypes from "prop-types";
const TextInputs = ({
  templateInput,
  errors,
  handleChange,
  values,
  touched,
}) => {
  const { container, input, label, caption, show } = templateInput;
  const isShow = typeof show === "function" ? show({ values }) : show;
  if (show) {
    if (isShow) {
      return (
        <div
          {...container}
          className={cn(
            container?.className !== ""
              ? container?.className
              : Styles["input-container"]
          )}
        >
          {label?.text !== "" && label?.text !== undefined && (
            <label className={cn(Styles["label"], label.className)}>
              <span>
                {typeof label.text == "function"
                  ? label.text({
                      input: {
                        ...templateInput,
                        value: values[input.name],
                        error: errors[input.name],
                        ...label,
                      },
                    })
                  : label.text}
              </span>
            </label>
          )}
          <input
            {...input}
            className={cn(
              input?.className
                ? input?.className !== ""
                  ? input?.className
                  : Styles["input"]
                : Styles["input"]
            )}
            onChange={handleChange}
            data-invalid={
              touched[`${input?.name}`] &&
              errors !== undefined &&
              errors[`${input?.name}`]
                ? true
                : false
            }
            value={
              values[`${input?.name}`] !== undefined
                ? values[`${input?.name}`]
                : ""
            }
          />
          {caption && caption.text !== "" && (
            <span {...caption}>{caption.text}</span>
          )}
          {touched[`${input?.name}`] &&
            errors !== undefined &&
            errors[`${input?.name}`] && (
              <span role="alert" className={cn(Styles["error"])}>
                {errors[`${input?.name}`]}
              </span>
            )}
        </div>
      );
    }
  } else {
    return (
      <div
        {...container}
        className={cn(
          container?.className !== ""
            ? container?.className
            : Styles["input-container"]
        )}
      >
        {label?.text !== "" && label?.text !== undefined && (
          <label className={cn(Styles["label"], label.className)}>
            <span>
              {typeof label.text == "function"
                ? label.text({
                    input: {
                      ...templateInput,
                      value: values[input.name],
                      error: errors[input.name],
                      ...label,
                    },
                  })
                : label.text}
            </span>
          </label>
        )}
        <input
          {...input}
          className={cn(
            input?.className
              ? input?.className !== ""
                ? input?.className
                : Styles["input"]
              : Styles["input"]
          )}
          onChange={handleChange}
          data-invalid={
            touched[`${input?.name}`] &&
            errors !== undefined &&
            errors[`${input?.name}`]
              ? true
              : false
          }
          value={
            values[`${input?.name}`] !== undefined
              ? values[`${input?.name}`]
              : ""
          }
        />
        {caption && caption.text !== "" && (
          <span {...caption}>{caption.text}</span>
        )}
        {touched[`${input?.name}`] &&
          errors !== undefined &&
          errors[`${input?.name}`] && (
            <span role="alert" className={cn(Styles["error"])}>
              {errors[`${input?.name}`]}
            </span>
          )}
      </div>
    );
  }
};

// TextInputs.propTypes = propTypes.shape({
//   templateInput: templateInputProps,
//   handleChange: propTypes.func,
//   errors: propTypes.object,
//   values: propTypes.object,
//   touched: propTypes.object,
// });

TextInputs.defaultProps = {
  templateInput: templateInputDefaultProps,
  handleChange: () => {},
  errors: {},
  values: {},
  touched: {},
};

TextInputs.displayName = "TextInputs";
export default TextInputs;
