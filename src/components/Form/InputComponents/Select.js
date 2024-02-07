import React from "react";
import cn from "classnames";
import Styles from "../form.module.scss";
import { removeAttribute } from "../utils/commonFunction";
import SelectBox from "react-select";
import CreatableSelect from "react-select/creatable";
import classNames from "classnames";
const Select = ({
  templateInput,
  errors,
  handleChange,
  values,
  touched,
  setFieldValue,
}) => {
  const { container, input, label, caption, show } = templateInput;
  const { options } = input;
  const isShow = typeof show === "function" ? show({ values }) : show;
  if (show) {
    if (isShow) {
      return (
        <div
          className={cn(
            container?.className !== ""
              ? container?.className
              : Styles["input-container"]
          )}
        >
          {label?.text !== "" && label?.text !== undefined && (
            <label
              className={cn(
                label.className !== "" ? label.className : Styles["label"]
              )}
            >
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
          {input?.creatable.createLabel ? (
            <CreatableSelect
              closeMenuOnSelect={!input?.multiple}
              isMulti={input?.multiple}
              options={options}
              onChange={(values) => {
                if (input.multiple) {
                  setFieldValue(input.name, values);
                } else setFieldValue(input.name, values.value);
              }}
              value={
                input?.multiple
                  ? values[input.name]
                  : options.find(
                      (option) => values[input.name] === option.value
                    )
              }
              formatCreateLabel={(data) =>
                `${input?.creatable.createLabel} ${data}`
              }
              placeholder={input?.placeholder}
            />
          ) : (
            <SelectBox
              closeMenuOnSelect={!input?.multiple}
              isMulti={input?.multiple}
              options={options}
              onChange={(values) => {
                if (input.multiple) {
                  setFieldValue(input.name, values);
                } else setFieldValue(input.name, values.value);
              }}
              value={
                input?.multiple
                  ? values[input.name]
                  : options.find(
                      (option) => values[input.name] === option.value
                    )
              }
              placeholder={input?.placeholder}
            />
          )}
          {caption && caption.text !== "" && (
            <span {...caption}>{caption.text}</span>
          )}
          {touched[`${input?.name}`] &&
            errors !== undefined &&
            errors[`${input?.name}`] && (
              <span role="alert" className={classNames(Styles["error"])}>
                {errors[`${input?.name}`]}
              </span>
            )}
        </div>
      );
    }
  } else {
    return (
      <div
        className={cn(
          container?.className !== ""
            ? container?.className
            : Styles["input-container"]
        )}
      >
        {label?.text !== "" && label?.text !== undefined && (
          <label
            className={cn(
              label.className !== "" ? label.className : Styles["label"]
            )}
          >
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
        {input?.creatable.createLabel ? (
          <CreatableSelect
            closeMenuOnSelect={!input?.multiple}
            isMulti={input?.multiple}
            options={options}
            onChange={(values) => {
              if (input.multiple) {
                setFieldValue(input.name, values);
              } else setFieldValue(input.name, values.value);
            }}
            value={
              input?.multiple
                ? values[input.name]
                : options.find((option) => values[input.name] === option.value)
            }
            formatCreateLabel={(data) =>
              `${input?.creatable.createLabel} ${data}`
            }
            placeholder={input?.placeholder}
          />
        ) : (
          <SelectBox
            closeMenuOnSelect={!input?.multiple}
            isMulti={input?.multiple}
            options={options}
            onChange={(values) => {
              if (input.multiple) {
                setFieldValue(input.name, values);
              } else setFieldValue(input.name, values.value);
            }}
            value={
              input?.multiple
                ? values[input.name]
                : options.find((option) => values[input.name] === option.value)
            }
            placeholder={input?.placeholder}
          />
        )}
        {caption && caption.text !== "" && (
          <span {...caption}>{caption.text}</span>
        )}
        {touched[`${input?.name}`] &&
          errors !== undefined &&
          errors[`${input?.name}`] && (
            <span role="alert" className={classNames(Styles["error"])}>
              {errors[`${input?.name}`]}
            </span>
          )}
      </div>
    );
  }
};

Select.displayName = "Select";
export default Select;
