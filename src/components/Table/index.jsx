import { useState } from "react";

const Table = ({ header, rows }) => {
  const getTd = (key, row) => {
    let tableheader = header.find((header) => header === key);

    if (typeof tableheader.render == "function") {
      return tableheader.render(row);
    }
    return row[key];
  };

  const prepareRow = (row) => {
    let newRow = {};
    header.forEach((head) => {
      let rowKeys = Object.keys(row);
      if (rowKeys.includes(head)) {
        newRow[head] = row[head];
      }
    });
    return newRow;
  };
  return (
    <table className="table">
      <thead>
        <tr>
          {header.map((header, key) => (
            <th key={key}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((rowData, index) => {
          let row = prepareRow(rowData);
          return (
            <tr key={index}>
              {Object.keys(row).map((key, index) => {
                return <td key={index}>{getTd(key, row)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
