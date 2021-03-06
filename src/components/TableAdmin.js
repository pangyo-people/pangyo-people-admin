import React from "react";
import { useTable } from "react-table";
import "../css/Table.css";
import accessBtn from "../assets/accessBtn.svg";
import cancelBtn from "../assets/cancelBtn.svg";

function TableAdmin({ columns, data, deleteItem, updateItem }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="table-container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.filter((e)=>e.Header!=="Id").map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.filter((e)=>e.column.Header!=="Id")
                .map((cell, idx) => {
                  if (idx === 1) {
                    return(
                    <td
                      className="tableLink"
                      onClick={() => {
                        window.open(`${cell.value.substr(0,5)==="https"?cell.value:"https://"+cell.value}`, "_blank");
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                    )
                  } else if (idx === 2) {
                    return (
                      <>
                        <td
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                        <div className="adminBtn">
                          <img
                            className="accessBtn"
                            onClick={() => updateItem(cell.row.values.id)}
                            src={accessBtn}
                            alt=""
                          />
                          <img
                            className="cancelBtn"
                            onClick={() => deleteItem(cell.row.values.id)}
                            src={cancelBtn}
                            alt=""
                          />
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default TableAdmin;
