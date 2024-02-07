import classNames from "classnames";
import ChevronArrow from "../../assets/icons/ChevronArrow";

const DataTablePagination = ({
  pageOptions,
  gotoPage,
  previousPage,
  nextPage,
}) => {
  return (
    <div className="flex justify-center items-center ">
      <button
        type="button"
        name=""
        className="pagination-btn w-full h-full"
        onClick={previousPage}
      >
        <ChevronArrow
          className="fill-none stroke-border_color"
          style={{ transform: "rotate(90deg)" }}
        />
      </button>
      {pageOptions?.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          className={classNames(
            "bg-primary text-white px-3 py-1 rounded-[7px] font-semibold"
          )}
          onClick={() => gotoPage(pageNumber - 1)}
        >
          {pageNumber + 1}
        </button>
      ))}

      <button
        type="button"
        name=""
        className="pagination-btn w-full h-full"
        onClick={nextPage}
      >
        <ChevronArrow className="fill-none stroke-border_color -rotate-90" />
      </button>
    </div>
  );
};

export default DataTablePagination;
