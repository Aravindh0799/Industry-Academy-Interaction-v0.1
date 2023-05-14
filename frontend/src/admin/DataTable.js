import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

 const Table = ({ rows, deleteRow, editRow , tableHead }) => {
  return (
   
    <div className="table-wrapper">
       {console.log("tableHead======>",tableHead)}
      <table className="table">
        <thead>
          <tr>
            <th>{tableHead?.col1}</th>
            <th className="expand">{tableHead?.col2}</th>
            <th>{tableHead?.col3}</th>
            <th>{tableHead?.col4}</th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((row, idx) => {
            

            return (
              <tr key={idx}>
                <td>{row.S_no}</td>
                <td className="expand">{row.UniName}</td>
                <td>
                  {/* <span className={`label label-${row.Domain}`}> */}
                    {row.Domain}
                  {/* </span> */}
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;