import TableDropdown from "./TableDropdown";


const DropFilter = ({ options = [], onFilterClick }) => {
  return (
    <div>
      <TableDropdown
        optionsList={options}
        onClick={onFilterClick}
        buttonClassName="border border-gray-500 px-4 py-2 rounded-[10px]"
        optionsContainerClassName="top-[40px] right-0 r-bg-secondary-dark"
      />
    </div>
  );
};

export default DropFilter;
