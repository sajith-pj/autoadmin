import classNames from "classnames";

const Table = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  page,
  className = "",
  onTableRowClick = () => {},
}) => {
  const tableBody = (
    <tbody {...getTableBodyProps()}>
      {page.map((row, i) => {
        prepareRow(row);

        return (
          <tr
            {...row.getRowProps()}
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              onTableRowClick(row.original);
            }}
          >
            {row.cells.map((cell, i) => {
              return (
                <td
                  {...cell.getCellProps()}
                  key={i}
                  className="whitespace-nowrap"
                >
                  {cell.render("Cell")}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );

  const noData = (
    <div className="flex justify-center items-center w-full min-h-[300px] text-sub_text">
      No Data
    </div>
  );
  return (
    <div className="mb-4 h-full r-table-responsive min-h-[300px]">
      <table
        {...getTableProps()}
        className={classNames(className, "whitespace-nowrap")}
      >
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps()}
                  key={`${index}_header`}
                  className={classNames(column.className)}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {page.length > 0 && tableBody}
      </table>
      {page.length === 0 && noData}
    </div>
  );
};

export default Table;
