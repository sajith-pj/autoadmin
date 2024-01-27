import classNames from "classnames";
import ChevronArrow from "../../assets/icons/ChevronArrow";

const DataTablePagination = ({
  pageCount,
  pageIndex,
  gotoPage,
  previousPage,
  nextPage,
}) => {
  const getButtons = () => {
    if (pageIndex > pageCount - 5) {
      return [pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
    } else return [pageIndex + 1, pageIndex + 2, pageIndex + 3, pageIndex + 4];
  };
  return (
    <div className="flex justify-center items-center ">
      <button
        type="button"
        name=""
        className="pagination-btn w-full h-full"
        onClick={previousPage}
      >
        <ChevronArrow style={{ transform: "rotate(90deg)" }} />
      </button>
      {getButtons()?.map((pageNumber) => (
        <button
          key={pageNumber}
          type="button"
          className={classNames(
            "pagination-btn",
            pageNumber - 1 === pageIndex && "selected"
          )}
          onClick={() => gotoPage(pageNumber - 1)}
        >
          {" "}
          {pageNumber}{" "}
        </button>
      ))}

      <button
        type="button"
        name=""
        className="pagination-btn w-full h-full"
        onClick={nextPage}
      >
        <ChevronArrow className="-rotate-90"/>
      </button>
    </div>
  );
};

export default DataTablePagination;
