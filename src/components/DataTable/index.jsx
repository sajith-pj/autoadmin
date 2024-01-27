import { useMemo } from "react";
import { useGlobalFilter, usePagination, useTable } from "react-table";
import DataTablePagination from "./DataTablePagination";
import DropFilter from "./DropFilter";
import PanelActionButton from "./PanelActionButton";
import SearchTable from "./SearchTable";
import Table from "./Table";
import TableDropdown from "./TableDropdown";

const DataTable = ({
  columnDef = {
    tableHeaders: [],
    panelActionButtons: { activeClassname: "", items: [] },
    filterOptions: { options: [] },
  },
  tableData = [],
  className = "",
  title = "",
  search = true,
  tableHead = () => <div />,
  onTableRowClick = () => {},
  pagination = true,
}) => {
  const { tableHeaders } = columnDef;
  const data = useMemo(() => [...tableData], [tableData]);

  const columns = useMemo(() => [...tableHeaders], [tableHeaders]);
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  let tableProps = {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    className,
    onTableRowClick,
  };

  // Render the UI for your table
  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex overflow-auto">
          <PanelActionButton buttons={columnDef?.panelActionButtons?.items} />
        </div>
        <div className="flex justify-center items-center ">
          <div className="mr-3"></div>
          <div>
            <DropFilter {...columnDef?.filterOptions} />
          </div>
        </div>
      </div>

      {tableHead !== undefined && <div>{tableHead()}</div>}

      <div className="bg-white shadow-md shadow-[#eeeeee] h-full min-h-[300px] w-full rounded-[20px] px-8 py-4">
        <div className="w-full flex mb-4">
          {title !== "" && (
            <div className="w-[75%] flex items-center">
              <h1 className="text-[18px] font-semibold capitalize tracking-wider text-text_color">
                {title}
              </h1>
            </div>
          )}
          {typeof search === "function"
            ? search()
            : search && (
                <div className="w-[25%]">
                  <SearchTable
                    filterValue=""
                    setGlobalFilter={setGlobalFilter}
                    globalFilter={globalFilter}
                  />
                </div>
              )}
        </div>
        <Table {...tableProps} />
        {pagination && page.length > 0 && (
          <div className="paginations mt-4 px-4">
            <TableDropdown
              buttonClassName="text-white px-4 py-2 rounded-[10px] bg-[#F9F9F9]/30"
              optionsContainerClassName="top-[40px] left-0 bg-"
              optionsList={[
                {
                  name: "10",
                  value: 10,
                },
                {
                  name: "20",
                  value: 20,
                },
                {
                  name: "30",
                  value: 30,
                },
              ]}
              onClick={({ value }) => {
                setPageSize(Number(value));
              }}
            />

            <DataTablePagination
              pageCount={pageCount}
              pageIndex={pageIndex}
              canPreviousPage={canPreviousPage}
              canNextPage={canNextPage}
              nextPage={nextPage}
              previousPage={previousPage}
              gotoPage={gotoPage}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DataTable;
