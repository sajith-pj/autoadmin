import { useState } from "react";

const SearchTable = ({ setGlobalFilter, globalFilter }) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = (value) => {
    setGlobalFilter(value || undefined);
  };
  return (
    <div className="flex">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        value={value || ""}
        className="input-style"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchTable;
