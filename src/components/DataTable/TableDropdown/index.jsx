import classNames from "classnames";
import { useState } from "react";
import ChevronArrow from "../../../assets/icons/ChevronArrow";

const TableDropdown = ({
  buttonClassName = "",
  optionsList = [],
  onClick = () => {},
  optionsContainerClassName = "",
  placeholder = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    name: "",
    value: "",
  });

  const onOptionClick = ({ name, value }) => {
    onClick({ name, value });
    setSelected({ name, value });
    setIsOpen(false);
  };

  if (optionsList.length > 0) {
    return (
      <div className="relative">
        <button
          type="button"
          className={classNames("flex items-center", buttonClassName)}
          onClick={() => setIsOpen(true)}
        >
          <span>
            {" "}
            {selected?.name !== ""
              ? selected?.name
              : placeholder !== ""
              ? placeholder
              : optionsList[0]?.name}{" "}
          </span>
          <span className="ml-4">
            <ChevronArrow className="fill-none stroke-white" />
          </span>
        </button>
        {isOpen && (
          <>
            <div
              className="fixed top-0 left-0 z-50 h-screen w-full overflow-hidden bg-transparent"
              onClick={() => setIsOpen(false)}
            ></div>
            <div
              className={classNames(
                "absolute z-[51] rounded-[10px]  p-2",
                optionsContainerClassName
              )}
            >
              {optionsList.map((option, index) => (
                <button
                  type="button"
                  key={index}
                  className={classNames(
                    "pointer rounded-[10px]  py-2 hover:bg-[#ffffff74] ",
                    option?.className
                  )}
                  value={option?.value}
                  onClick={() =>
                    onOptionClick({ name: option.name, value: option.value })
                  }
                >
                  {option?.name}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
  return null;
};

export default TableDropdown;
